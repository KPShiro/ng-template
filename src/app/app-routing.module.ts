import { NgModule, Optional, SkipSelf } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './views/page-not-found/page-not-found.component';
import { WelcomePageComponent } from './views/welcome-page/welcome-page.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'welcome',
        pathMatch: 'full',
    },
    { path: 'welcome', component: WelcomePageComponent },
    { path: '**', component: PageNotFoundComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
    constructor(
        @Optional() @SkipSelf() parentModule: AppRoutingModule,
    ) {
        if (parentModule) {
            throw new Error(`AppRoutingModule is already loaded. Import it in the main AppModule only.`);
        }
    }
}
