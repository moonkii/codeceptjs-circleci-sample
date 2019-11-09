
Feature('Dallab');

Scenario('test something', (I) => {
    I.amOnPage('https://www.google.com/');
    I.fillField('q','달랩');
    I.see('달랩');

});
