import { loginStaff } from "../api/auth";
import useForm from "../hooks/useForm";
import { useMutation } from "@tanstack/react-query";

function Login() {
    const { values, handleChange, reset } = useForm()

    const loginMutation = useMutation({
        mutationFn: loginStaff,
        onSuccess: (res) => console.log(res),
        onError: (err) => console.log(res)
    })

    const handleSubmit = async (e) => {
        e.preventDefault()
        await loginMutation.mutateAsync({ ...values })
        // loginStaff
    }

    return (
        <div className="min-h-screen w-full h-screen bg-repeat bg-center bg-loginImg flex bg-orange-400">

            {/* <div className="bg-no-repeat bg-center w-full md:flex hidden bg-loginImg flex-col items-center justify-center h-full bg-[#F18701]"></div> */}
            <div className="flex flex-col justify-center items-center w-full h-full">

                <div className="px-10 py-5 w-[450px] bg-white flex flex-col rounded-xl shadow-md">
                    <h2 className="font-bold text-xl w-full text-center text-gray-900">Login to backend</h2>
                    {/* <h2 className="text-gray-500 mt-1 w-full text-center">Fill in the appropriate details</h2> */}

                    <form className="w-full" onSubmit={handleSubmit}>

                        <div className="mt-10">
                            <label className="text-sm font-medium text-gray-900">Email</label>
                            <input
                                type="email"
                                size="small"
                                name="email"
                                value={values.email}
                                required
                                onChange={handleChange}
                                className="w-full outline-none px-2 text-sm focus:border-primary focus:ring-0 border p-2 rounded-md mt-2" />
                        </div>

                        <div className="mt-4 w-full">
                            <label className="text-sm font-medium mb-4 text-gray-900">Password</label>
                            <input
                                required
                                type="password"
                                name="password"
                                value={values.password}
                                onChange={handleChange}
                                className="w-full focus:ring-0 focus:border-primary outline-none rounded-md border text-sm p-2 mt-2"
                            />

                        </div>

                        <div className="mt-12">
                            <button
                                disabled={loginMutation.isLoading}
                                type="submit"
                                className="text-center bg-bgPrimary ease transition-all hover:opacity-75 shadow-md w-full p-2 text-white bg_color rounded-md bg-primary text-sm font-semibold"
                            >
                                {loginMutation.isLoading ? "Loading..." : "LOGIN"}
                            </button>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    );
}

export default Login;
