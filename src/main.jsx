import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

// React 18 createRoot API (raccomandato)
const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)

// Hot Module Replacement per sviluppo
if (import.meta.hot) {
  import.meta.hot.accept('./App.jsx', (newApp) => {
    root.render(
      <React.StrictMode>
        <newApp.default />
      </React.StrictMode>
    )
  })
}