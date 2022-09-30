import { APP_INITIALIZER, Provider } from "@angular/core";

function appInitializerFactory() {
    return () => {
        // Put here anything that should be done on app initialization
    };
}

export const AppInitializerProvider: Provider = {
    provide: APP_INITIALIZER,
    useFactory: appInitializerFactory,
    multi: true,
};
