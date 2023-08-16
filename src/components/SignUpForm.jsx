import { useState } from "react";


export default function SignUpForm({setToken}){
    const[username,setUsername]=useState("");
    const[password, setPassword]=useState("");
    const[error, setError]= useState(null);

    async function handleSubmit(event) {
        event.preventDefault();
        try {
            const repsonse = await fetch('https://fsa-jwt-practice.herokuapp.com/signup', 
            { 
              method: "POST", 
              headers: { 
                "Content-Type": "application/json" 
              }, 
              body: JSON.stringify({ 
                username: "some-username", 
                password: "super-secret-999" 
              }) 
            })
        
            const result = await repsonse.json()
            console.log(result)
            setToken(result.token)

        } catch (error) {
          setError(error.message);
        }
      }
    return (<>
    <h2>Sign Up!</h2>
    {error && <p>{error}</p>}
    <form onSubmit={handleSubmit}>
        <label>
            Username(Must be eight character):{" "}
            <input 
            value={username} onChange={e=>setUsername(e.target.value)}
            />
        </label><br/>
        <label>
            Password(Must be eight character):{" "}
            <input 
            value={password} onChange={e=>setPassword(e.target.value)}
            />
        </label><br/>
        <button>Submit</button>
    </form>
    </>)
}