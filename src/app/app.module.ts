import { AuthGuard } from './guards/auth-guard.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
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
} from '@angular/material';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

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

@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        LoginModule
    ],
    providers: [AuthGuard],
    bootstrap: [AppComponent]
})
export class AppModule { }
