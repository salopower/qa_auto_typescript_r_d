import { UIElement } from './ui-element';
import { Disableable } from './disableable';

export class Checkbox extends UIElement implements Disableable {
    public isChecked = false;
    public isDisabled = false;

    public constructor(name: string) {
        super(name);
    }

    public click(): string {
        if (this.isDisabled) {
            return `The '${this.name}' checkbox is disabled and cannot be toggled.`;
        } else {
            this.isChecked = !this.isChecked;
            return `The '${this.name}' checkbox is now ${this.isChecked ? 'checked' : 'unchecked'}.`;
        }
    }

    public disable(): string {
        this.isDisabled = true;
        return `The '${this.name}' checkbox has been disabled.`;
    }

    public enable(): string {
        this.isDisabled = false;
        return `The '${this.name}' checkbox has been enabled.`;
    }

    public getValue(): string {
        return `The '${this.name}' checkbox is currently ${this.isChecked ? 'checked' : 'unchecked'}.`;
    }
}