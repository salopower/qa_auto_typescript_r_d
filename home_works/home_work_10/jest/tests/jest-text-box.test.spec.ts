import { TextBox } from '../../../home_work_9/src/text-box';
import { expect } from '@jest/globals';

describe('TextBox Class', () => {
    let textBox: TextBox;

    beforeEach(() => {
        textBox = new TextBox('Search');
    });

    test('Must be created with the passed name', () => {
        expect(textBox.name).toBe('Search');
    });

    test('Must set the value', () => {
        const value = 'Hello';
        const result = textBox.setValue(value);
        expect(textBox.getValue()).toBe(`The 'Search' text field currently contains: '${value}'.`);
        expect(result).toBe(`Entered '${value}' into the 'Search' text field.`);
    });

    test('Must get new value', () => {
        const value = 'World';
        textBox.setValue(value);
        const result = textBox.getValue();
        expect(result).toBe(`The 'Search' text field currently contains: '${value}'.`);
    });
});