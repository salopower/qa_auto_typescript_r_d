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

    it('Should change the the isDisabled', () => {
        expect(button.isDisabled).to.be.false;
        button.disable();
        expect(button.isDisabled).to.be.true;
        button.enable();
        expect(button.isDisabled).to.be.false;
    });

    it('Should trigger click event', () => {
        button.click();
        button.disable();
        button.click();
    });
});

