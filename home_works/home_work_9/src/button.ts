import { UIElement } from './ui-element';
import { Disableable } from './disableable';

export class Button extends UIElement implements Disableable {
    public isDisabled = false;

    public constructor(name: string) {
        super(name);
    }

    public click(): void {
        if (this.isDisabled) {
            console.log(`The '${this.name}' button is disabled and cannot be clicked.`);
        } else {
            console.log(`Clicked the '${this.name}' button.`);
        }
    }

    public getValue(): string {
        return `The '${this.name}' button does not store a value.`;
    }

    public disable(): void {
        this.isDisabled = true;
        console.log(`The '${this.name}' button has been disabled.`);
    }

    public enable(): void {
        this.isDisabled = false;
        console.log(`The '${this.name}' button has been enabled.`);
    }
}

