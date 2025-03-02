import { describe, it, expect, vi } from 'vitest';
import { TextBox } from '../../../home_work_9/src/text-box';

describe('TextBox', () => {
    it('should activate the text field on click', () => {
        const textBox = new TextBox('Search');
        const consoleSpy = vi.spyOn(console, 'log');

        textBox.click();

        expect(consoleSpy).toHaveBeenCalledWith('Activated the \'Search\' text field.');
    });

    it('should set and get the value of the text field', () => {
        const textBox = new TextBox('Search');
        const consoleSpy = vi.spyOn(console, 'log');

        textBox.setValue('test value');

        expect(consoleSpy).toHaveBeenCalledWith('Entered \'test value\' into the \'Search\' text field.');
        expect(textBox.getValue()).toBe('The \'Search\' text field currently contains: \'test value\'.');
    });
});
