import {expect, Locator, Page } from '@playwright/test'

export class HomePage{
    readonly page: Page;
    readonly dayTitle: Locator;
    readonly dishCard: Locator;
    readonly orderButton: Locator;
    readonly orderNotification: Locator;

    constructor(page: Page){
        this.page = page;
        this.dayTitle = page.locator('.v-list__tile__title > span');
        this.dishCard = page.locator('.dish-card');
        this.orderButton = page.locator('button.orders-list-button');
        this.orderNotification = page.locator('div.v-snack__content');
    }

    async clickRandomDay(){
        await this.page.waitForSelector('.v-list__tile__title > span', { timeout: 5000 });
        
        const weekdays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];     
        const filteredDays: Locator[] = [];
        const count = await this.dayTitle.count();

        for (let i = 0; i < count; i++) {
            const dayText = (await this.dayTitle.nth(i).innerText()).trim();

            if (weekdays.includes(dayText)) {
                filteredDays.push(this.dayTitle.nth(i));
            }
        }

        if (filteredDays.length === 0) throw new Error('No days found!');

        const randomIndex = Math.floor(Math.random() * filteredDays.length);
        const dayToClick = filteredDays[randomIndex];

        const dayClicked = await dayToClick.innerText();
        await dayToClick.click();
    }

    async clickRandomDish(){
        await this.page.waitForSelector('.dish-card', { timeout: 5000 });

        const count = await this.dishCard.count();
        if (count === 0) throw new Error('No dish cards found!');

        const randomIndex = Math.floor(Math.random() * count);
        const randomCard = this.dishCard.nth(randomIndex);

        await randomCard.click();

        const dishName = await randomCard.innerText();
    }

    async clickOrderButton(){
        await this.orderButton.click();
    }

}