import { DOCUMENT } from '@angular/common';
import { Component, Inject } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {

    constructor(
        @Inject(DOCUMENT) private readonly _document: Document,
    ) { }

    get angularVersion(): string {
        const appRootElement = this._document.body.querySelector('app-root');
        const version = appRootElement?.getAttribute('ng-version');

        return version || 'Unknown';
    }

}
