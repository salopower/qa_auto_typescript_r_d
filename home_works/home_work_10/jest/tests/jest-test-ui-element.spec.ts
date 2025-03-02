import { expect } from 'chai';
import { Button } from '../../../home_work_9/src/button';
import { Checkbox } from '../../../home_work_9/src/checkbox';
import { TextBox } from '../../../home_work_9/src/text-box';
import { testUIElement, disableElement } from '../../../home_work_9/src';

describe('testUIElement Function', () => {
    it('Should test a Button element', () => {
        const button = new Button('Submit');
        const result = testUIElement(button);
        expect(result).to.equal('The \'Submit\' element was clicked.');
    });

    it('Should test a Checkbox element', () => {
        const checkbox = new Checkbox('Accept Terms');
        const result = testUIElement(checkbox);
        expect(result).to.equal('The \'Accept Terms\' element was clicked.');
    });

    it('Should test a TextBox element', () => {
        const textBox = new TextBox('Search');
        const result = testUIElement(textBox);
        expect(result).to.equal('The \'Search\' element was clicked.');
    });
});

describe('disableElement Function', () => {
    it('Should disable and enable a Button element', () => {
        const button = new Button('Submit');
        const result = disableElement(button);
        expect(result).to.equal('The element was disabled and then enabled.');
    });

    it('Should disable and enable a Checkbox element', () => {
        const checkbox = new Checkbox('Accept Terms');
        const result = disableElement(checkbox);
        expect(result).to.equal('The element was disabled and then enabled.');
    });

    it('Should disable and enable a TextBox element', () => {
        const textBox = new TextBox('Search');
        const result = disableElement(textBox);
        expect(result).to.equal('The element was disabled and then enabled.');
    });
});
