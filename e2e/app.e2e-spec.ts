import { Temich.In.UaPage } from './app.po';

describe('temich.in.ua App', () => {
  let page: Temich.In.UaPage;

  beforeEach(() => {
    page = new Temich.In.UaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
