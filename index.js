import { JSDOM } from 'jsdom';

// If code is executed inside node environment, we get required properties from jsdom
if (!global.window || !global.document || !global.navigator || !global.Element) {
    const dom = new JSDOM('<!DOCTYPE html><p>Empty</p>');
    global.window = dom.window;
    global.document = global.window.document;
    global.navigator = global.window.navigator;
    global.Element = global.window.Element;
}

// eslint-disable-next-line @typescript-eslint/no-var-requires
const ExtendedCss = require('extended-css');

function validateCssSelector(selectorText) {
    // skip :before and :after selectors
    if (selectorText.match(/[^:\s]([:]{1,2}before(\s|$))|[^:\s]([:]{1,2}after(\s|$))/ig)) {
        return true;
    }

    // skip selectors with case-insensitive attribute, for example: div[class^="Abc_123" i]
    if (selectorText.match(/\[[a-z\d-_]+[\^$*]?=['"][^'"]+['"]\si]/g)) {
        return true;
    }

    ExtendedCss.query(selectorText, true);
    return true;
}

modules.exports = { validateCssSelector }
