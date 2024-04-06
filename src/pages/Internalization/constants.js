export const code = {
    installDep : 
`npm i i18next\nnpm i react-i18next`,
    files:
`>src\n\t>translations\n\t\t>en\n\t\t\tglobal.json\n\t\t>es\n\t\t\tglobal.json`,
    enjson:
`{
    "main":{
        "hello":"hello world"
    }
}`,
    esjson:
`{
    "main":{
        "hello":"hola mundo"
    }
}`,
    config:
`import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {I18nextProvider} from 'react-i18next'
import i18next from 'i18next'
import global_en from '../src/translations/en/global.json'
import global_es from '../src/translations/es/global.json'

i18next.init({
  lng : 'es',
  interpolation : {escapeValue: false},
  resources: {
    es : {
      global : global_es
    },
    en: {
      global : global_en
    },
  }
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <I18nextProvider i18n={i18next}>
      <App />
    </I18nextProvider>
  </React.StrictMode>,
)`,
using:
`import { useTranslation } from 'react-i18next'

function App() {

  const {t,i18n} = useTranslation('global')

  return (
    <>
    <h1>{t('main.hello')}</h1>
    <button onClick={()=>i18n.changeLanguage('es')}>ES</button>
    <button onClick={()=>i18n.changeLanguage('en')}>EN</button>
    </>
  )
}

export default App`
}
