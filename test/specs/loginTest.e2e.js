import { expect } from '@wdio/globals'
import LoginPage from '../pageobjects/login.page.js'
import ProductsPage from '../pageobjects/products.page.js'

describe('Testes da página de Login', () => {
    it('T01 - deve logar com credenciais válidas', async () => {
        await LoginPage.open()
        await LoginPage.login('standard_user', 'secret_sauce')
        await expect(await ProductsPage.isPageTitleDisplayed()).toBe(true)
        await expect(await ProductsPage.getPageTitleText()).toBe('Products')
    })

    it('T02 - não deve logar com usuário inválido', async () => {
        await LoginPage.open()
        await LoginPage.login('standardUser', 'secret_sauce')
        await expect(await LoginPage.isErrorMessageDisplayed()).toBe(true)
        await expect(await LoginPage.getErrorMessageText()).toBe('Epic sadface: Username and password do not match any user in this service')
    })

    it('T03 - não deve logar com senha inválida', async () => {
        await LoginPage.open()
        await LoginPage.login('standard_user', 'secretSauce')
        await expect(await LoginPage.isErrorMessageDisplayed()).toBe(true)
        await expect(await LoginPage.getErrorMessageText()).toBe('Epic sadface: Username and password do not match any user in this service')
    })
})

