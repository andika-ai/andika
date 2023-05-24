import { Component, Inject, OnInit, ViewEncapsulation } from '@angular/core';
import { MAT_SNACK_BAR_DATA, MatSnackBarRef } from '@angular/material/snack-bar';

@Component({
  selector: 'andika-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AlertComponent implements OnInit {
  constructor(public _snackBarRef: MatSnackBarRef<AlertComponent>,@Inject(MAT_SNACK_BAR_DATA) public data: any) { }

  ngOnInit() {

  }



}
