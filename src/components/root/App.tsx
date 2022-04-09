import { HelmetProvider } from 'react-helmet-async'
import Main from '@/components/root/Main'

const App = () => {
  return (
    <HelmetProvider>
        <Main />
    </HelmetProvider>
  )
}

export default App
