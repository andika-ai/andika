import { Injectable } from '@angular/core';
import { BreakpointState, BreakpointObserver } from '@angular/cdk/layout';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ScreenService {

  constructor(private _breakingpointObserver: BreakpointObserver) { }


  /**
   *@description Breaking point width (320px—480px): Mobile devices
   */
  isBelowSm(): Observable<BreakpointState> {
    return this._breakingpointObserver.observe(['(max-width: 480px)']);
  }

  /**
   *@description Breaking point width (481px—768px): iPads, Tablets
   */
  isBelowMd(): Observable<BreakpointState> {
    return this._breakingpointObserver.observe(['(max-width: 768px)']);
  }


    /**
   *@description Breaking point min-width: 769px
   * 
   * - 769px—1024px: Small screens, laptops
   * - 1025px—1200px: Desktops, large screens
   * - 1201px and more—Extra large screens, TV
   */
  isOverMd(): Observable<BreakpointState> {
    return this._breakingpointObserver.observe(['(min-width: 769px)']);
  }

}
