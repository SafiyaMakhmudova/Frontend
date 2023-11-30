import axios from 'axios'
import { useRouter } from 'vue-router';
import { onMounted, ref } from 'vue'

export function useLogin() {
    const password = ref('')
    const username = ref('')
    const isAuth = ref(true);
    
    const router = useRouter()
    const url = import.meta.env.VITE_MAIN_URL;
    
    async function onLogin() {
        const res = await axios.post(url + 'auth/login', {
            password: password.value,
            username: username.value
        });
        if (!res?.data?.token && res.status !== 200) {
            return;
        }
        localStorage.setItem('token', res?.data?.token)
        router.push({name: 'home'})
    }

    onMounted(() => {
        const token = localStorage.getItem('token')
        if (!token) {
            localStorage.removeItem('token')
            isAuth.value = false;
        }
    })
    

    return {
        onLogin,
        password,
        username,
        isAuth
    }
}
