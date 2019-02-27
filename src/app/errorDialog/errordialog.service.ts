import { Injectable } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatSnackBar } from '@angular/material';
import { ErrordialogComponent } from './errordialog/errordialog.component';

@Injectable()
export class ErrorDialogService {

  // constructor(public dialog: MatDialog) { }
  // openDialog(data): void {
  //   const dialogRef = this.dialog.open(ErrordialogComponent, {
  //     width: '300px',
  //     data: data
  //   });

  //   dialogRef.afterClosed().subscribe(result => {
  //     console.log('The dialog was closed');
  //     let animal;
  //     animal = result;
  //   });
  // }

  constructor(public snack: MatSnackBar) {}

  openSnackBar(message: string, action?: string) {
    this.snack.open(message, action, {
      duration: 3000,
    });
  }
}
