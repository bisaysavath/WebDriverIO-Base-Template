export default class Page {

    get Title() { return browser.getTitle() }

    open(path) {
        browser.url(path)
    }
}