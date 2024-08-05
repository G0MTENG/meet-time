import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './global.css'
import { BrowserRouter } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient()

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker
      .register('/sw.js')
      .then(registration => {
        console.log('Service Worker registered with scope:', registration.scope)
      })
      .catch(error => {
        console.log('Service Worker registration failed:', error)
      })
  })
}

async function enableMocking() {
  if (import.meta.env.VITE_APP_ENV !== 'development') {
    return
  }

  const { worker } = await import('./mocks/browser')
  return worker.start()
}

enableMocking().then(() => {
  ReactDOM.createRoot(document.getElementById('root')).render(
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </QueryClientProvider>,
  )
})
