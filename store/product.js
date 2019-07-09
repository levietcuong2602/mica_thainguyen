import {
  products
} from '@/data/products';

export const state = () => ({
  products: products,
});

export const getters = {
  getProductList(state) {
    return state.products;
  },
  getProductCategory(state) {
    return categoryId => state.products.filter(product => product.idCategory === categoryId);
  }
}

export const mutations = {

}

export const actions = {}
