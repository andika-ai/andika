import { CommonModule } from '@angular/common';
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import { NgModule } from '@angular/core';
import { SharedModule } from '@andika/libs/shared';

import { AuthService } from './firebase/services/auth.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
  ],
  exports:[
  ]

})
export class UtilitiesModule {}
