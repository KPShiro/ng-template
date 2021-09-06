import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppInitializer, AppInitializerProvider } from './domain/app-initializer/app-initializer';

@NgModule({
    declarations: [],
    imports: [CommonModule],
    exports: [],
    providers: [],
})
export class CoreModule {
    public static forRoot(): ModuleWithProviders<CoreModule> {
        return {
            ngModule: CoreModule,
            providers: [
                AppInitializer,
                AppInitializerProvider,
            ],
        };
    }
}
