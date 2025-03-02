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
        checkbox.disable();
        expect(checkbox.isDisabled).toBe(true);
    });

    test('Should enable the checkbox', () => {
        checkbox.disable();
        checkbox.enable();
        expect(checkbox.isDisabled).toBe(false);
    });

    test('Should toggle the checkbox state when clicked', () => {
        checkbox.click();
        expect(checkbox.isChecked).toBe(true);
        checkbox.click();
        expect(checkbox.isChecked).toBe(false);
    });

    test('Should not toggle the checkbox state when disabled', () => {
        checkbox.disable();
        checkbox.click();
        expect(checkbox.isChecked).toBe(false);
    });

    test('Should trigger click event', () => {
        let clicked = false;
        checkbox.click = () => {
            clicked = true;
        };
        checkbox.click();
        expect(clicked).toBe(true);
    });

    test('Should not trigger click event when disabled', () => {
        let clicked = false;
        checkbox.click = () => {
            clicked = true;
        };
        checkbox.disable();
        checkbox.click();
        expect(clicked).toBe(false);
    });
});
