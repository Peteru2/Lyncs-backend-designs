// import LoginImg from "./images/lyncs-login-bg.svg"
import Facebook from "./images/Facebook.svg"
import Google from "./images/Google.svg"
import LoginForm from "./LoginForm";

const Login = () => {

    return (
        <div className="min-h-screen w-full h-full grid grid-cols-1 md:grid-cols-2">
            <div className="bg-no-repeat bg-center w-full md:flex hidden bg-loginImg flex-col items-center justify-center h-full bg-[#F18701] "></div>

            <div className="w-full p-10 md:p-20 bg-white flex flex-col items-start justify-center">
                <h2 className="font-bold text-xl">Login to backend</h2>
                <h2 className="text-gray-500 mt-1">Fill in the appropriate details</h2>

                <div className="mt-6 w-full">
                    <LoginForm />
                </div>
            </div>
        </div>
    );
}

export default Login;