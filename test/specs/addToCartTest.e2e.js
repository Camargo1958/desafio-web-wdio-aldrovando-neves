import { expect } from '@wdio/globals'
import LoginPage from '../pageobjects/login.page.js'
import ProductsPage from '../pageobjects/products.page.js'
import { loginData } from '../../data/login.data.js'
import { productsData } from '../../data/products.data.js'
import CartPage from '../pageobjects/cart.page.js'

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
        await expect(await ProductsPage.getInventoryItemNameText(1)).toBe(productsData[0].name)
    })

    it('T02 - valida a descrição do primeiro item da página de produtos', async () => {
        await expect(await ProductsPage.isInventoryItemDescriptionDisplayed(1)).toBe(true)
        await expect(await ProductsPage.getInventoryItemDescriptionText(1)).toBe(productsData[0].description)
    })

    it('T03 - valida preço do primeiro item da página de produtos', async () => {
        await expect(await ProductsPage.isInventoryItemPriceDisplayed(1)).toBe(true)
        await expect(await ProductsPage.getInventoryItemPriceText(1)).toBe(productsData[0].price)
    })

    it('T04 - valida se a imagem do primeiro item da página de produtos é apresentada', async () => {
        await expect(await ProductsPage.isInventoryItemImageDisplayed(1)).toBe(true)
    })

    it('T05 - adiciona o primeiro item da página de produtos ao carrinho', async () => {
        await expect(await ProductsPage.isClickableInventoryItemAddToCartButton(1)).toBe(true)
        await ProductsPage.clickInventoryItemAddToCartButton(1)
        await expect(await ProductsPage.getShoppingCartBadgeText()).toBe('1')
    })

    it('T06 - valida nome do segundo item da página de produtos', async () => {
        await expect(await ProductsPage.isInventoryItemDisplayed(2)).toBe(true)
        await expect(await ProductsPage.isInventoryItemNameDisplayed(2)).toBe(true)
        await expect(await ProductsPage.getInventoryItemNameText(2)).toBe(productsData[1].name)
    })

    it('T07 - valida a descrição do segundo item da página de produtos', async () => {
        await expect(await ProductsPage.isInventoryItemDescriptionDisplayed(2)).toBe(true)
        await expect(await ProductsPage.getInventoryItemDescriptionText(2)).toBe(productsData[1].description)
    })

    it('T08 - valida preço do segundo item da página de produtos', async () => {
        await expect(await ProductsPage.isInventoryItemPriceDisplayed(2)).toBe(true)
        await expect(await ProductsPage.getInventoryItemPriceText(2)).toBe(productsData[1].price)
    })

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

    it('T11 - valida a quantidade de itens na página de produtos', async () => {
        await expect(await ProductsPage.getInventoryItemListCount()).toBe(6)
    })

    it('T12 - adiciona dois itens da página de produtos ao carrinho e valida itens na página de carrinho', async () => {
        await expect(await ProductsPage.isClickableInventoryItemAddToCartButton(3)).toBe(true)
        await ProductsPage.clickInventoryItemAddToCartButton(3)
        await expect(await ProductsPage.getShoppingCartBadgeText()).toBe('1')
        await expect(await ProductsPage.isClickableInventoryItemAddToCartButton(4)).toBe(true)
        await ProductsPage.clickInventoryItemAddToCartButton(4)
        await expect(await ProductsPage.getShoppingCartBadgeText()).toBe('2')
        await ProductsPage.clickShoppingCartLink()
        await expect(await CartPage.isPageTitleDisplayed()).toBe(true)
        await expect(await CartPage.getPageTitleText()).toBe('Your Cart')
        await expect(await CartPage.getCartItemListCount()).toBe(2)
        
        await expect(await CartPage.getCartItemNameText(1)).toBe(productsData[2].name)
        await expect(await CartPage.getCartItemDescriptionText(1)).toBe(productsData[2].description)
        await expect(await CartPage.getCartItemPriceText(1)).toBe(productsData[2].price)
        await expect(await CartPage.getCartItemQtyText(1)).toBe('1')

        await expect(await CartPage.getCartItemNameText(2)).toBe(productsData[3].name)
        await expect(await CartPage.getCartItemDescriptionText(2)).toBe(productsData[3].description)
        await expect(await CartPage.getCartItemPriceText(2)).toBe(productsData[3].price)
        await expect(await CartPage.getCartItemQtyText(2)).toBe('1')
    })
})