import { DELETE_PRODUCT_PROGRESS, GET_PRODUCT_PROGRESS, PATCH_PRODUCT_PROGRESS, POST_PRODUCT_PROGRESS } from "../../admin/action/action";
import { takeLatest } from "redux-saga/effects";
import { handle_Delete_Product_Api, handle_Get_Product_Api, handle_Post_Product_Api, handle_Put_Product_Api } from "../admin/manageProduct";

// GET PRODUCT FROM SAGA
export function* get_product_saga(){
    yield takeLatest(GET_PRODUCT_PROGRESS , handle_Get_Product_Api);
}

// POST PRODUCT SAGA
export function* post_product_saga(){
    yield takeLatest(POST_PRODUCT_PROGRESS , handle_Post_Product_Api);
}

// DELETE PRODUCT SAGA
export function* delete_product_saga(){
    yield takeLatest(DELETE_PRODUCT_PROGRESS , handle_Delete_Product_Api)
}

// PUT PRODUCT SAGA
export function* put_product_saga(){
    yield takeLatest(PATCH_PRODUCT_PROGRESS , handle_Put_Product_Api);
}