import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DataService } from '../data.service';
import { ImportsModule } from '../imports';
import { Router } from '@angular/router';
import { ToastModule } from 'primeng/toast';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { MessageService } from 'primeng/api';
import { TooltipModule } from 'primeng/tooltip';

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  providers: [DataService, MessageService],
  imports: [TooltipModule, HttpClientModule, ToastModule, ButtonModule, RippleModule, ReactiveFormsModule, CommonModule, RouterModule, ImportsModule]
})

export class LoginComponent implements OnInit {
  constructor(
    public dataSer: DataService,
    private router: Router,
    public messageser: MessageService
  ) { }

  ngOnInit() {
    console.log("login init");
    localStorage.clear();
  }

  loginDetail: FormGroup = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });

  login() {
    if (this.loginDetail.invalid) {
      this.messageser.add({ severity: 'error', summary: 'Error', detail: 'All fields required!' });
      return;
    }

    console.log("login button clicked", this.loginDetail.value);

    // Fixing duplicate subscription call
    this.dataSer.loginUser(this.loginDetail.value).subscribe((data: any) => {
      console.log("register user data", data);

      if (data.msg == 'logged in') {
        localStorage.clear();
        localStorage.setItem("token", data.secrettoken);
        localStorage.setItem("userRef", this.loginDetail.value.username);
        this.messageser.add({ severity: 'success', summary: 'Success', detail: 'Login Successfully!' });
        // navigate to dash
        setTimeout(() => {
          this.router.navigate(['/dashboard']);
        }, 1000);
      } else {
        this.messageser.add({ severity: 'error', summary: 'Error', detail: 'Invalid Data' });
      }
    });
  }
}
