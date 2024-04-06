export const code = {
    create:
`npm create vite@latest`,
    cd:
`cd [nombre-proyecto]`,
    install:
`npm install`,
    dev:
`npm run dev`,
    main:
`import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <App />
  </React.StrictMode>,
)`,
app:
`export default function App(){
    return(
        <div style={{
            display:'grid',placeItems:'center',width:'100%',height:'100vh'
        }}>
            <h1>Hola Mundo</h1>
        </div>
    )
}`
}
