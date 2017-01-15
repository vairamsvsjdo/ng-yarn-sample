import { NgYarnSamplePage } from './app.po';

describe('ng-yarn-sample App', function() {
  let page: NgYarnSamplePage;

  beforeEach(() => {
    page = new NgYarnSamplePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
