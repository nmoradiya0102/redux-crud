import React, { useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { DELETE_PRODUCT_PROGRESS, PATCH_PRODUCT_PROGRESS, POST_PRODUCT_PROGRESS } from '../redux-saga/admin/action/action'


const Data = () => {
  const productname = useRef()
  const price = useRef()
  const product = useSelector((state) => state.productReducer);
  const dispatch = useDispatch()

  const [view , setview] = useState({})

  // console.log(product , " product from data ");

  const handle_Submit = () => {
    const data = {
      productName : productname.current.value,
      price : price.current.value
    }
    dispatch({ type : POST_PRODUCT_PROGRESS , payload : data});
    productname.current.value = "";
    price.current.value = "";
    // console.log(data);
  }

  const handle_Delete = (val) => {
    console.log(val);
    dispatch({ type : DELETE_PRODUCT_PROGRESS , payload : val })
  }

  const handle_View = (val) =>{
    setview(val);
  }

  const handle = (e) => {
    setview({...view , [e.target.name] : e.target.value})
  }

  const handle_Update = () => {
    dispatch({type : PATCH_PRODUCT_PROGRESS , payload : view})
  }
  return (
    <div>
    <form>
      <div class = "form-group">
        <label>Product Name </label> <br/>
        <input type="text" placeholder="Enter Product" ref={productname} />
      </div>
      <div class = "form-group">
        <label>Product Price </label> <br/>
        <input type="number" placeholder="Enter Price" ref={price}/>
      </div>
      <button onClick ={handle_Submit} type="submit" class="btn btn-primary">Submit</button>
    </form><br/>
    <form>
        <h2>Update</h2>
        <input type='text' placeholder='product name' name='productName' value={view?.productName} onChange={handle}/>
        <input type='number' placeholder='product price' name='price' value={view?.price} onChange={handle}/><br/><br/>
        <button onClick={handle_Update} class='btn btn-secondary'> Update </button>
    </form>
      {product.product?.map((val , ind)=> (
        <div className='card ml-2 mt-3' key = {val.id} style={{ width : `18rem`}}>
        <div className='card-body'>
            <h1 className='card-title'>Id : {val?.id}</h1>
            <h2 className='card-subtitle mb-2 text-muted'>Product name :{val?.productName}</h2>
            <h3 className='card-text'>Product price :{val?.price}</h3>
            <button onClick = {() => handle_Delete(val)} class = "btn btn-danger">Delete</button>
            <button onClick = {() => handle_View(val)} class = "btn btn-success ml-3">View</button>
        </div>
        </div>
        ))}
    </div>
  );
};

export default Data;