import { NetsaimadaPage } from './app.po';

describe('netsaimada App', () => {
  let page: NetsaimadaPage;

  beforeEach(() => {
    page = new NetsaimadaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
