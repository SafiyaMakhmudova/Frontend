import { onMounted, ref,  reactive } from "vue";

export function UseProduct() {
    const products = ref([])
    const singleProduct = ref(1)
    const bool = ref(false)
    function fetchUrl() {
        fetch(' http://localhost:3000/products')
        .then(res => res.json())
        .then(json =>products.value = json)
    }

    onMounted(()=> {
        fetchUrl()
    })


    function fetchSingleProduct(id) {
       
        fetch(`http://localhost:3000/products/${id}`)
        .then(res => res.json())
        .then(json =>singleProduct.value = json)
        bool.value = true
    }
    return {
        products,
        singleProduct,
        fetchSingleProduct,
        bool,
    }
}