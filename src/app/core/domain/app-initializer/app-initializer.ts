import { APP_INITIALIZER, Injectable, Provider } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable()
export class AppInitializer {

    public init(): Observable<boolean> {
        // Initialize anything here
        return of(true);
    }

}

export function appInitializerFactory(initializer: AppInitializer): () => Promise<boolean> {
    return () => initializer.init().toPromise();
}

export const AppInitializerProvider: Provider = {
    provide: APP_INITIALIZER,
    useFactory: appInitializerFactory,
    deps: [AppInitializer],
    multi: true,
};
