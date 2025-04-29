import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { DataService } from '../data.service';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TooltipModule } from 'primeng/tooltip';
import { Router } from '@angular/router';
import { ToastModule } from 'primeng/toast';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { MessageService } from 'primeng/api';
import { blob } from 'stream/consumers';

@Component({
  selector: 'app-register',
  standalone: true,
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
  providers: [DataService, MessageService],
  imports: [TooltipModule, ToastModule, HttpClientModule, ReactiveFormsModule, CommonModule, RippleModule, ButtonModule, ToastModule, RouterModule]
})
export class RegisterComponent implements OnInit {

  @ViewChild('fileInput') fileInput!: ElementRef<HTMLInputElement>; // Reference to the file input
  fileName: string | null = null; // To hold the selected file's name

  // Trigger file input on image click
  onImageClick(): void {
    this.fileInput.nativeElement.click(); // Open the file input when the image is clicked
  }

  // Handle file selection
  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    const file = input?.files ? input.files[0] : null;

    if (file) {
      this.fileName = file.name; // Store the file name
    }
  }

  constructor(public dataSer: DataService,
    private router: Router,
    public messageser: MessageService) { }

  ngOnInit() {
    localStorage.clear();
  }

  imageName: any;
  image_path: any;
  formData = new FormData();
  ImageVisible: boolean = false;
  imageUrl: any;

  // upload_image(event: any) {
  //   debugger
  //   const file = event.target.files[0];
  //   if (!file) {
  //     console.error("No file selected.");
  //     return;
  //   }

  //   this.imageName = file.name;
  //   const reader = new FileReader();
  //   reader.onload = (e: any) => {
  //     const arrayBuffer = e.target.result;
  //     const uint8Array = new Uint8Array(arrayBuffer);
  //     const blobImage = new Blob([uint8Array], { type: file.type });

  //     this.formData = new FormData(); // initialize if not already
  //     this.formData.append("userImage", blobImage, file.name);

  //     this.dataSer.ImageUpload(this.formData).subscribe((data: any) => {
  //       console.log("data form the backend", data);
  //       if (data.message === 'success') {
  //         this.imageUrl = "http://192.168.1.179/Layout365Data/Abhay/" + this.imageName;
  //         this.messageser.add({ severity: 'success', summary: 'Success', detail: 'Image Uploaded' });
  //         this.ImageVisible = true;
  //       }
  //     });
  //   };
  //   reader.readAsArrayBuffer(file);
  // }



  upload_image(event: any) {
    debugger
    const file = event.target.files[0];
    if (!file) {
      // console.error("No file selected.");

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
          this.messageser.add({ severity: 'success', summary: 'Success', detail: 'Image Uploaded' });
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






  // User registration







  userDetails: FormGroup = new FormGroup({

    Fullname: new FormControl('', Validators.required),
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    phone_no: new FormControl('', [Validators.required, Validators.pattern(/^[1-9][0-9]{9}$/)]),
    age: new FormControl('', [Validators.required, Validators.pattern(/^([1-9]|[1-9][0-9])$/), Validators.min(1)]),
    Address: new FormControl('', Validators.required),
    userRef: new FormControl(''),
  });

  submit() {
    if (this.userDetails.invalid) {
      this.messageser.add({ severity: 'error', summary: 'Error', detail: 'Fill All Details' });
      return;
    }

    this.userDetails.value.userRef = this.userDetails.value.username;
    this.userDetails.value.image_path = this.imageName;

    this.dataSer.registerUser(this.userDetails.value).subscribe({
      next: (data: any) => {
        this.messageser.add({ severity: 'success', summary: 'Success', detail: data.msg || 'User registered successfully!', life: 3000 });
        setTimeout(() => {
          this.router.navigate(['/login']);
        }, 1000);

      },
      error: (err) => {
        console.error('Error occurred:', err);

        if (err.status === 400 && err.error?.msg === 'Duplicate Entry') {
          this.messageser.add({ severity: 'error', summary: 'Rejected', detail: 'Duplicate user found!', life: 3000 });
        } else {
          this.messageser.add({ severity: 'error', summary: 'Error', detail: err.error?.msg || 'Server error', life: 3000 });
        }
      }
    });

  }

}
