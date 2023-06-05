// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import { environment as devEnvironment } from '../../../../../apps/andika-frontend/src/environments/environment';

// Dont import this in any module its for config purposes 
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EnvironmentProvider {
  get environment() {
    return devEnvironment;
  }
}
