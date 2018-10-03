import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FoliosDPComponent } from './components/folios-dp/folios-dp.component';
import { MatCardModule,
         MatTableModule,
         MatFormFieldModule,
         MatInputModule,
         MatPaginatorModule  } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatPaginatorModule
  ],
  exports: [FoliosDPComponent],
  declarations: [FoliosDPComponent]
})
export class DobleplayModule { }
