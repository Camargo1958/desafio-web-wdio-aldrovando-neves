import { $ } from '@wdio/globals'
import Page from './page.js';

/**
 * Página de Login
 */
class ProductsPage extends Page {
    /**
     * define o mapeaento dos elementos da página
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
}

export default new ProductsPage();