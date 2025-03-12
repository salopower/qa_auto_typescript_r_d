import { describe, it, expect, vi } from 'vitest';
import { Checkbox } from '../../../home_work_9/src/checkbox';

describe('Checkbox', () => {
    it('should toggle the checkbox when not disabled', () => {
        const checkbox = new Checkbox('Accept Terms');
        const consoleSpy = vi.spyOn(console, 'log');

        checkbox.click();

        expect(consoleSpy).toHaveBeenCalledWith('The \'Accept Terms\' checkbox is now checked.');
        expect(checkbox.isChecked).toBe(true);
    });

    it('should not toggle the checkbox when disabled', () => {
        const checkbox = new Checkbox('Accept Terms');
        checkbox.disable();
        const consoleSpy = vi.spyOn(console, 'log');

        checkbox.click();

        expect(consoleSpy).toHaveBeenCalledWith('The \'Accept Terms\' checkbox is disabled and cannot be toggled.');
        expect(checkbox.isChecked).toBe(false);
    });

    it('should enable the checkbox', () => {
        const checkbox = new Checkbox('Accept Terms');
        checkbox.disable();
        const consoleSpy = vi.spyOn(console, 'log');

        checkbox.enable();

        expect(consoleSpy).toHaveBeenCalledWith('The \'Accept Terms\' checkbox has been enabled.');
        expect(checkbox.isDisabled).toBe(false);
    });
});
