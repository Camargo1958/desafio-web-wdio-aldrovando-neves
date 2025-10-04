import { $ } from '@wdio/globals'
import Page from './page.js';

/**
 * Página de Login
 */
class ProductsPage extends Page {
    /**
     * define o mapeaento e métodos de interação dos elementos da página
     */
    get burgerMenu () {
        return $('#react-burger-menu-btn');
    }

    async clickBurgerMenu() {
        await this.burgerMenu.click();
    }

    get resetAppStateLink () {
        return $('#reset_sidebar_link');
    }

    async clickResetAppStateLink() {
        await this.resetAppStateLink.click();
    }

    get logOutLink () {
        return $('#logout_sidebar_link');
    }

    async clickLogOutLink() {
        await this.logOutLink.click();
    }

    async logOut() {
        await this.clickBurgerMenu();
        await this.clickResetAppStateLink();
        await this.clickLogOutLink();
    }

    get pageTitle () {
        return $('span[data-test="title"]');
    }

    async isPageTitleDisplayed() {
        return await this.pageTitle.isDisplayed();
    }

    async getPageTitleText() {
        return await this.pageTitle.getText();
    }

    get inventoryItemList() {
        return $$('//div[@id="inventory_container"]/div/div/div[2]');
    }

    async getInventoryItemListCount() {
        return await this.inventoryItemList.length;
    }

    set inventoryItem(index) {
        this.inventoryItemSearch = $(`//div[@id="inventory_container"]/div/div[${index}]`);
    }

    get inventoryItem() {
        return this.inventoryItemSearch;
    }

    async isInventoryItemDisplayed(index) {
        this.inventoryItem = index;
        return await this.inventoryItem.isDisplayed();
    }

    set inventoryItemName(index) {
        this.inventoryItemNameSearch = $(`//div[@id="inventory_container"]/div/div[${index}]/div[2]/div/a/div`);
    }

    get inventoryItemName() {
        return this.inventoryItemNameSearch;
    }

    async isInventoryItemNameDisplayed(index) {
        this.inventoryItemName = index;
        return await this.inventoryItemName.isDisplayed();
    }

    async getInventoryItemNameText(index) {
        this.inventoryItemName = index;
        var name = await this.inventoryItemName.getText();
        return name
        //return await this.inventoryItemName.getText();
    }

    set inventoryItemDescription(index) {
        this.inventoryItemDescriptionSearch = $(`//div[@id="inventory_container"]/div/div[${index}]/div[2]/div/div`);
    }

    get inventoryItemDescription() {
        return this.inventoryItemDescriptionSearch;
    }

    async isInventoryItemDescriptionDisplayed(index) {
        this.inventoryItemDescription = index;
        return await this.inventoryItemDescription.isDisplayed();
    }

    async getInventoryItemDescriptionText(index) {
        this.inventoryItemDescription = index;
        return await this.inventoryItemDescription.getText();
    }

    set inventoryItemImage(index) {
        this.inventoryItemImageSearch = $(`//div[@id="inventory_container"]/div/div[${index}]/div[1]/a/img`);
    }

    get inventoryItemImage() {
        return this.inventoryItemImageSearch;
    }

    async isInventoryItemImageDisplayed(index) {
        this.inventoryItemImage = index;
        return await this.inventoryItemImage.isDisplayed();
    }

    set inventoryItemPrice(index) {
        this.inventoryItemPriceSearch = $(`//div[@id="inventory_container"]/div/div[${index}]/div[2]/div[2]/div`);
    }

    get inventoryItemPrice() {
        return this.inventoryItemPriceSearch;
    }

    async isInventoryItemPriceDisplayed(index) {
        this.inventoryItemPrice = index;
        return await this.inventoryItemPrice.isDisplayed();
    }

    async getInventoryItemPriceText(index) {
        this.inventoryItemPrice = index;
        return await this.inventoryItemPrice.getText();
    }

    set inventoryItemAddToCartButton(index) {
        this.inventoryAddItemButtonSearch = $(`//div[@id="inventory_container"]/div/div[${index}]/div[2]/div[2]/button[contains(text(), "Add to cart")]`);
    }

    get inventoryItemAddToCartButton() {
        return this.inventoryAddItemButtonSearch;
    }

    async clickInventoryItemAddToCartButton(index) {
        this.inventoryItemAddToCartButton = index;
        await this.inventoryItemAddToCartButton.click();
    }

    async isClickableInventoryItemAddToCartButton(index) {
        this.inventoryItemAddToCartButton = index;
        return await this.inventoryItemAddToCartButton.isClickable();
    }

    get shoppingCartBadge() {
        return $('span[class="shopping_cart_badge"]');
    }

    async isShoppingCartBadgeDisplayed() {
        return await this.shoppingCartBadge.isDisplayed();
    }

    async getShoppingCartBadgeText() {
        return await this.shoppingCartBadge.getText();
    }

    set inventoryItemRemoveFromCartButton(index) {
        this.inventoryItemRemoveButtonSearch = $(`//div[@id="inventory_container"]/div/div[${index}]/div[2]/div[2]/button[contains(text(), "Remove")]`);
    }

    get inventoryItemRemoveFromCartButton() {
        return this.inventoryItemRemoveButtonSearch;
    }

    async isClickableInventoryItemRemoveFromCartButton(index) {
        this.inventoryItemRemoveFromCartButton = index;
        return await this.inventoryItemRemoveFromCartButton.isClickable();
    }

    async clickInventoryItemRemoveFromCartButton(index) {
        this.inventoryItemRemoveFromCartButton = index;
        await this.inventoryItemRemoveFromCartButton.click();
    }

}

export default new ProductsPage();