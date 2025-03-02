import { UIElement } from './ui-element';
import { Disableable } from './disableable';

export class TextBox extends UIElement implements Disableable {
    private value = '';
    public isDisabled = false;

    public constructor(name: string) {
        super(name);
    }

    public click(): void {
        console.log(`Activated the '${this.name}' text field.`);
    }

    public setValue(value: string): void {
        this.value = value;
        console.log(`Entered '${value}' into the '${this.name}' text field.`);
    }

    public getValue(): string {
        return `The '${this.name}' text field currently contains: '${this.value}'.`;
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
