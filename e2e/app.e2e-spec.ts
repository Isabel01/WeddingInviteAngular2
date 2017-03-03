import { WeddingInvitePage } from './app.po';

describe('wedding-invite App', () => {
  let page: WeddingInvitePage;

  beforeEach(() => {
    page = new WeddingInvitePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
