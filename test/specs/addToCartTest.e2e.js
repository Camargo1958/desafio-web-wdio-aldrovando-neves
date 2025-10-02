import { expect } from '@wdio/globals'
import LoginPage from '../pageobjects/login.page.js'
import ProductsPage from '../pageobjects/products.page.js'
import { loginData } from '../../data/login.data.js'
import { productsData } from '../../data/products.data.js'

describe('Testes de Adição de item ao carrinho', () => {
    beforeEach(async () => {
        await LoginPage.open()
        await LoginPage.login(loginData.user, loginData.password)
    })

    afterEach(async () => {
        await ProductsPage.logOut()
    })

    it('T01 - valida nome do primeiro item da página de produtos', async () => {
        await expect(await ProductsPage.isInventoryItemDisplayed(1)).toBe(true)
        await expect(await ProductsPage.isInventoryItemNameDisplayed(1)).toBe(true)
        await expect(await ProductsPage.getInventoryItemNameText(1)).toBe(productsData.firstItem.name)
    })

    it('T02 - valida a descrição do primeiro item da página de produtos', async () => {
        await expect(await ProductsPage.isInventoryItemDescriptionDisplayed(1)).toBe(true)
        await expect(await ProductsPage.getInventoryItemDescriptionText(1)).toBe(productsData.firstItem.description)
    })

    it('T03 - valida preço do primeiro item da página de produtos', async () => {
        await expect(await ProductsPage.isInventoryItemPriceDisplayed(1)).toBe(true)
        await expect(await ProductsPage.getInventoryItemPriceText(1)).toBe(productsData.firstItem.price)
    })

    it('T04 - valida se a imagem do primeiro item da página de produtos é apresentada', async () => {
        await expect(await ProductsPage.isInventoryItemImageDisplayed(1)).toBe(true)
    })

    it('T05 - adiciona o primeiro item da página de produtos ao carrinho', async () => {
        await expect(await ProductsPage.isClickableInventoryItemAddToCartButton(1)).toBe(true)
        await ProductsPage.clickInventoryItemAddToCartButton(1)
        await expect(await ProductsPage.getShoppingCartBadgeText()).toBe('1')
    })

    // it('T06 - valida nome do segundo item da página de produtos', async () => {
    //     await expect(await ProductsPage.isInventoryItemDisplayed(2)).toBe(true)
    //     await expect(await ProductsPage.isInventoryItemNameDisplayed(2)).toBe(true)
    //     await expect(await ProductsPage.getInventoryItemNameText(2)).toBe(productsData.secondItem.name)
    // })

    // it('T07 - valida a descrição do segundo item da página de produtos', async () => {
    //     await expect(await ProductsPage.isInventoryItemDescriptionDisplayed(2)).toBe(true)
    //     await expect(await ProductsPage.getInventoryItemDescriptionText(2)).toBe(productsData.secondItem.description)
    // })

    // it('T08 - valida preço do segundo item da página de produtos', async () => {
    //     await expect(await ProductsPage.isInventoryItemPriceDisplayed(2)).toBe(true)
    //     await expect(await ProductsPage.getInventoryItemPriceText(2)).toBe(productsData.secondItem.price)
    // })

    it('T09 - valida se a imagem do segundo item da página de produtos é apresentada', async () => {
        await expect(await ProductsPage.isInventoryItemImageDisplayed(2)).toBe(true)
    })

    it('T10 - adiciona e remove o segundo item da página de produtos ao carrinho', async () => {
        await expect(await ProductsPage.isClickableInventoryItemAddToCartButton(2)).toBe(true)
        await ProductsPage.clickInventoryItemAddToCartButton(2)
        await expect(await ProductsPage.getShoppingCartBadgeText()).toBe('1')
        await expect(await ProductsPage.isClickableInventoryItemRemoveFromCartButton(2)).toBe(true)
        await ProductsPage.clickInventoryItemRemoveFromCartButton(2)
        await expect(await ProductsPage.isShoppingCartBadgeDisplayed()).toBe(false)
    })
})