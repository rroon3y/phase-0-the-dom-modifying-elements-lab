const { expect } = require('chai');

// index.test.js


// Clear require cache and DOM before each test
beforeEach(() => {
    // Remove all children from body
    document.body.innerHTML = `
        <main id="main"></main>
    `;
    // Remove index.js from require cache to re-run its code
    delete require.cache[require.resolve('./index.js')];
    // Run the script to set up DOM
    require('./index.js');
});

describe('newHeader', () => {
    it('should be defined as a global variable', () => {
        expect(global.newHeader).to.exist;
    });

    it('should be an <h1> element', () => {
        expect(global.newHeader).to.be.an.instanceof(HTMLElement);
        expect(global.newHeader.tagName).to.equal('H1');
    });

    it('should have id "victory"', () => {
        expect(global.newHeader.id).to.equal('victory');
    });

    it('should have text "Rooney is the champion"', () => {
        expect(global.newHeader.textContent).to.equal('Rooney is the champion');
    });
});