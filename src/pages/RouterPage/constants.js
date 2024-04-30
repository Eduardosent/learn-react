export const code = {
install:`npm i react-router-dom`,
router:
`import { BrowserRouter ,Routes, Route, Navigate} from 'react-router-dom'
import { Home, Another, Product} from '../pages'

export default function Router(){
    return(
        <BrowserRouter>
        <Routes>
            <Route path="*" element={<Navigate to="/" replace />} />
            <Route path='/' Component={Home} />
            <Route path='/another' Component={Another}/>
            <Route path='/product/:id' Component={Product}/>
        </Routes>
        </BrowserRouter>
    )
}`,
link:
`import { Link } from 'react-router-dom'

export default function AnyComponent(){
    return(
        <>
        <Link to='/'>Go to Home</Link>
        </>
    )
}`,
params:
`import { useParams } from 'react-router-dom'

export default function Product(){

    const { id } = useParams()

    return(
        <>
        <p>The id is: {id}</p>
        </>
    )
}`,
redirect:
`import { useNavigate } from 'react-router-dom'

export default function AnyComponent(){

    const navigate = useNavigate()

    function onLogin(){
        //if credentials are valid, so redirect
        if(valid(email,passsword)){
            navigate('/another-route')
        }
        //[valid is for example, but the function its not defined here]
    }

    return(
        <>
        <button onClick={onLogin}>Login and redirect</button>
        </>
    )
}`,
}