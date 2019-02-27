import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-error-snack-bar',
  templateUrl: './error-snack-bar.component.html',
  styleUrls: ['./error-snack-bar.component.scss']
})
export class ErrorSnackBarComponent implements OnInit {

  constructor(private snack: MatSnackBar) { }

  ngOnInit() {
  }

  openSnackBar(error: string, code: string) {
    this.snack.open(error, code, {
      duration: 3000,
    });
  }

}
