import { APP_INITIALIZER, NgModule, Optional, SkipSelf } from '@angular/core';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';

function onAppInit(): Observable<boolean> {
    return of(true).pipe(
        tap(() => console.log('App initialized!')),
    );
}

function appInitializerFactory() {
    return () => onAppInit().toPromise();
}

@NgModule({
    providers: [
        {
            provide: APP_INITIALIZER,
            useFactory: appInitializerFactory,
            deps: [],
            multi: true,
        }
    ],
})
export class AppInitializationModule {
    constructor(
        @Optional() @SkipSelf() parentModule: AppInitializationModule,
    ) {
        if (parentModule) {
            throw new Error(`AppInitializationModule is already loaded. Import it in the main AppModule only.`);
        }
    }
}
