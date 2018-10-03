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
} from '@angular/material';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import { LayoutComponent } from './layout/layout.component';
import { DobleplayModule } from './dobleplay/dobleplay.module';
import { ActivacionesModule } from './activaciones/activaciones.module';
import { FoliosDPComponent } from './dobleplay/components/folios-dp/folios-dp.component';
import { ActivacionesComponent } from './activaciones/components/activaciones/activaciones.component';
import { MainComponent } from './main/main.component';

const appRoutes: Routes = [
    { path: 'DoblePlay', component: FoliosDPComponent },
    { path: 'Activaciones', component: ActivacionesComponent },
    {
        path: '',
        component: FoliosDPComponent,
        pathMatch: 'full'
    },
    { path: '**', component: FoliosDPComponent }
];

@NgModule({
    declarations: [
        AppComponent,
        LayoutComponent,
        MainComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        MatButtonModule,
        MatCheckboxModule,
        MatSidenavModule,
        MatRadioModule,
        MatToolbarModule,
        MatListModule,
        MatIconModule,
        DobleplayModule,
        MatCardModule,
        ActivacionesModule,
        RouterModule.forRoot(
            appRoutes,
            { enableTracing: false } // <-- debugging purposes only
        ),
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        HttpClientModule,
        MatNativeDateModule,
        ReactiveFormsModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
