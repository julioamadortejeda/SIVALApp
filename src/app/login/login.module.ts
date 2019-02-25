import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { LoginRoutingModule } from './login/login-routing.module';
import {
  MatCardModule,
  MatFormFieldModule,
  MatProgressSpinnerModule,
  MatGridListModule,
  MatInputModule,
  MatToolbarModule,
  MatDividerModule,
  MatOptionModule,
  MatSelectModule,
  MatButtonModule,
  MatIconModule
} from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatProgressButtonsModule } from 'mat-progress-buttons';

@NgModule({
  imports: [
    CommonModule,
    LoginRoutingModule,
    MatCardModule,
    MatFormFieldModule,
    MatProgressSpinnerModule,
    MatGridListModule,
    MatCardModule,
    MatInputModule,
    MatToolbarModule,
    MatDividerModule,
    MatOptionModule,
    MatSelectModule,
    MatButtonModule,
    MatIconModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatProgressButtonsModule
  ],
  exports: [LoginComponent],
  declarations: [LoginComponent]
})
export class LoginModule { }
