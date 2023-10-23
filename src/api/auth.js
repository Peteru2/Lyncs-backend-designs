
import clientHttp from "../lib/httpClient"

export const loginStaff = async ({ email, password }) => {
    const res = await clientHttp.post("staff/login", { email, password });
    return res.data
}