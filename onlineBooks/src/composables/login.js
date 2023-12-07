
import { ref } from "vue";
import { useStore } from "vuex";


export function Login() {
    const email = ref();
    const password = ref();
    const store = useStore();
  
    async function onSubmit() {
          
        if (!email.value.length && !password.value.length) {
            return;
        }
        await store.dispatch("login", {
            email: email.value,
            password: password.value,
        })
    }

    return {
        email,
        password,
        onSubmit,
    }
}