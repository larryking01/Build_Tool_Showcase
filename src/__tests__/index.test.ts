/**
 * @jest-environment jsdom
 */

import { displayBuildTools, toggleTheme } from '../index';
// import tools from '../../data/tools.json';   // caused a linting error

jest.mock('../../data/tools.json', () => [
  { name: 'Webpack', what: 'A module bundler' },
  { name: 'TypeScript', what: 'Typed superset of JavaScript' },
]);

describe('display build tools', () => {
  beforeEach(() => {
    document.body.innerHTML = `
      <div class="tool-display"></div>
    `;
  });

  test('renders tool items from tools.json', () => {
    displayBuildTools();
    const items = document.querySelectorAll('.tool-item');
    expect(items.length).toBe(2);
    expect(items[0].querySelector('.tool-name')?.textContent).toBe('Webpack');
    expect(items[1].querySelector('.tool-description')?.textContent).toBe(
      'Typed superset of JavaScript'
    );
  });

  test('does nothing if .tool-display is not present', () => {
    document.body.innerHTML = '';
    expect(() => displayBuildTools()).not.toThrow();
  });
});

describe('toggleTheme', () => {
  beforeEach(() => {
    document.body.innerHTML = '<button class="toggle-btn">Toggle</button>';
    document.body.classList.add('light');
  });

  test('switches from light to dark mode on click', () => {
    toggleTheme();
    const button = document.querySelector('.toggle-btn')!;
    button.dispatchEvent(new Event('click'));
    expect(document.body.classList.contains('dark')).toBe(true);
    expect(document.body.classList.contains('light')).toBe(false);
  });

  it('switches from dark to light mode on click', () => {
    document.body.classList.replace('light', 'dark');
    toggleTheme();
    const button = document.querySelector('.toggle-btn')!;
    button.dispatchEvent(new Event('click'));
    expect(document.body.classList.contains('light')).toBe(true);
    expect(document.body.classList.contains('dark')).toBe(false);
  });

  it('does nothing if toggle button is not found', () => {
    document.body.innerHTML = '';
    expect(() => toggleTheme()).not.toThrow();
  });
});
