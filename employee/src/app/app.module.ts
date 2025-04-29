import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { routes } from './app.routes';
import { CommonModule } from '@angular/common';
import { ImageModule } from 'primeng/image';
import { DataViewModule } from 'primeng/dataview';

@NgModule({
    declarations: [

    ],
    imports: [
        HttpClientModule,
        ReactiveFormsModule, CommonModule, DataViewModule,
        RouterModule.forRoot(routes),
        ImageModule
    ],
    providers: [],
})
export class AppModule { }
