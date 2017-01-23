import { Week1d2Page } from './app.po';

describe('week1d2 App', function() {
  let page: Week1d2Page;

  beforeEach(() => {
    page = new Week1d2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
