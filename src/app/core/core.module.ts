import { NgModule, Optional, SkipSelf } from '@angular/core';
import { SharedModule } from '@app/shared/shared.module';

@NgModule({
    imports: [
        SharedModule,
    ],
})
export class CoreModule {
    constructor(
        @Optional() @SkipSelf() parentModule: CoreModule,
    ) {
        if (parentModule) {
            throw new Error(`${CoreModule.name} is already loaded. Import it in the main AppModule only.`);
        }
    }
}
