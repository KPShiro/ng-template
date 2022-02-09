import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppInitializationModule } from './app-initialization.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { LayoutModule } from './layout/layout.module';
import { ViewsModule } from './views/views.module';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        //Angular modules
        BrowserModule,

        //App initialization
        AppInitializationModule,

        //Core "singleton" modules (not feature modules)
        CoreModule,
        LayoutModule,
        ViewsModule,

        //Feature modules

        //App routing (should be imported as the last one)
        AppRoutingModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
