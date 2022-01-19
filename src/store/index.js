import { createStore } from 'vuex'

export default createStore({
    state: {
        products: [
            { id: 1, pryse: '25 000', category: 'Машина', data: '30.01.19', name: 'Gt', artist:'Машков Владимир',locat:'Где-то' },
            { id: 2, pryse: '70 000', category: 'Машина', data: '20.01.15', name: 'As', artist:'Хабенский Константин',locat:'Там' },
            { id: 3, pryse: '120 000', category: 'Машина', data: '20.11.20', name: 'Pa', artist:'Миронов Евгений',locat:'Где' },
            { id: 4, pryse: '40 000', category: 'Спорт', data: '29.02.15', name: 'Bu', artist:'Петренко Игорь', locat:'Потерял' },
        ],
        categoryes: [
            { id: 1, name: 'Машина' },
            { id: 2, name: 'Спорт' }
        ],
        basket: [
            { productId: 1, count: 1, }
        ]
    },
    getters: {
        allProducts(state) {
            return state.products
        },
        allCategoryes(state) {
            return state.categoryes
        },
        filterPeoductsByCategory: (state) => (name) => {
            if (name) {
                return state.products.filter(product => product.category == name);
            }
            return state.products
        },
        serchProductsByName: (state) => (name) => {
            if (name) {
                return state.products.filter(product => products.name.includes(name));
            }
            return state.products
        },
        findProdictsById: (state) => (id) => {
            return state.products.find(product => product.id == id)
        }
    },
    mutations: {
        addBasket(state, payload) {
            state.basket.push(payload)
        },
        addCauntBasket(state, payload) {
            state.basket[payload.index].count == payload.count
        }
    },
    actions: {
        addProductsToBasket({ state, comit }, id) {
            let product = state.basket.find(item => item.productId == id)
            if (productId != -1) {
                comit('addBasket', { index: addCauntBasket, count: 1 })
            } else {
                comit('addBasket', { productId: id, count: 1 })
            }
        }
    },
    modules: {}
})