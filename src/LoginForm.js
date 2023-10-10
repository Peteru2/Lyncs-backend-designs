import  { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loggedIn, setLoggedIn] = useState(false);
    const [Error, setError] = useState('')
    const navigate = useNavigate()

    console.log(loggedIn);

    const handleSubmit = async (e) => {
      e.preventDefault();
  
      // Perform API call here and check login
      if(email === ""){
        setError("Email cannot be Empty")
      }
      else if(password === ""){
        setError("Password cannot be empty cannot be Empty")

      }
      else{
         try {
        const response = await fetch('https://api.lyncs.africa/staff/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email, password }),
        });
  
        if (response.ok) {
          const data = await response.json();
          if (data.exists) {
            navigate('/');
            setLoggedIn(true);
          } else {
            setError('Name or password is incorrect.');
          }
        } else {
          // Handle other API errors here
          setError('An error occurred during login.');
        }
      } catch (error) {
        console.error('API request failed:', error);
        setError('API request failed:', error)
      }
    }
    };

    return ( 
        <>
            <form onSubmit={handleSubmit}>
                                    <div>
                                        <label className="text-sm font-bold mb-2">Email</label>
                                        <div className="border-2 p-1 rounded-md">
                                            <input type="text"  
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                             className="w-full outline-none"/>
                                        </div>
                                    </div>

                                    <div className="mt-4 w-full">
                                        <label className="text-sm font-bold mb-2">Password</label>
                                        <div className="border-2 p-1 rounded-md">
                                            <input type="password"   
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                            className="w-full outline-none"/>
                                        </div>
                                        <div className="w-full flex justify-right">
                                                <p className="ml-auto text_color text-sm mt-2">Forget password?</p>
                                        </div>

                                    </div>
                                    <div className="mt-12">
                                        <button type="submit" className="text-center w-full p-2 text-white bg_color rounded-md ">Login</button>
                                    </div>
                
                                    </form>
                                    <h3>{Error}</h3>
        </>
     );
}
 
export default LoginForm;