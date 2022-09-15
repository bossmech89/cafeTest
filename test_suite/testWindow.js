import { Selector } from 'testcafe';

fixture`Getting Started`
    .page`https://testcafe.io/documentation/402635/getting-started`;

test('My first test', async t => {
    await t
        .click('.middle .content div p a .svg-no-wrap');

        // Use the assertion to check if the actual header text is equal to the expected one
});
