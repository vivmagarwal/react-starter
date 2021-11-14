import { useContext, useEffect, useState } from "react";
import { UserContext } from "../store/userContext";

export default function Signup(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  const { user, setUser } = useContext(UserContext);

  useEffect(() => {
    if (user) {
      props.history.push('/');
    }
  }, [user, props.history])

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('https://iifsd.herokuapp.com/auth/local/register', {
        method: 'POST',
        headers: {
           'Content-type': 'application/json'
        },
        body: JSON.stringify({
          username: email,
          email: email,
          password: password
        })
      })
  
      const data = await response.json();
      console.log('data', data);
  
      if (data.error) {
        setError(data.message[0].messages[0].message);
        return;
      }

      setUser(data);
    } catch (err) {
      setError(err.toString());
    }
  }

  return (
    <div>

      <h1>Login</h1>
      
      {error && <p className="msg msg--error">{error.toString()}</p>}
      <br />
      USER: <span>{JSON.stringify(user)}</span>
      
      <form onSubmit={handleSubmit}>
        <input type="email" value={email} onChange={(e) => { setError(''); setEmail(e.target.value)}} />
        <input type="password" value={password} onChange={(e) => { setError(''); setPassword(e.target.value)}} />
        <button>Singup</button>
      </form>
    </div>
  )
}