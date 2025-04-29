import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';


@Injectable({
  providedIn: 'root',
})
export class DataService {

  constructor(public http: HttpClient) { }

  registerUser(regData: any) {


    return this.http.post<any[]>('http://localhost:5001/api/registerUser', regData);
  }

  ImageUpload(formData: FormData) {
    // debugger

    return this.http.post<any[]>('http://localhost:5001/api/ImageUpload', formData);
  }
  loginUser(logindata: any) {
    // debugger
    // 
    return this.http.post<any[]>('http://localhost:5001/api/loginUser', logindata);
  }

  usersAllData(userRef: any) {
    // 
    return this.http.post<any[]>('http://localhost:5001/api/usersAllData', { userRef });
  }

  updateUser(userDetails: any) {

    return this.http.post<any[]>('http://localhost:5001/api/updateUser', userDetails);
  }

  deleteUser(userDetails: any) {

    return this.http.post<any[]>('http://localhost:5001/api/deleteUser', userDetails);
  }

  getUser(userRef: any) {

    return this.http.post<any[]>('http://localhost:5001/api/getUser', { userRef });
  }



}
