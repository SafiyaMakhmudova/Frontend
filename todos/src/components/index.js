import {ref, onMounted} from 'vue'

export function useTodo() {
    const todos = ref([])

    async function fetchUrl () {
       const res = await fetch( `http://localhost:3000/todos`)
        const data =  await res.json() 
        todos.value = data
        console.log(todos.value);
        
    }

    onMounted (()=> {
        fetchUrl()
    })


    return {
        fetchUrl,
        todos,
    }
}