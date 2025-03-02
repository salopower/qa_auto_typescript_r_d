import { expect } from 'chai';
import { Button } from '../../../home_work_9/src/button';

describe('Button Class', () => {
    let button: Button;

    beforeEach(() => {
        button = new Button('Submit');
    });

    it('Must be created with the passed name', () => {
        expect(button.name).to.equal('Submit');
    });

    it('Should disable the button', () => {
        button.disable();
        expect(button.isDisabled).to.be.true;
    });

    it('Should enable the button', () => {
        button.disable();
        button.enable();
        expect(button.isDisabled).to.be.false;
    });

    it('Should trigger click event', () => {
        let clicked = false;
        button.click = () => {
            clicked = true;
        };
        button.click();
        expect(clicked).to.be.true;
    });

    it('Should not trigger click event when disabled', () => {
        let clicked = false;
        button.click = () => {
            clicked = true;
        };
        button.disable();
        button.click();
        expect(clicked).to.be.false;
    });
});
