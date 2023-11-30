import { onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';
import axios from 'axios'

export function useHome() {
    const url = import.meta.env.VITE_MAIN_URL;
    const router = useRouter()
    const products = ref([]);


    async function fetchAllProducts() {
        const res = await axios.get(url + 'products')

        if (res.status !== 200 && !res?.data) {
            return;
        }
        products.value = res?.data?.products;
    }

    function onLogout() {
        localStorage.removeItem('token')
        router.push({name: 'login'})
    }

    onMounted( async () => {
        await fetchAllProducts()
    })

    return {
        onLogout,
        products
    }
}