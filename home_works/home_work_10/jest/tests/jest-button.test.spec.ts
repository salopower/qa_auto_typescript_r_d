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
        button.disable();
        expect(button.isDisabled).toBe(true);
    });

    test('Should enable the button', () => {
        button.disable();
        button.enable();
        expect(button.isDisabled).toBe(false);
    });

    test('Should trigger click event', () => {
        let clicked = false;
        button.click = () => {
            clicked = true;
        };
        button.click();
        expect(clicked).toBe(true);
    });

    test('Should not trigger click event when disabled', () => {
        let clicked = false;
        button.click = () => {
            clicked = true;
        };
        button.disable();
        button.click();
        expect(clicked).toBe(false);
    });
});
