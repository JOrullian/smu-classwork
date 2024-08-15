const Header = require('../lib/header');
const { formatDate } = require('../lib/date');

describe('Header', () => {
    it('should render header html with date.', () => {
        const html = `<header class="header"><h1>Todo Today</h1><p>${formatDate(
            new Date()
        )}</p></header>`
        const header = new Header();
        expect(header.render()).toEqual(html);
    });
})