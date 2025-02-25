import { UIElement } from './ui-element';

export class TextBox extends UIElement {
    private value = '';

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
}
