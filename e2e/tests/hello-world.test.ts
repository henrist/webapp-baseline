import { Selector } from 'testcafe';

fixture`Example app`.page('http://localhost:3000');

class LandingPage {
  public headline: Selector;

  constructor() {
    this.headline = Selector('h1');
  }

  public getHeadlineText = () => this.headline.textContent;
}

const landingPage = new LandingPage();

test('Check welcome message', async t => {
  await t
    .expect(landingPage.getHeadlineText())
    .match(new RegExp('webapp-baseline-0.0.1'));
});
