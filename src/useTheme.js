import { ref } from 'vue'

const isDark = ref(false)

if (typeof window !== 'undefined') {
  document.documentElement.classList.remove('dark')
  localStorage.setItem('theme', 'light')
}

export function useTheme() {
  function toggleTheme() {
    // Dark mode je vypnutý — web je vždy ve světlém režimu.
  }

  return { isDark, toggleTheme }
}
