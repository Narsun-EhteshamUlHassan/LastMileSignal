import React, { useEffect, useState } from 'react'
import Home from './pages/Home'
import Privacy from './pages/Privacy'

const App = () => {
  const [route, setRoute] = useState(window.location.hash)

  useEffect(() => {
    const onHashChange = () => setRoute(window.location.hash)
    window.addEventListener('hashchange', onHashChange)
    return () => window.removeEventListener('hashchange', onHashChange)
  }, [])

  if (route === '#/privacy') {
    return <Privacy />
  }

  return <Home />
}

export default App
