import { getCurrentYear, getFooterCopy, getLatestNotification } from './utils.js';

describe('utils.js functions', () => {
  it('getCurrentYear should return the current year', () => {
    expect(getCurrentYear()).toBe(new Date().getFullYear());
  });

  it('getFooterCopy should return correct text when isIndex is true', () => {
    expect(getFooterCopy(true)).toBe('Holberton School');
  });

  it('getFooterCopy should return correct text when isIndex is false', () => {
    expect(getFooterCopy(false)).toBe('Holberton School main dashboard');
  });

  it('getLatestNotification should return the correct HTML string', () => {
    expect(getLatestNotification()).toBe('<strong>Urgent requirement</strong> - complete by EOD');
  });
});
