export const code = {
install:`npm i zustand`,
store:
`import { create } from 'zustand'
import { persist , createJSONStorage} from 'zustand/middleware'

const useBearStore = create(
    persist(
      (set, get) => ({
        bears: 0,
        food:50,
        addABear: () => set({ bears: get().bears + 1 }),
        addAFood: () => set({ food: get().food + 10 }),
      }),
      {
        name: 'food-storage', // name of the item in the storage (must be unique)
        storage: createJSONStorage(() => localStorage), // (optional) by default, 'localStorage' is used
      },
    ),
)`,
use:
`export default function BearPersist(){
    const bears = useBearStore((state)=>state.bears)
    const food = useBearStore((state)=>state.food)
    const MoreBears = useBearStore((state)=>state.addABear)
    const MoreFood = useBearStore((state)=>state.addAFood)

    return(<>
      <h1>{bears}</h1>
      <h2>{food}</h2>
      <button onClick={MoreBears}>Subir Osos</button>
      <button onClick={MoreFood}>Subir Alimento</button>
    </>)
}`
}