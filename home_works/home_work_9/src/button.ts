import { UIElement } from './ui-element';
import { Disableable } from './disableable';

export class Button extends UIElement implements Disableable {
    public isDisabled = false;

    public constructor(name: string) {
        super(name);
    }

    public click(): string {
        if (this.isDisabled) {
            return `The '${this.name}' button is disabled and cannot be clicked.`;
        } else {
            return `The '${this.name}' button was clicked.`;
        }
    }

    public disable(): string {
        this.isDisabled = true;
        return `The '${this.name}' button has been disabled.`;
    }

    public enable(): string {
        this.isDisabled = false;
        return `The '${this.name}' button has been enabled.`;
    }

    public getValue(): string {
        return `The '${this.name}' button is currently ${this.isDisabled ? 'disabled' : 'enabled'}.`;
    }
}