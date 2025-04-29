const crypto = require('crypto');
const config = require('../environment/.env')


const ENCRYPTION_KEY = crypto.randomBytes(16);

function encrypt(text) {
    // console.log("encryption key ===================", ENCRYPTION_KEY);
    const iv = crypto.randomBytes(16);
    // console.log("iv key ===================", iv);
    const cipher = crypto.createCipheriv('aes-128-cbc', ENCRYPTION_KEY, iv);
    let encrypted = cipher.update(text, 'utf8', 'hex');
    encrypted += cipher.final('hex');
    return iv.toString('hex') + ':' + encrypted;
}

function decrypt(encryptedText) {
    const [ivHex, encrypted] = encryptedText.split(':');
    const iv = Buffer.from(ivHex, 'hex');
    const decipher = crypto.createDecipheriv('aes-128-cbc', ENCRYPTION_KEY, iv);
    let decrypted = decipher.update(encrypted, 'hex', 'utf8');
    decrypted += decipher.final('utf8');
    return decrypted;
}



// const userToken = req.headers.authorization?.split(" ")[1]; 
// const userData = verifyToken(token);
// if (userData) {
//     // Token is valid, userData will contain payload (e.g., id, email, etc.)
//     console.log("Logged-in user:", userData);
// } else {
//     // Token is invalid or expired
//     console.log("Unauthorized");
// }

// function verifyToken(userToken) {
//     try {
//         const decryptedToken = decrypt(userToken);
//         const decoded = jwt.verify(decryptedToken, config.secretKey);

//         console.log("   Token is valid. Decoded data:", decoded);
//         return { valid: true, decoded };

//     } catch (error) {
//         console.error("Invalid token:", error.message);
//         return { valid: false, error: error.message };
//     }
// }



function verifyToken(req, res, next) {
    try {
        const authHeader = req.headers['authorization'];

        if (!authHeader || !authHeader.startsWith('Bearer ')) {
            return res.status(401).json({ message: 'No token provided or bad format' });
        }

        const userToken = authHeader.split(' ')[1]; // get token after 'Bearer'
        const check = decrypt(userToken); // Your decryption logic
        const decoded = jwt.verify(check, config.secretKey);

        // console.log("Token is valid. Decoded data:", decoded);

        // Attach decoded data to request for use in next middleware/route
        req.user = decoded;

        next(); // pass control to the next handler
    } catch (error) {
        // console.error("Invalid token:", error.message);
        return res.status(403).json({ valid: false, error: error.message });
    }
}

module.exports = { encrypt, decrypt, verifyToken };
