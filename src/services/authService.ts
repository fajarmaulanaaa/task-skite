import AxiosInstance from "@/utils/axios";

class AuthService {
    static handlelogin = async (payload: any): Promise<any> => {
        try {
            const response = await AxiosInstance.post(`/platform/user/sign-in`, payload);
            return response;
        } catch (e) {
            return e;
        }
    };
    static getUserInfo = async (): Promise<any> => {
        try {
            const response = await AxiosInstance.get(`/platform/user/info`);
            return response;
        } catch (e) {
            return e;
        }
    };
}

export default AuthService