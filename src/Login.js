import LoginImg from "./images/Frame 279.png"

const Login = () => {
    return ( 
        <>
            <section>
                <div className="flex w-full Loginpage ">
                    <div className="flex   LoginPage1 justify-center">
                        <div>
                            <img src={LoginImg} alt="loginImg" />
                        </div>
                    </div>
                    <div className="LoginPage2 flex justify-center">
                        <div className="w-96">
                            <h2 className="font-bold">Login to backend</h2>
                            <h2 className="text-gray-500 text-sm mt-1">Fill in the appropriate details</h2>

                            <div className="mt-6">
                                <form>
                                    <div>
                                        <label className="text-sm font-bold mb-1">Email</label>
                                        <div className="border-2 p-1 rounded-md">
                                            <input type="text"   className="w-full"/>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
     );
}
 
export default Login;