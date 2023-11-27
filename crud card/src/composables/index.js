import { onMounted, ref, reactive } from 'vue';

export function useProduct() {
  const limitSize = ref(null);
  const limitOptions = ref ([5, 10, 20])

  const showA = ref(false)
  const acomptext = ref('')
  const showB = ref(false)
  const bcomptext = ref('')

  const product = reactive({
    title: '',
    description: '',
    image: 'https://picsum.photos/500',
    category: '',
    price: null,
    rating: {
      rate: 0,
      count: null,
    }
  })

  
  const productUpdate = reactive({
    title: '',
    description: '',
    image: 'https://picsum.photos/500',
    category: '',
    price: null,
    rating: {
      rate: 0,
      count: null,
    }
  })


    
  const products = ref([]);
  const showAddModal = ref(false);
  const showDeleteModal = ref(false);
  const showUpdateModal = ref(false);
  const editingItemId = ref(null);
  
  function resetProductObj() {
    product.category = '';
    product.title = '';
    product.description = '';
    product.price = null;
    product.rating.count = null;
  }
    
    function fetchProducts(limit) {
      fetch(`http://localhost:3000/products?_sort=id&_order=desc${limit ? `&_limit=${limit}`: ''}`)
        .then(res => res.json())
        .then(json => products.value = json)
  }
  
    function onLimitChange() {
      fetchProducts(limitSize.value)
    }
    function onDeleteItem(id) {
      console.log("salom",id);
      fetch(`http://localhost:3000/products/${id}`, {
        method: "DELETE"
      })
        .then(res => res.json())
        .then(() => {
          fetchProducts(limitSize.value);
        })
    }
  
  function onSubmitAddItem() {
      resetProductObj()
      fetch(`http://localhost:3000/products`, {
        method: 'POST',
        headers:  { 
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(product),
      })
        .then(res => res.json())
        .then((item) => {
          if (!item.id) {
            return;
          }
          showAddModal.value = false;
          fetchProducts(limitSize.value);
          resetProductObj()
        })
  }
  
  function onShowUpdateModal(item) {
    showUpdateModal.value = true;
    editingItemId.value = item.id
    productUpdate.title = item.title
    productUpdate.description = item.description
    productUpdate.category = item.category
    productUpdate.price = item.price
    productUpdate.rating.count = item.rating.count;
  }

  function onSubmitUpdateModal() {
    fetch(`http://localhost:3000/products/${editingItemId.value}`, {
        method: 'PUT',
        headers:  { 
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(productUpdate),
      })
        .then(res => res.json())
        .then((item) => {
          if (!item.id) {
            return;
          }
          showUpdateModal.value = false;
          fetchProducts(limitSize.value);
          resetProductObj()
        })
  }
    
    onMounted(() => {
      fetchProducts(limitSize.value)
    })
    
    return {
      products,
      product,
      limitSize,
      showAddModal,
      showDeleteModal,
      showUpdateModal,
      onLimitChange,
      onSubmitUpdateModal,
      onSubmitAddItem,
      onDeleteItem,
      onShowUpdateModal,
      showA,
      acomptext,
      showB,
      bcomptext,
      limitOptions,
      productUpdate
      
    }
}