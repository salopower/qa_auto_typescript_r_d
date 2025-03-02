import { Checkbox } from '../../../home_work_9/src/checkbox';
import { expect } from '@jest/globals';

describe('Checkbox Class', () => {
    let checkbox: Checkbox;

    beforeEach(() => {
        checkbox = new Checkbox('Accept Terms');
    });

    test('Must be created with the passed name', () => {
        expect(checkbox.name).toBe('Accept Terms');
    });

    test('Should change the isDisabled', () => {
        expect(checkbox.isDisabled).toBe(false);
        checkbox.disable();
        expect(checkbox.isDisabled).toBe(true);
        checkbox.enable();
        expect(checkbox.isDisabled).toBe(false);
    });

    test('Should trigger click event', () => {
        checkbox.click();
        checkbox.disable();
        checkbox.click();
    });
});
