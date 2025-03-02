import { UIElement } from './ui-element';
import { Disableable } from './disableable';

export class Checkbox extends UIElement implements Disableable{
    public isChecked = false;
    public isDisabled = false;

    public constructor(name: string) {
        super(name);
    }

    public click(): void {
        if (this.isDisabled) {
            console.log(`The '${this.name}' checkbox is disabled and cannot be toggled.`);
        } else {
            this.isChecked = !this.isChecked;
            console.log(`The '${this.name}' checkbox is now ${this.isChecked ? 'checked' : 'unchecked'}.`);
        }
    }

    public getValue(): string {
        return `The '${this.name}' checkbox is currently ${this.isChecked ? 'checked' : 'unchecked'}.`;
    }

    public disable(): void {
        this.isDisabled = true;
        console.log(`The '${this.name}' checkbox has been disabled.`);
    }

    public enable(): void {
        this.isDisabled = false;
        console.log(`The '${this.name}' checkbox has been enabled.`);
    }
}
