import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

const EXPORTED_DECLARATIONS: any[] = [];

@NgModule({
    declarations: [...EXPORTED_DECLARATIONS],
    imports: [CommonModule, RouterModule],
    exports: [...EXPORTED_DECLARATIONS],
})
export class SharedModule { }
