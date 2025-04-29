import { Component, OnInit } from '@angular/core';
import { ViewChild, ElementRef } from '@angular/core';
import { DataService } from '../data.service';
import { ImportsModule } from '../imports';
import { ConfirmationService, MessageService } from 'primeng/api';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';
import { PaginatorModule } from 'primeng/paginator';
import { ToastModule } from 'primeng/toast';
import { TooltipModule } from 'primeng/tooltip';
import { DataViewModule } from 'primeng/dataview';



interface PageEvent {
  first: number;
  rows: number;
  page: number;
  pageCount: number;
}
@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [DataViewModule, TooltipModule, ToastModule, HttpClientModule, ReactiveFormsModule, CommonModule, RouterModule, ImportsModule, PaginatorModule],
  providers: [DataService, ConfirmationService, MessageService],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {

  usersAllData: any[] = [];
  // imageUrl: any[] = [];
  filterData: any[] = [];
  image_ur: any = "http://192.168.1.179/Layout365Data/Abhay/";
  imageUrl: any;
  imageUrll: any;
  imageName: any;
  userRefValue: any;
  ImageVisible: boolean = false;
  data: any;
  loginUserData: any[] = [];
  localData: any;
  formData = new FormData();
  isProfile: boolean = false;




  first: number = 0; // Track the first index of the current page
  layout: any = 'list'; // To toggle between list and grid view

  // Handle the page change event
  onPageChange(event: any) {
    this.first = event.first;
  }




  @ViewChild('fileInput') fileInput!: ElementRef<HTMLInputElement>; // Reference to the file input
  fileName: string | null = null;
  onImageClick(): void {
    this.fileInput.nativeElement.click();
  }


  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    const file = input?.files ? input.files[0] : null;

    if (file) {
      this.fileName = file.name; // Store the file name
    }
  }


  constructor(
    public dataSer: DataService,
    private confirmationService: ConfirmationService,
    private messageService: MessageService,

    private router: Router) {
    try {
      this.userRefValue = localStorage.getItem("userRef");

    } catch (error) {

    }
  }


  ngOnInit() {
    this.getAllUser();
    this.getUser();

  }

  getAllUser() {
    this.dataSer.usersAllData(this.userRefValue).subscribe((data: any) => {
      this.usersAllData = data;
      console.log(data, 'Hello welcome to dnpl');
      this.usersAllData.forEach((element, index) => {
        element["Sno"] = index + 1;
      });

    });
  }

  getUser() {
    this.localData = localStorage.getItem('userRef');
    this.dataSer.getUser(this.localData).subscribe((data: any) => {
      this.loginUserData = data;

      this.isProfile = true;
      this.imageUrll = `${this.image_ur}${data[0].image_path}`;
    });
  }


  logout() {
    localStorage.clear();
    this.router.navigate(['/login']);

  }


  upload_image(event: any) {

    debugger
    const file = event.target.files[0];
    if (!file) {
      console.error("No file selected.");

      return;
    }

    this.imageName = file.name;

    const reader = new FileReader();

    reader.onload = (e: any) => {
      const arrayBuffer = e.target.result;
      const uint8Array = new Uint8Array(arrayBuffer);
      const blobImage = new Blob([uint8Array], { type: file.type });
      this.formData = new FormData(); // initialize if not already
      this.formData.append("userImage", blobImage, file.name);
      this.dataSer.ImageUpload(this.formData).subscribe((data: any) => {
        if (data.message == 'File uploaded successfully') {
          this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Image Uploaded' });
          this.imageUrl = "http://192.168.1.179/Layout365Data/Abhay/";
          this.imageUrl = this.imageUrl + this.imageName;

        }
      });
      setTimeout(() => {
        this.ImageVisible = true;
      }, 500);

    };

    reader.readAsArrayBuffer(file);

  }


  userDetails: FormGroup = new FormGroup({
    Fullname: new FormControl('', Validators.required),
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    phone_no: new FormControl('', [Validators.required, Validators.pattern(/^[1-9][0-9]{9}$/)]),
    age: new FormControl('', [Validators.required, Validators.pattern(/^([1-9]|[1-9][0-9])$/), Validators.min(1)]),
    Address: new FormControl('', Validators.required),
    userRef: new FormControl(''),
  });

  Editvisible: boolean = false;
  header: any = "Edit Profile";
  addVisible: boolean = false;


  // delete functionn----------
  confirm2(userdata: any) {
    this.confirmationService.confirm({
      message: 'Do you want to delete this record?',
      icon: 'pi pi-info-circle',
      acceptButtonStyleClass: 'p-button-danger p-button-sm',
      accept: () => {
        // debugger
        // call the db ans update the info 
        this.dataSer.deleteUser(userdata).subscribe((data: any) => {
          if (data.msg == "deleted") {
            this.getAllUser();
          }
          else {
            this.messageService.add({ severity: 'error', summary: 'Rejected', detail: 'Error found', life: 3000 });
          }
        });
        this.messageService.add({ severity: 'info', summary: 'Confirmed', detail: 'User deleted', life: 3000 });
        // display the data to the users

      },
      reject: () => {
        this.messageService.add({ severity: 'error', summary: 'Rejected', detail: 'You have rejected', life: 3000 });
      }
    });

  }


  Adduser() {
    this.header = "Add Profile";

    this.userDetails.reset();
    this.imageUrl = null;
    this.imageUrll = null;
    // this.showUsernameField = true;
    this.Editvisible = true;
    this.ImageVisible = false;
    this.isProfile = false;

  }

  submitUser() {
    debugger
    if (!this.userDetails.valid) {
      this.messageService.add({ severity: 'error', summary: 'Rejected', detail: 'Please fill all the details', life: 3000 });
      return;
    }
    this.userDetails.value.image_path = this.imageName;
    this.userDetails.value.userRef = this.userRefValue;

    // this.dataSer.registerUser(this.userDetails.value).subscribe((data: any) => {
    //   console.log("ye aaya backend se", data);
    //   if (data.msg === "User registered successfully!") {
    //     this.messageService.add({ severity: 'success', summary: 'Success', detail: 'User registered successfully!', life: 3000 });
    //     this.getAllUser();
    //   } else if (data.msg === 'Duplicate Entry') {
    //     this.messageService.add({ severity: 'error', summary: 'Rejected', detail: 'Duplicate User', life: 3000 });
    //     alert("asdfasdfasd");
    //   }
    //   else {
    //     this.messageService.add({ severity: 'error', summary: 'Rejected', detail: 'Invalid data', life: 3000 });
    //   }

    // });




    this.dataSer.registerUser(this.userDetails.value).subscribe({
      next: (data: any) => {
        this.messageService.add({ severity: 'success', summary: 'Success', detail: 'User registered successfully!' });
        this.getAllUser();
      },
      error: (err) => {
        console.error('Error occurred:', err);

        if (err.status === 400 && err.error?.msg === 'Duplicate Entry') {
          this.messageService.add({ severity: 'error', summary: 'Rejected', detail: 'Duplicate user found!' });
        } else {
          this.messageService.add({ severity: 'error', summary: 'Error', detail: err.error?.msg || 'Server error' });
        }
      }
    });

    this.Editvisible = false;

  }

  // filter data search function
  searchData(e: any) {
    const searchTerm = e?.target?.value?.trim().toLowerCase();
    if (searchTerm == '') {
      this.getAllUser();
    }
    this.usersAllData = this.usersAllData.filter((user: { Fullname: string, username: string, phone_no: string, Address: string }) => {
      return user.Fullname.toLowerCase().includes(searchTerm) ||
        user.username.toLowerCase().includes(searchTerm) ||
        user.phone_no.toLowerCase().includes(searchTerm) ||
        user.Address.toLowerCase().includes(searchTerm);
    });

  }

  edit() {
    this.Editvisible = false;
  }
  saveEdits() {

    if (this.userDetails.invalid) {
      this.messageService.add({ severity: 'error', summary: 'Rejected', detail: 'Please fill all the details', life: 3000 });
      return;
    }
    this.userDetails.value.image_path = this.imageName;

    // console.log("submit button clicked", this.userDetails.value);
    // console.log("image name uploading to the database", this.userDetails.value.image_path)
    this.dataSer.updateUser(this.userDetails.value).subscribe(
      (data: any) => {
        this.Editvisible = false;
        // console.log("register user data", data);
        if (data.msg == "Successfully Updated!") {
          this.messageService.add({ severity: 'info', summary: 'Confirmed', detail: 'Successfully Updated!', life: 3000 });
          this.getAllUser();
          this.getUser();
          this.Editvisible = true;
        }
        else {
          this.messageService.add({ severity: 'error', summary: 'Rejected', detail: 'Invalid data', life: 3000 });
        }
      }, (err) => {
        this.Editvisible = false
      }
    );
  }

  showDialog(id: any) {

    this.isProfile = false;
    this.Editvisible = true;
    this.header = "Edit Profile";
    var selectedUser = this.usersAllData.filter((data) => {
      return data.username == id
    })[0];
    delete (selectedUser.user_id);
    this.imageUrl = `${this.image_ur}${selectedUser.image_path}`;
    this.userDetails.patchValue({
      Fullname: selectedUser.Fullname,
      username: selectedUser.username,
      password: selectedUser.password,
      phone_no: selectedUser.phone_no,
      age: selectedUser.age,
      Address: selectedUser.Address,
    })

  }

  showDialogProfile(member: any) {
    this.isProfile = true;

    this.Editvisible = true;
    this.header = "Edit Profile";
    this.imageUrll = `${this.image_ur}${member.image_path}`;
    this.userDetails.patchValue({
      Fullname: member.Fullname,
      username: member.username,
      password: member.password,
      phone_no: member.phone_no,
      age: member.age,
      Address: member.Address,
    })
  }


  totalData: any;
  truncateText(text: any, maxLength: any) {
    if (!text) return '';
    return text.length > maxLength ? text.slice(0, maxLength) + '...' : text;
  }
}
