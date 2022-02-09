import { NgModule, Optional, SkipSelf } from "@angular/core";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { WelcomePageComponent } from "./welcome-page/welcome-page.component";

@NgModule({
    declarations: [
        PageNotFoundComponent,
        WelcomePageComponent,
    ],
})
export class ViewsModule {
    constructor(
        @Optional() @SkipSelf() parentModule: ViewsModule,
    ) {
        if (parentModule) {
            throw new Error('ViewsModule is already loaded. Import it in the AppModule only.');
        }
    }
}
