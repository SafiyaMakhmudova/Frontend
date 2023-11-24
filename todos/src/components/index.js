import {ref, onMounted, reactive} from 'vue'

export function useTodo() {
    const todos = ref([])
    const editingId = ref(null);
    const showUpdate = ref(false)
    
    const todoo = reactive({
        title: ' ',
        completed:false,
    })

    const updateTodo = reactive({
        title: ''
    })

    function resetTodo () {
        todoo.title = ''
    }

    async function fetchUrl () {
        try {
            const res = await fetch( `http://localhost:3000/todos?_sort=id&_order=desc`)
            const data =  await res.json() 
            todos.value = data
        } catch(error) {
            console.log(error);
        }
    }

    async function addItem () {
        try{
            if(todoo.title.length !=1 ) {
                
                fetch(`http://localhost:3000/todos`, {
                method: 'POST',
                headers : {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                        
                    body: JSON.stringify(todoo),
                })
                .then(res => res.json())
                .then((item) => {
                if (!item.id) {
                    return;
                }
                
                fetchUrl();
                resetTodo()
                })
            }
        } catch(error) {
            console.log(error);
        }
    }

    async function deleteItem (id) {
        try {
            fetch( `http://localhost:3000/todos/${id}`, {
                method:'DELETE'
            })
                
            .then(res => res.json())
            .then(() => {
            fetchUrl();
            })

        } catch(error) {
            console.log(error);
        }
    }
    async function checkupdated (id, completed, title) {
        try {

            const check = reactive({
                title:title,
                completed:!completed,
            })

            fetch(`http://localhost:3000/todos/${id}`, {
                method: 'PUT',
                headers:  { 
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                  },
                  body: JSON.stringify(check),
            })
            .then(res => res.json())
            .then((item) => {
              if (!item.id) {
                return;
              }
              fetchUrl();
            })
        } catch(error) {
            console.log(error);
        }
    }

    function Update (item) {
        showUpdate.value = true,
        editingId.value = item.id,
        updateTodo.title = item.title
    }

        
    function onSubmitUpdateModal() {
       try {
        if (updateTodo.title.length !=0) {
            fetch(`http://localhost:3000/todos/${editingId.value}`, {
                method: 'PUT',
                headers:  { 
                'Accept': 'application/json',
                'Content-Type': 'application/json'
                },
                body: JSON.stringify(updateTodo),
            })
                .then(res => res.json())
                .then((item) => {
                if (!item.id) {
                    return;
                }
                showUpdate.value = false;
                fetchUrl();
                })
        }
       } catch (error) {
        console.log(error);
       }
    }

    onMounted (()=> {
        fetchUrl()
    })


    return {
        fetchUrl,
        todos,
        todoo,
        addItem,
        showUpdate,
        deleteItem,
        checkupdated,
        Update,
        onSubmitUpdateModal,
        updateTodo
    }
}