import { Button } from './button';
import { TextBox } from './text-box';
import { Checkbox } from './checkbox';
import { UIElement } from './ui-element';
import { Disableable } from './disableable';

export function testUIElement(element: UIElement): void {
    return element.click();
}

export function disableElement(element: Disableable): string {
    const disableMessage = element.disable();
    const enableMessage = element.enable();
    return `The element was disabled and then enabled. Disable message: ${disableMessage}, Enable message: ${enableMessage}`;
}

const loginButton = new Button('Login');
const searchField = new TextBox('Search');
const termsCheckbox = new Checkbox('Accept Terms');

testUIElement(loginButton);
console.log('------------------');

testUIElement(searchField);
console.log('------------------');

testUIElement(termsCheckbox);
console.log('------------------');

disableElement(loginButton);
disableElement(termsCheckbox);
console.log('------------------');

testUIElement(loginButton);
testUIElement(termsCheckbox);
console.log('------------------');

termsCheckbox.enable();
testUIElement(termsCheckbox);
console.log('------------------');
