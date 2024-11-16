import { CommonModule } from "@angular/common";

import { NgModule } from "@angular/core";
import { KeybordManagerDirective } from "./keyboard-manager.directives";
import { KeyboardManagedItemDirective } from "./keyboard-managed-item.directive";

@NgModule({
    declarations: [
        KeybordManagerDirective,
        KeyboardManagedItemDirective],
    imports: [CommonModule],
    exports: [
        KeybordManagerDirective,
        KeyboardManagedItemDirective]
})
export class KeyboardManagerModule {}
