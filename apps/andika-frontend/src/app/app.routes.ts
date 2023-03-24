



/* eslint-disable @nrwl/nx/enforce-module-boundaries */
// import { EditorComponent } from '@andika/features';
import { NgModule } from '@angular/core';
import { PreloadAllModules, Route, RouterModule } from '@angular/router';

import { ForgotPasswordComponent, LoginComponent, RegisterComponent, VerifyEmailComponent} from '@andika/features/authentication';
import { EditorComponent } from '@andika/features/home';
import { AuthGuard } from '@andika/libs/shared';

//import { ADMIN_ROUTES }  from '@s4y/admin/home';

export const BASE_ROUTES: Route[] = [


    { path: '', redirectTo: '/landing', pathMatch: 'full' },
    { path: 'login', component: LoginComponent},
    { path: 'register', component: RegisterComponent },
    { path: 'editor', component: EditorComponent } ,// canActivate: [AuthGuard]
    { path: 'forgot-password', component: ForgotPasswordComponent },
    { path: 'verify-email-address', component: VerifyEmailComponent },
    {
        path: '', // Authentication routes
        loadChildren: () => import('libs/features/authentication/src/lib/features-authentication.module').then(m => m.FeaturesAuthenticationModule),

    },
    {
        path: '', // Home routes
        loadChildren: () => import('libs/features/home/src/lib/home.module').then(m => m.FeaturesHomeModule),

    },
    {
        path: '', // Page routes
        loadChildren: () => import('libs/pages/src/lib/pages.module').then(m => m.PagesModule),

    },
    {
        path: '', // Page routes
        loadChildren: () => import('libs/features/admin/src/lib/admin.module').then(m => m.AdminModule),

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