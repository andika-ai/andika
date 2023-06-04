/* eslint-disable @nrwl/nx/enforce-module-boundaries */
// import { EditorComponent } from '@andika/features';
import { NgModule } from '@angular/core';
import { PreloadAllModules, Route, RouterModule } from '@angular/router';

export const BASE_ROUTES: Route[] = [


    { path: '', redirectTo: '/landing', pathMatch: 'full' },

    {
        path: '', // Authentication routes
        loadChildren: () => import('libs/features/authentication/src/lib/features-authentication.module').then(m => m.FeaturesAuthenticationModule),

    },
    {
        path: '', // Home routes after login 
        loadChildren: () => import('libs/features/home/src/lib/home.module').then(m => m.FeaturesHomeModule),

    },
    {
        path: '', // Page routes
        loadChildren: () => import('libs/pages/src/lib/pages.module').then(m => m.PagesModule),

    },
    {
        path: 'admin', // Page routes
        loadChildren: () => import('libs/features/admin/src/lib/admin.module').then(m => m.AdminModule),

    },


];

const APP_ROUTES = BASE_ROUTES;
@NgModule({
    imports: [
        RouterModule.forRoot(
            APP_ROUTES,
            {
                enableTracing: true, // <-- debugging purposes only
                // useHash: true,
                preloadingStrategy: PreloadAllModules
            }
        )
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }