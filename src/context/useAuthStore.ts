import AuthService from "@/services/authService";
import { showMessageError, showMessageSuccess } from "@/utils/reactToastify";
import { create } from "zustand";

interface AuthState {
    loading: boolean;

    email: string;
    setEmail: (value: string) => void;

    password: string;
    setPassword: (value: string) => void;

    handleClickLogin: () => void;
    handleGetUser: () => void;
}

const authStore = create<AuthState>((set) => ({
    loading: false,
    email: '',
    setEmail: (value) => {
        set({ email: value })
    },
    password: '',
    setPassword: (value) => {
        set({ password: value })
    },
    handleClickLogin: async () => {
        const { email, password } = authStore.getState()
        const payload = {
            "email": email,
            "password": password
        }
        try {
            set({ loading: true })
            const res = await AuthService.handlelogin(payload);
            if (res.status === 200) {
                typeof window !== undefined && sessionStorage.setItem('token', btoa(res.data.response))
                showMessageSuccess(res.data.message)
                set({ loading: false, });
                setTimeout(() => {
                    window.location.href = "/";
                }, 1000)
            } else {
                showMessageError(res.response.data.status_message)
                set({ loading: true })
            }
        } catch (error) {
            showMessageError('Something When Wrong')
            console.error('Error Login:', error);
            set({ loading: false, });
        }
    },

    handleGetUser: async () => {
        try {
            set({ loading: true })
            const res = await AuthService.getUserInfo();
            if (res.status === 200) {
                typeof window !== undefined && sessionStorage.setItem('name', res.data.response.name)
                set({ loading: false, });
            } else {
                showMessageError(res.response.data.status_message)
                set({ loading: true })
            }
        } catch (error) {
            showMessageError('Something When Wrong')
            console.error('Error Login:', error);
            set({ loading: false, });
        }
    }

}))

export default authStore