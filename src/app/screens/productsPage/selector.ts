import { createSelector } from "@reduxjs/toolkit";
import { AppRootState } from "../../../lib/types/screen";



const selectProductsPage = (state: AppRootState) => state.productPage

export const retrieveRestaurant = createSelector(
    selectProductsPage,
    (ProductsPage) => ProductsPage.restaurant
);
export const retrievechosenProduct = createSelector(
    selectProductsPage,
    (ProductsPage) => ProductsPage.chosenProduct
);
export const retrieveProducts = createSelector(
    selectProductsPage,
    (ProductsPage) => ProductsPage.products
);