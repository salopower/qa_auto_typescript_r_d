import { Button } from './button';
import { TextBox } from './text-box';
import { Checkbox } from './checkbox';
import { UIElement } from './ui-element';
import { Disableable } from './disableable';

export function testUIElement(element: UIElement): void {
    element.click();
    console.log(element.getValue());
}

export function disableElement(element: Disableable): void {
    element.disable();
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
