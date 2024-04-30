export const code = {
install:`npm i zustand`,
store:
`import {create} from 'zustand'

const bearStore = create((set)=>({
    bears:0,
    increasePopulation: ()=>set((state)=>({bears:state.bears+1})),
    removeAllBears: ()=>set({bears:0})
}))`,
use:
`export default function BearCounter(){
    const bears = bearStore((state)=>state.bears)
    const increase = bearStore((state)=>state.increasePopulation)
    const reset = bearStore((state)=>state.removeAllBears)
    return(
    <>
    <h1>{bears}</h1>
    <button onClick={increase}>Incrementar</button>
    <button onClick={reset}>Resetear</button>
    </>
    )
}`

}