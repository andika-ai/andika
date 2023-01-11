import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthenticationRouterModule } from './features-authentication.routing';

@NgModule({
  imports: [CommonModule, AuthenticationRouterModule],
})
export class FeaturesAuthenticationModule {}
