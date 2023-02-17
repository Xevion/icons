const valid = ['system', 'dark', 'light'];

// Set the default to system, ignore & delete invalid values
if (!('theme' in localStorage) || valid.indexOf(localStorage.theme) === -1)
    localStorage.theme = 'system';

// Process the theme extracted
const currentTheme = localStorage.theme;
if (currentTheme === 'system') {
    const preferDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    document.documentElement.classList.add(preferDark ? 'dark' : 'light');
} else if (currentTheme === 'dark') {
    document.documentElement.classList.add('dark')
} else if (currentTheme === 'light') {
    document.documentElement.classList.remove('dark')
}