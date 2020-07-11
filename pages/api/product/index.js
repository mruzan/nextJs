// import fetch from "isomorphic-fetch";
import products from '../../../posts.json';

export function getProducts() {
  return products;
}

export function getFavorites() {
    const favorites = {};
    for (var key in products) {
         if (products.hasOwnProperty(key) && products[key].is_favorite) {
            favorites[key] = products[key];
         }
    }
  return favorites;
}

export function makeFavorite(type, id){
    products[id]["is_favorite"] = type;
    const product = products[id];

    return true;    
}

