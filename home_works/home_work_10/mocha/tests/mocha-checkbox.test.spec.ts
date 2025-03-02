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

    it('Should disable the checkbox', () => {
        checkbox.disable();
        expect(checkbox.isDisabled).to.be.true;
    });

    it('Should enable the checkbox', () => {
        checkbox.disable();
        checkbox.enable();
        expect(checkbox.isDisabled).to.be.false;
    });

    it('Should toggle the checkbox state when clicked', () => {
        checkbox.click();
        expect(checkbox.isChecked).to.be.true;
        checkbox.click();
        expect(checkbox.isChecked).to.be.false;
    });

    it('Should not toggle the checkbox state when disabled', () => {
        checkbox.disable();
        checkbox.click();
        expect(checkbox.isChecked).to.be.false;
    });

    it('Should trigger click event', () => {
        let clicked = false;
        checkbox.click = () => {
            clicked = true;
        };
        checkbox.click();
        expect(clicked).to.be.true;
    });

    it('Should not trigger click event when disabled', () => {
        let clicked = false;
        checkbox.click = () => {
            clicked = true;
        };
        checkbox.disable();
        checkbox.click();
        expect(clicked).to.be.false;
    });
});
