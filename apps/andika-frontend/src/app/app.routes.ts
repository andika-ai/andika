/* eslint-disable @nrwl/nx/enforce-module-boundaries */
// import { EditorComponent } from '@andika/features';
import { NgModule } from '@angular/core';
import { PreloadAllModules, Route, RouterModule } from '@angular/router';

//import { ADMIN_ROUTES }  from '@s4y/admin/home';

export const BASE_ROUTES: Route[] = [
    {
        path: 'login',
        loadChildren: () => import('libs/features/authentication/src/lib/features-authentication.module').then(m => m.FeaturesAuthenticationModule),

    },
    {
        path: '', // home
        loadChildren: () => import('libs/features/home/src/lib/home.module').then(m => m.HomeModule),

    },

];
// Add features/domain/module(library)

// Add sub modules
// const APP_ROUTES = BASE_ROUTES.concat(ADMIN_ROUTES);
const APP_ROUTES = BASE_ROUTES; // //  APP_ROUTES use instead of BASE_ROUTES in the future
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