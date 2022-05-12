import { Home } from './Home'
import { theme } from './components/Theme'
import { ThemeProvider } from '@xstyled/styled-components'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Home />
    </ThemeProvider>
  )
}

export default App
