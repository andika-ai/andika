import { AfterViewInit, Component, Inject, OnInit } from '@angular/core';
import { MAT_SNACK_BAR_DATA, MatSnackBarRef } from '@angular/material/snack-bar';

@Component({
  selector: 'andika-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnInit, AfterViewInit {
  constructor(public _snackBarRef: MatSnackBarRef<AlertComponent>,@Inject(MAT_SNACK_BAR_DATA) public data: any) { }

  ngOnInit() {

  }

  ngAfterViewInit(): void {

    
  }

}
