import Addrepo from '@components/addrepo'

export default async function User({token}) {
    
    if(!token) {
        return
    }

    const res = await fetch("https://gitlab.com/api/v4/user", {
        method: "GET",
        headers: {
            Authorization: `Bearer ${token}`,
        }
    })
    if(!res.ok) {
        return null;
    }

    const user = await res.json()

    return(
        <div style={{display: "flex", flexDirection: "column", width:"300px", padding:"0.5rem", border: "1px solid black"}}>
            <div>
                <img src={user. avatar_url} />
            </div>
            <span>Hello, <b>{user.name}</b> ({user.username}) Email: {user.email}</span>
            <Addrepo token={token}/>
        </div>
    )

}