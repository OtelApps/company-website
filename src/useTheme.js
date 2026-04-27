import { ref } from 'vue'

// Create a singleton reactive ref
const isDark = ref(false)

// Initialize theme from localStorage or system preference
if (typeof window !== 'undefined') {
  const storedTheme = localStorage.getItem('theme')
  if (storedTheme === 'dark') {
    isDark.value = true
    document.documentElement.classList.add('dark')
  } else if (storedTheme === 'light') {
    isDark.value = false
    document.documentElement.classList.remove('dark')
  } else {
    // No stored preference, use system preference
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    isDark.value = prefersDark
    if (prefersDark) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }
}

export function useTheme() {
  function toggleTheme() {
    // Toggle the value
    isDark.value = !isDark.value
    
    // Directly update DOM and localStorage immediately
    if (typeof window !== 'undefined') {
      const html = document.documentElement
      if (isDark.value) {
        html.classList.add('dark')
        localStorage.setItem('theme', 'dark')
      } else {
        html.classList.remove('dark')
        localStorage.setItem('theme', 'light')
      }
    }
  }
  
  return { isDark, toggleTheme }
}