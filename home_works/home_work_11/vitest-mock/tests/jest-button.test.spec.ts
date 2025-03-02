import { describe, it, expect, vi } from 'vitest';
import { Button } from '../../../home_work_9/src/button';

describe('Button', () => {
    it('should click the button when not disabled', () => {
        const button = new Button('Login');
        const consoleSpy = vi.spyOn(console, 'log');

        button.click();

        expect(consoleSpy).toHaveBeenCalledWith('Clicked the \'Login\' button.');
    });

    it('should not click the button when disabled', () => {
        const button = new Button('Login');
        button.disable();
        const consoleSpy = vi.spyOn(console, 'log');

        button.click();

        expect(consoleSpy).toHaveBeenCalledWith('The \'Login\' button is disabled and cannot be clicked.');
    });

    it('should enable the button', () => {
        const button = new Button('Login');
        button.disable();
        const consoleSpy = vi.spyOn(console, 'log');

        button.enable();

        expect(consoleSpy).toHaveBeenCalledWith('The \'Login\' button has been enabled.');
        expect(button.isDisabled).toBe(false);
    });
});
