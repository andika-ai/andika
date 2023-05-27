import { Injectable } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { filter } from 'rxjs/operators';

@Injectable()
export class BreadcrumbService {
  private breadcrumbSubject = new BehaviorSubject<string[]>([]);
  breadcrumb$ = this.breadcrumbSubject.asObservable();

  constructor(private router: Router, private route: ActivatedRoute) {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        const breadcrumbs = this.buildBreadcrumbs(this.route.root);
        this.breadcrumbSubject.next(breadcrumbs);
      });
  }

  private buildBreadcrumbs(route: ActivatedRoute, url = '', breadcrumbs: string[] = []): string[] {
    const label = route.routeConfig && route.routeConfig.data ? route.routeConfig.data['breadcrumb'] : '';
    const path = route.routeConfig ? route.routeConfig.path : '';
  
    const nextUrl = `${url}${path}/`;
    const breadcrumb = label ? label : nextUrl;
  
    if (breadcrumb) {
      breadcrumbs.push(breadcrumb);
    }
  
    if (route.firstChild) {
      return this.buildBreadcrumbs(route.firstChild, nextUrl, breadcrumbs);
    }
  
    return breadcrumbs;
  }
}
