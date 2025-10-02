import { expect } from '@wdio/globals'
import LoginPage from '../pageobjects/login.page.js'
import ProductsPage from '../pageobjects/products.page.js'

describe('Testes de Adição de item ao carrinho', () => {
    beforeEach(async () => {
        await LoginPage.open()
        await LoginPage.login('standard_user', 'secret_sauce')
    })

    afterEach(async () => {
        await ProductsPage.logOut()
    })

    it('T01 - valida nome do primeiro item da página de produtos', async () => {
        await expect(await ProductsPage.isInventoryItemDisplayed(1)).toBe(true)
        await expect(await ProductsPage.isInventoryItemNameDisplayed(1)).toBe(true)
        await expect(await ProductsPage.getInventoryItemNameText(1)).toBe('Sauce Labs Backpack')
    })

    it('T02 - valida preço do primeiro item da página de produtos', async () => {
        await expect(await ProductsPage.getInventoryItemPriceText(1)).toBe('$29.99')
    })

    it('T03 - adiciona o primeiro item da página de produtos ao carrinho', async () => {
        await expect(await ProductsPage.isClickableInventoryItemAddToCartButton(1)).toBe(true)
        await ProductsPage.clickInventoryItemAddToCartButton(1)
        await expect(await ProductsPage.getShoppingCartBadgeText()).toBe('1')
    })

    it('T04 - adiciona e remove o segundo item da página de produtos ao carrinho', async () => {
        await expect(await ProductsPage.isClickableInventoryItemAddToCartButton(1)).toBe(true)
        await ProductsPage.clickInventoryItemAddToCartButton(2)
        await expect(await ProductsPage.getShoppingCartBadgeText()).toBe('1')
        await expect(await ProductsPage.isClickableInventoryItemRemoveFromCartButton(2)).toBe(true)
        await ProductsPage.clickInventoryItemRemoveFromCartButton(2)
        await expect(await ProductsPage.isShoppingCartBadgeDisplayed()).toBe(false)
    })
})