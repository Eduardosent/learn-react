export const code = {
create:
`import { useState } from "react";
import { createContext } from "react";

//context
export const CounterContext = createContext()

//provider
export function CounterProvider({children}){
    const[counter,setCounter] = useState(0)
    return(
        <CounterContext.Provider value={{counter,setCounter}}>
            {children}
        </CounterContext.Provider>
    )
}`,
wrap:
`export default function App(){
    return(
    <CounterProvider>
        <Router/>
    </CounterProvider>
    )
}`,
use:
`import { useContext } from 'react'
import { CounterContext } from './context/CounterContext'

export default function Page() {

  const { counter, setCounter } = useContext(CounterContext)

  return (
    <>
    {counter}
    <button onClick={()=>setCounter(counter+1)}>Sumar counter</button>
    </>
  )
}`

}