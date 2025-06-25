import './App.css'
import { Home } from './app/Home';
import { Card, CardContent, CardHeader, CardTitle } from './components/ui/card'
import { ThemeProvider } from './theme-provider'

function App() {

  return (
    <>
      <ThemeProvider defaultTheme='dark' storageKey='vite-ui-theme'>
        <div className='flex w-full items-center'>
          <Card className="w-full">
            <CardHeader>
              <CardTitle className="text-left">Estufa da alegria</CardTitle>
            </CardHeader>
            <CardContent>
              <Home/>
            </CardContent>
          </Card>
        </div>
      </ThemeProvider>
    </>
  )
}

export default App
