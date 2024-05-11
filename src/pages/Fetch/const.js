export const code = {
get:
`async function getData(){
    await fetch('https://fakeusers.onrender.com/users')
    .then(data=>data.json())
    .then(res=>console.log(res))
    .catch(e=>console.log(e))
}
useEffect(()=>{
    getData()
},[])`,
post:
`async function postData(){
    await fetch('https://fakeusers.onrender.com/users',{
        method:'POST',
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
        body:JSON.stringify({
            name:"Mario Moreno",
            email:"correo@cantinflas.com"
        }
    )
    })
    .then(data=>data.json())
    .then(res=>console.log(res))
    .catch(e=>console.log(e))
}
useEffect(()=>{
    postData()
},[])`,
put:
`async function putData(){
    await fetch('https://fakeusers.onrender.com/users/663927c620fa357bb45d380f',{
        method:'PUT',
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
        body:JSON.stringify({
            name:"Maria Matilda",
            email:"correo@matilda.com"
        }
    )
    })
    .then(data=>data.json())
    .then(res=>console.log(res))
    .catch(e=>console.log(e))
}
useEffect(()=>{
    putData()
},[])`,
del:
`async function deleteData(){
    await fetch('https://fakeusers.onrender.com/users/663927c620fa357bb45d380f',{
        method:'DELETE',
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        }
    })
    .then(data=>data.json())
    .then(res=>console.log(res))
    .catch(e=>console.log(e))
}
useEffect(()=>{
    deleteData()
},[])`,
map:
`{
    usuarios &&
    usuarios.map((user,i)=>(
        <div key={i}>
            <h3>name: {user.name}</h3>
            <p>email: {user.email}</p>
        </div>
    ))
}`
}