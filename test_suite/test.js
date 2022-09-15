import { Selector } from 'testcafe';

fixture`Getting Started`
    .page`https://devexpress.github.io/testcafe/example`;

test('My first test', async t => {
    await t
        .typeText('#developer-name', 'John Smith')
        .click('#submit-button')

        // Use the assertion to check if the actual header text is equal to the expected one
        .expect(Selector('#article-header').innerText).eql('Thank you, John Smith!');
});

test('Enable the support checkbox', async t => {
    await t
        .click('#remote-testing')
        // .expect(checkbox.checked).ok()
        // Enable Window radio button
        .click('#windows')

});

test('Select Testcafe Interface', async t => {
    await t
        .click('#preferred-interface')
        .click(Selector('#preferred-interface option:nth-child(1)'))
});

test('Enable the tried testcafe checkbox', async t => {
    await t
        .click('#tried-test-cafe')
});

test('Enter the comments', async t => {
    await t
            .expect(Selector('#main-form .form-bottom fieldset legend').nth(1).innerText).eql('Please let us know what you think:')
            .typeText('#main-form .form-bottom fieldset #comments', 'My rating is 5')
});

test('Click on submit button', async t => {
    await t
         .click('#submit-button')
});
