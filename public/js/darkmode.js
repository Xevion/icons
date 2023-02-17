const valid = ['system', 'dark', 'light'];

console.log(localStorage.theme);
// Set the default to system, ignore & delete invalid values
if (!('theme' in localStorage) || valid.indexOf(localStorage.theme) === -1)
    localStorage.theme = 'system';

if (localStorage.theme === 'system') {
    const preferDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    document.documentElement.classList.add(preferDark ? 'dark' : 'light');
} else if (localStorage.theme === 'dark') {
    document.documentElement.classList.add('dark')
} else if (localStorage.theme === 'light') {
    document.documentElement.classList.remove('dark')
}