import { NgModule, Optional, SkipSelf } from "@angular/core";
import { RouterModule } from "@angular/router";

@NgModule({
    declarations: [],
    exports: [],
    imports: [RouterModule],
    providers: [],
})
export class LayoutModule {
    constructor(
        @Optional() @SkipSelf() parentModule: LayoutModule,
    ) {
        if (parentModule) {
            throw new Error('LayoutModule is already loaded. Import it in the main AppModule only.');
        }
    }
}
