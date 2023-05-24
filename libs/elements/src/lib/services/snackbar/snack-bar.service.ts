import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
import { AlertComponent } from '../../components/snackbar/alert/alert.component';

@Injectable({
    providedIn: 'root'
})
export class SnackBarService {

    constructor(private matSnackBar: MatSnackBar) { }

    openSnackBar(
        message: string,
        info: string,
        action: string,
        hPosition?: any,
        vPosition?: any,
        className?: string[]
      ) {
        const config = new MatSnackBarConfig();
        config.duration = 5000;
        config.horizontalPosition = hPosition || 'center';
        config.verticalPosition = vPosition || 'top';
        config.panelClass = className;
        config.data = { message, info, action};
        this.matSnackBar.openFromComponent(AlertComponent, config);
      }


    //   //Snackbar that opens with failure background
    // openFailureSnackBar(){
    //     this.matSnackBar.open("Invalid Login Credentials", "Try again!", {
    //     duration: 3000,
    //     panelClass: ['snackbar-error'],
    //     });
    //     }
    

}