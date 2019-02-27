import { AuthGuard } from './guards/auth-guard.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';

import {
    MatButtonModule,
    MatCheckboxModule,
    MatSidenavModule,
    MatRadioModule,
    MatToolbarModule,
    MatListModule,
    MatIconModule,
    MatCardModule,
    MatNativeDateModule,
    MatInputModule,
    MatDialogModule,
    MatSnackBarModule,
} from '@angular/material';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';

import { LayoutComponent } from './layout/layout.component';
import { DobleplayModule } from './dobleplay/dobleplay.module';
import { ActivacionesModule } from './activaciones/activaciones.module';
import { FoliosDPComponent } from './dobleplay/components/folios-dp/folios-dp.component';
import { ActivacionesComponent } from './activaciones/components/activaciones/activaciones.component';
import { MainComponent } from './main/main.component';
import { BuscarfolioComponent } from './buscarfolio/buscarfolio.component';
import { LoginComponent } from './login/login/login.component';
import { LoginModule } from './login/login.module';
import { MainModule } from './main/main.module';
import { AppRoutingModule } from './app-routing.module';
import { HttpConfigInterceptor } from './interceptor/httpconfig.interceptor';
import { ErrordialogComponent } from './errorDialog/errordialog/errordialog.component';
import { ErrorDialogService } from './errorDialog/errordialog.service';
import { MatProgressButtonsModule} from 'mat-progress-buttons';
import { ErrorSnackBarComponent } from './errorDialog/error-snack-bar/error-snack-bar.component';
import { registerLocaleData } from '@angular/common';
import localeMX from '@angular/common/locales/es-MX';

registerLocaleData(localeMX, 'es');

@NgModule({
    declarations: [
        AppComponent,
        ErrordialogComponent,
        ErrorSnackBarComponent,
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        LoginModule,
        HttpClientModule,
        MatDialogModule,
        MatSnackBarModule
    ],
    providers: [
        AuthGuard,
        ErrorDialogService,
        { provide: HTTP_INTERCEPTORS, useClass: HttpConfigInterceptor, multi: true },
        { provide: LOCALE_ID, useValue: 'es'}
    ],
    entryComponents: [ErrordialogComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }
