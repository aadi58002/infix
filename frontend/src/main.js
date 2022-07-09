import { createApp } from 'vue'
import App from './App.vue'
import './main.css'

createApp(App).mount('#app')

if (localStorage.theme === 'dark' ||
    (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark');
}

function theme_toggle(e) {
    let dark = e.target.checked;

    if (dark) {
        localStorage.theme = 'dark'
        document.documentElement.classList.add('dark');
    } else {
        localStorage.theme = 'light'
        document.documentElement.classList.remove('dark');
    }
}

document.getElementById("theme-switcher")
    .addEventListener("change", switchTheme);

