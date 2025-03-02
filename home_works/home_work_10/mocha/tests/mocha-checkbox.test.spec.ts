import { expect } from 'chai';
import { Checkbox } from '../../../home_work_9/src/checkbox';


describe('Checkbox Class', () => {
    let checkbox: Checkbox;

    beforeEach(() => {
        checkbox = new Checkbox('Accept Terms');
    });

    it('Must be created with the passed name', () => {
        expect(checkbox.name).to.equal('Accept Terms');
    });

    it('Should change the the isDisabled', () => {
        expect(checkbox.isDisabled).to.be.false;
        checkbox.disable();
        expect(checkbox.isDisabled).to.be.true;
        checkbox.enable();
        expect(checkbox.isDisabled).to.be.false;
    });

    it('Should trigger click event', () => {
        checkbox.click();
        checkbox.disable();
        checkbox.click();
    });
});

