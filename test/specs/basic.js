import assert from 'assert'
import Page from '../../pages/page'

describe('webdriver.io page', () => {
    it('should have the right title', () => {
        var page = new Page()
        page.open('https://webdriver.io')
        const title = page.Title
        assert.strictEqual(title, 'WebdriverIO · Next-gen WebDriver test framework for Node.js')
    })

    it('should show a logo', () => {
        var page = new Page()
        page.open('https://webdriver.io')
        var img = $('.projectLogo img')
        assert.equal(img.isDisplayed(), true)
    })
})

describe('search "pizza" on www.google.com page', () => {
    it('should show result about pizza', () => {
        var page = new Page()
        page.open('https://www.google.com')
        var textBox = $('[name=q]')
        textBox.setValue('pizza')
        browser.keys(['Enter'])
        const title = browser.getTitle()
        assert.strictEqual(title, 'pizza - Google Search')
    })
})