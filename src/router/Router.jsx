import { BrowserRouter , Routes, Route, Navigate} from 'react-router-dom'
import { Home, RouterPage, EnvPage, Internalization, Create, Components, Private} from '../pages'

export default function Router(){
    return(
        <BrowserRouter>
        <Routes>
            <Route path="*" element={<Navigate to="/" replace />} />
            <Route path='/' Component={Home} />
            <Route path='/components' Component={Components}/>
            <Route path='/create' Component={Create} />
            <Route path='/routes' Component={RouterPage} />
            <Route path='/env' Component={EnvPage}/>
            <Route path='/internalization' Component={Internalization}/>
            <Route path='/private' Component={Private}/>
        </Routes>
        </BrowserRouter>
    )
}