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
    MatCardModule
} from '@angular/material';

import { LayoutComponent } from './layout/layout.component';
import { DobleplayModule } from './dobleplay/dobleplay.module';
import { ActivacionesModule } from './activaciones/activaciones.module';
import { FoliosDPComponent } from './dobleplay/components/folios-dp/folios-dp.component';
import { ActivacionesComponent } from './activaciones/components/activaciones/activaciones.component';

const appRoutes: Routes = [
    { path: 'DoblePlay', component: FoliosDPComponent },
    { path: 'Activaciones', component: ActivacionesComponent },
    {
        path: '',
        component: ActivacionesComponent,
        pathMatch: 'full'
    },
    { path: '**', component: FoliosDPComponent }
];

@NgModule({
    declarations: [
        AppComponent,
        LayoutComponent
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
        )
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
