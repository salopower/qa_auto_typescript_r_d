import { UIElement } from './ui-element';
import { Disableable } from './disableable';

export class TextBox extends UIElement implements Disableable {
    private value = '';
    public isDisabled = false;

    public constructor(name: string) {
        super(name);
    }

    public click(): string {
        return `Activated the '${this.name}' text field.`;
    }

    public setValue(value: string): string {
        this.value = value;
        return `Entered '${value}' into the '${this.name}' text field.`;
    }

    public getValue(): string {
        return `The '${this.name}' text field currently contains: '${this.value}'.`;
    }

    public disable(): string {
        this.isDisabled = true;
        return `The '${this.name}' text field has been disabled.`;
    }

    public enable(): string {
        this.isDisabled = false;
        return `The '${this.name}' text field has been enabled.`;
    }
}