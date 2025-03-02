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

    test('Should change the isDisabled', () => {
        expect(button.isDisabled).toBe(false);
        button.disable();
        expect(button.isDisabled).toBe(true);
        button.enable();
        expect(button.isDisabled).toBe(false);
    });

    test('Should trigger click event', () => {
        button.click();
        button.disable();
        button.click();
    });
});
