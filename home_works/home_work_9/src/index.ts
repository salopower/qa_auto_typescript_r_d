abstract class UIElement {
    public constructor(public name: string) {}
    public abstract click(): void;
    public abstract getValue(): string;
}

class Button extends UIElement {
    public constructor(name: string) {
        super(name);
    }
    public click(): void {
        console.log(`Clicked the '${this.name}' button.`);
    }
    public getValue(): string {
        return `The '${this.name}' button does not store a value.`;
    }
}

class TextBox extends UIElement {
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

function testUIElement(element: UIElement): void {
    element.click();
    console.log(element.getValue());
}

const loginButton = new Button('Login');
const searchField = new TextBox('Search');

testUIElement(loginButton);
console.log('------------------');

testUIElement(searchField);
console.log('------------------');

searchField.setValue('QA Automation');
testUIElement(searchField);
console.log('------------------');
