import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AlertComponent } from '../../components/snackbar/alert/alert.component';

@Injectable({
    providedIn: 'root'
})
export class SnackBarService {

    constructor(private matSnackBar: MatSnackBar) { }

    openSnackBar( message: string, info: string, action: string,
        hPosition?: any, vPosition?: any,
        className?: any, ) {
        this.matSnackBar.openFromComponent(AlertComponent,{
            duration: 5000,
            horizontalPosition: hPosition ? hPosition : 'center',
            verticalPosition: vPosition ? vPosition : 'top',
            panelClass: className,
            data: {message: message,info: info,  action: action}
        });
    }
}