var puppeteer = require('puppeteer');
var {
	driverByNickname,
	waitForTestablePage,
} = require('@wix/corvid-test-utils');

describe('Corvid Test Utils', () => {
	let browser = null;
	let page = null;

	beforeAll(async () => {
		browser = await puppeteer.launch({
			// headless: false
			// slowMo: 50
		});
	});

	afterAll(async () => {
		await browser.close();
	});

	beforeEach(async () => {
		page = await browser.newPage();
	});

	afterEach(async () => {
		await page.close();
	});

	describe('Test heading', () => {
		const HOME_URL = 'https://viktoriian0.wixsite.com/corvid-puppeteer';

		test('my text component has the right value', async () => {
			await waitForTestablePage({ page, url: HOME_URL });

			const textDriver = await driverByNickname(page, 'myHeading');

			expect(await textDriver.getText()).toBe('This is a title');
		});
	});
});
