import { DELETE_PRODUCT_ERROR, DELETE_PRODUCT_SUCCESS, GET_PRODUCT_ERROR, GET_PRODUCT_SUCCESS, PATCH_PRODUCT_ERROR, PATCH_PRODUCT_SUCCESS, POST_PRODUCT_ERROR, POST_PRODUCT_SUCCESS } from "../../admin/action/action";
import { delete_product, get_product, patch_product, post_product } from "../../admin/api/api";
import { call, put } from "redux-saga/effects";

// GET PRODUCT
export function* handle_Get_Product_Api(action) {
    try{
        const res = yield call(get_product , action);
        console.log(res , "from manageproduct ");
        const status = res.status;
        const data = res.data;

        if(status === 200){
            yield put({ type : GET_PRODUCT_SUCCESS , data });
        }
        else {
            yield put({ type : GET_PRODUCT_ERROR , data });
        }
    }
    catch(e) {
        yield put({ type : GET_PRODUCT_ERROR , e});
    }
}

// POST PRODUCT
export function* handle_Post_Product_Api(action) {
    console.log(action , "this is from handle post");
    try{
        const res = yield call(post_product , action);
        console.log(res , "from manageproduct ");
        const status = res.status;
        const data = res.data;

        if(status === 200 || status === 201){
            yield put({ type : POST_PRODUCT_SUCCESS , data });
        }
        else {
            yield put({ type : POST_PRODUCT_ERROR , data });
        }
    }
    catch(e) {
        yield put({ type : POST_PRODUCT_ERROR , e});
    }
}


// DELETE PRODUCT DATA
export function* handle_Delete_Product_Api(action){
    console.log(action, "this is from handle post..");
    try{
        const res = yield call(delete_product , action);
        console.log(res , "from manageproduct");
        const status = res.status;
        const data = res.data;

        if(status === 200 || status === 201) {
            yield put ({ type : DELETE_PRODUCT_SUCCESS , data });
        }
        else{
            yield put ({ type : DELETE_PRODUCT_ERROR , data});
        }
    }
    catch (e) {
        yield put ({ type : DELETE_PRODUCT_ERROR , e });
    }
}


//  PUT UPDATE PRODUCT DATA
export function* handle_Put_Product_Api(action){
    console.log(action , "this is from handle post..");
    try{
        const res = yield call ( patch_product , action );
        console.log(res , "from manageproduct");
        const status = res.status;
        const data = res.data;

        if(status === 200 || status === 201){
            yield put({ type : PATCH_PRODUCT_SUCCESS , data });
        }
        else{
            yield put ({ type : PATCH_PRODUCT_ERROR , data });
        }
    }
    catch (e) {
        yield put ({ type : PATCH_PRODUCT_ERROR , e});
    }
}