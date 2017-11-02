import { ImmutableMinesweeperPage } from './app.po';

describe('immutable-minesweeper App', () => {
  let page: ImmutableMinesweeperPage;

  beforeEach(() => {
    page = new ImmutableMinesweeperPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
