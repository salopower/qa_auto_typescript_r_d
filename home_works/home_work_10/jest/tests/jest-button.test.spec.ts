import { Button } from '../../../home_work_9/src/button';
import { expect } from '@jest/globals';

describe('Button Class', () => {
    let button: Button;

    beforeEach(() => {
        button = new Button('Submit');
    });

    test('Must be created with the passed name', () => {
        expect(button.name).toBe('Submit');
    });

    test('Should disable the button', () => {
        const result = button.disable();
        expect(button.isDisabled).toBe(true);
        expect(result).toBe('The \'Submit\' button has been disabled.');
    });

    test('Should enable the button', () => {
        button.disable();
        const result = button.enable();
        expect(button.isDisabled).toBe(false);
        expect(result).toBe('The \'Submit\' button has been enabled.');
    });

    test('Should trigger click event', () => {
        const result = button.click();
        expect(result).toBe('The \'Submit\' button was clicked.');
    });

    test('Should not trigger click event when disabled', () => {
        button.disable();
        const result = button.click();
        expect(result).toBe('The \'Submit\' button is disabled and cannot be clicked.');
    });
});