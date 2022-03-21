export const useTheme = () => {
  const isDarkTheme = useState('isDarkTheme', () => true)

  onMounted(() => {
    if (process.client) {
      if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.documentElement.classList.add('dark')
        isDarkTheme.value = true
      } else {
        document.documentElement.classList.remove('dark')
        isDarkTheme.value = false
      }
    }
  })

  const _addDarkTheme = () => {
    localStorage.setItem('theme', 'dark')
    document.documentElement.classList.add('dark')
    isDarkTheme.value = true
  }

  const _removeDarkTheme = () => {
    localStorage.setItem('theme', 'light')
    document.documentElement.classList.remove('dark')
    isDarkTheme.value = false
  }

  const toggleTheme = () => {
    isDarkTheme.value ? _removeDarkTheme() : _addDarkTheme()
  }
  return {
    toggleTheme,
    isDarkTheme,
  }
}
