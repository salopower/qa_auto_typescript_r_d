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

    test('Should disable the checkbox', () => {
        const result = checkbox.disable();
        expect(checkbox.isDisabled).toBe(true);
        expect(result).toBe('The \'Accept Terms\' checkbox has been disabled.');
    });

    test('Should enable the checkbox', () => {
        checkbox.disable();
        const result = checkbox.enable();
        expect(checkbox.isDisabled).toBe(false);
        expect(result).toBe('The \'Accept Terms\' checkbox has been enabled.');
    });

    test('Should toggle the checkbox state when clicked', () => {
        let result = checkbox.click();
        expect(checkbox.isChecked).toBe(true);
        expect(result).toBe('The \'Accept Terms\' checkbox is now checked.');

        result = checkbox.click();
        expect(checkbox.isChecked).toBe(false);
        expect(result).toBe('The \'Accept Terms\' checkbox is now unchecked.');
    });

    test('Should not toggle the checkbox state when disabled', () => {
        checkbox.disable();
        const result = checkbox.click();
        expect(checkbox.isChecked).toBe(false);
        expect(result).toBe('The \'Accept Terms\' checkbox is disabled and cannot be toggled.');
    });
});