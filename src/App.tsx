import { Suspense } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import Footer from '@/components/Footer'
import routes from '~react-pages'
import '@/styles/global.css'

export default function App() {
  return (
    <main className="px-4 py-10 text-center font-sans text-gray-700 dark:text-gray-200">
      <Router>
        <Routes />
      </Router>
      <Footer />
    </main>
  )
}

function Routes() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      {useRoutes(routes)}
    </Suspense>
  )
}
