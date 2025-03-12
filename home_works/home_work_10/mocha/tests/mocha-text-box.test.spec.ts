import { expect } from 'chai';
import { TextBox } from '../../../home_work_9/src/text-box';

describe('TextBox Class', () => {
    let textBox: TextBox;

    beforeEach(() => {
        textBox = new TextBox('Search');
    });

    it('Must be created with the passed name', () => {
        expect(textBox.name).to.equal('Search');
    });

    it('Must set the value', () => {
        const value = 'Hello';
        textBox.setValue(value);
        expect(textBox.getValue()).to.equal(`The 'Search' text field currently contains: '${value}'.`);
    });

    it('Must get new value', () => {
        const value = 'World';
        textBox.setValue(value);
        expect(textBox.getValue()).to.equal(`The 'Search' text field currently contains: '${value}'.`);
    });
});
