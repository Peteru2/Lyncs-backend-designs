import  { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import axios from 'axios'
import { useAuth } from './AuthContext';


const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loggedIn, setLoggedIn] = useState(false);
    const [error, setError] = useState('i')
    const [success, setSuccess] = useState('')
   
    console.log(success);

    const navigate = useNavigate()

    console.log(loggedIn);

    const { login } = useAuth();
    // console.log(isAuthenticated)
   
    

    const handleSubmit = async (e) => {

      e.preventDefault();

      console.log(password);
      console.log(email);
      // console.log("This is not working")
  
      // Perform API call here and check login
      const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
                if (!email.trim()) {
                  setError("Email is required!!")
                  toast.error(error, {
                    position: toast.POSITION.TOP_CENTER,
                  });               
                } else if (!emailRegex.test(email)) {
                  setError("Invalid Email Format")
                  toast.error(error, {
                    position: toast.POSITION.TOP_CENTER,
                  }); 
                }
     
      else if(password === ""){
        setError("Password cannot be empty cannot be Empty")
        toast.error(error, {
          position: toast.POSITION.TOP_CENTER,
        }); 
        
      }
      else{
      axios({
        method: 'post',
        url: 'https://api.lyncs.africa/staff/login',
        data: {
          email: email,
          password: password
        }
      })
      .then((response) =>{
              console.log(response.data)
              setTimeout(() => {
              navigate('/');
                
              }, 2000);
              setLoggedIn(true);
              login();
              setSuccess(response.data.message);
              toast.success(success, {
                position: toast.POSITION.TOP_CENTER,
              }); 
      })
      .catch((err)=>{
        console.log(err)
        setError(err);
            toast.error(error, {
              position: toast.POSITION.TOP_CENTER,
            }); 
      })

      }
      // try {

          
    
      //   const response = await fetch('https://api.lyncs.africa/staff/login', {
      //     method: 'POST',
      //     headers: {
      //       'Content-Type': 'application/json',
      //     },
      //     body: JSON.stringify({ email, password }),
      //   });
      // console.log(response)
       
      //     const data = await response.json();
      //     if (data.exists) {
      //       if (data.password){
      //         navigate('/');
      //         setLoggedIn(true);
      //         setSuccess('It worked.');
      //         toast.success(success, {
      //           position: toast.POSITION.TOP_CENTER,
      //         }); 
      //         console.log("it has worked")
      //       }
      //       else{ 
      //         setError('Invalid Credentials')
      //         toast.error(error, { 
      //               position: toast.POSITION.TOP_CENTER, 
      //             }); 
      //       }
            
      //     } else {
      //       setError('Staff not found');
      //       toast.error(error, {
      //         position: toast.POSITION.TOP_CENTER,
      //       }); 
      //     }
       
      // }
      //  catch (error) {
      //   console.error('API request failed:', error);
      //   setError('API request failed:', error)
      //   toast.error(error, {
      //     position: toast.POSITION.TOP_CENTER,
      //   }); 
      // }
    // toast("Default Notification !");
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
                                             className="w-full outline-none px-2 text-sm"/>
                                        </div>
                                    </div>

                                    <div className="mt-4 w-full">
                                        <label className="text-sm font-bold mb-2">Password</label>
                                        <div className="border-2 py-1  rounded-md">
                                            <input type="password"   
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                            className="w-full outline-none px-2 text-sm"/>
                                        </div>
                                        <div className="w-full flex justify-right">
                                                <p className="ml-auto text_color text-xs mt-2 ">Forget password?</p>
                                        </div>

                                    </div>
                                    <div className="mt-12">
                                        <button type="submit" className="text-center w-full p-2 text-white bg_color rounded-md ">Login</button>
                                    </div>
                
                                    </form>
                                   
                                    <ToastContainer />
        </>
     );
}
 
export default LoginForm;