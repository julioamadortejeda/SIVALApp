import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DobleplayModule } from '../dobleplay/dobleplay.module';
import { ActivacionesModule } from '../activaciones/activaciones.module';
import { DashboardRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import { MatIconModule, MatToolbarModule, MatSidenavModule, MatListModule, MatButtonModule, MatInputModule } from '@angular/material';
import { BuscarfolioComponent } from '../buscarfolio/buscarfolio.component';

@NgModule({
  imports: [
    CommonModule,
    DashboardRoutingModule,
    DobleplayModule,
    ActivacionesModule,
    MatIconModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatInputModule
  ],
  declarations: [ MainComponent, BuscarfolioComponent ]
})
export class MainModule { }
