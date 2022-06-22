import { APP_INITIALIZER, Provider } from "@angular/core";

function appInitializerFactory() {
    return () => {
        console.log('Initializing app...');
    };
}

export const AppInitializerProvider: Provider = {
    provide: APP_INITIALIZER,
    useFactory: appInitializerFactory,
    multi: true,
};
