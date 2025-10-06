import { $ } from '@wdio/globals'
import Page from './page.js';

/**
 * Página do Carrinho
 */
class CartPage extends Page { 
    /**
     * define o mapeaento e métodos de interação dos elementos da página
     */
    get pageTitle () {
        return $('span[data-test="title"]');
    }

    async isPageTitleDisplayed() {
        return await this.pageTitle.isDisplayed();
    }

    async getPageTitleText() {
        return await this.pageTitle.getText();
    }

    get cartItemList() {
        return $$('//div[@class="cart_item"]');
    }

    async getCartItemListCount() {
        return await this.cartItemList.length;
    }

    set cartItemQty(index) {
        return this.cartItemQtySearch = $(`(//div[@class="cart_item"])[${index}]/div[1]`);
    }

    get cartItemQty() {
        return this.cartItemQtySearch;
    }

    async getCartItemQtyText(index) {
        this.cartItemQty = index;
        return await this.cartItemQty.getText();
    }

    set cartItemName(index) {
        return this.cartItemNameSearch = $(`(//div[@class="cart_item"])[${index}]/div[2]/a/div`);
    }

    get cartItemName() {
        return this.cartItemNameSearch;
    }

    async getCartItemNameText(index) {
        this.cartItemName = index;
        return await this.cartItemName.getText();
    }

    set cartItemDescription(index) {
        return this.cartItemDescriptionSearch = $(`(//div[@class="cart_item"])[${index}]/div[2]/div[1]`);
    }

    get cartItemDescription() {
        return this.cartItemDescriptionSearch;
    }

    async getCartItemDescriptionText(index) {
        this.cartItemDescription = index;
        return await this.cartItemDescription.getText();
    }

    set cartItemPrice(index) {
        return this.cartItemPriceSearch = $(`(//div[@class="cart_item"])[${index}]/div[2]/div[2]/div`);
    }

    get cartItemPrice() {
        return this.cartItemPriceSearch;
    }

    async getCartItemPriceText(index) {
        this.cartItemPrice = index;
        return await this.cartItemPrice.getText();
    }
}

export default new CartPage();