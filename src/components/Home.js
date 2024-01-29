import { useState,useRef } from "react";
import DisplayProduct from "./DisplayProduct";



const Home = ()=>{
    const [prodId,setProdId] = useState(null);
    const [sellingPrice,setSellingPrice] = useState(null);
    const [productName,setProductName] = useState(null);
    const [totalValue,setTotalValue] = useState(+0);
   

    var [productDetails,setProductDetails] = useState([{
        productId:null,
        sellingPrice:null,
        productName:null,
    }, 
    
]);

    const prodIdRef = useRef(1);
    const sellingPriceRef = useRef(2);
    const productNameRef = useRef('apple')
 

    const prodIdHandler=()=>{
        // console.log(e.target.value);
        // setProdId(e.target.value);
        setProdId(prodIdRef.current.value);
        
    }

    const sellingPriceHandler=()=>{
        // console.log(e.target.value);
        // setSellingPrice(e.target.value)
        setSellingPrice(sellingPriceRef.current.value);
        
    }

    const productNameHandler=()=>{
        // console.log(e.target.value);
        // setProductName(e.target.value);
         setProductName(productNameRef.current.value);
        
    }

    const submitHandler = (e)=>{
        e.preventDefault();
        // console.log([...productDetails])
        

        setProductDetails([
            ...productDetails,
            {   
                productId:prodId,
                sellingPrice:sellingPrice,
                productName:productName,
            },
            
        ])
        setTotalValue(totalValue+ +sellingPrice)
        // console.log(productDetails);
        // setProdId(null);
        // setProductDetails(null);
        // setSellingPrice(null)
    } 

    const deleteHandle = (id,sellingPrice)=>{
        setTotalValue(totalValue - sellingPrice);
        const newProducts = productDetails.filter((prod)=>prod.productId != id);
        setProductDetails(newProducts)

        // console.log('total value: '+totalValue)
        // console.log('selling price: '+sellingPrice)

        
       
    }

    return (
       <div className="bg-blue-800">
        <form className="p-12 bg-black text-black " onSubmit={submitHandler} >
            <label className="mx-4 text-white">Product Id:</label>
            <input className="mx-4 py-4" type="text" name="prodIdR" ref={prodIdRef} onChange={prodIdHandler}/>
            <label className="mx-4 text-white">selling Price:</label>
            <input className="mx-4 py-4" type="text" name="sellingPrice" ref={sellingPriceRef} onChange={sellingPriceHandler}/>
            <label className="mx-4 text-white">Product Name:</label>
            <input className="mx-4 py-4 " type="text" name="prodName" ref={productNameRef} onChange={productNameHandler}/>
            <button className="mx-4 px-4 rounded-lg py-4 bg-blue-700" type="submit">Submit</button>
        </form>

        <h1 className="my-4 mx-10 text-2xl text-pink-600 font-bold">Products</h1>

        {productDetails.map((prod=> prod.productId && <div key={prod.productId} className="my-4 mx-10 text-xl text-yellow-300"> <DisplayProduct productId={prod.productId} sellingPrice={ prod.sellingPrice } productName={prod.productName}/> 
            <button className="bg-pink-600 rounded-lg px-4"  id={prod.productId} onClick={()=>deleteHandle(prod.productId,prod.sellingPrice)}>delete</button>
            </div> ))}
         {/* {productDetails.map((prod)=>prod.productId && <div> {prod.productId +' - '+ prod.sellingPrice +' - '+ prod.productName} <button id={prod.productId} onClick={()=>deleteHandle(prod.productId)}>delete</button> </div> ) } */}

        <h1 className="py-4 mx-10  text-2xl text-yellow-600 font-bold">Total value of the products: {totalValue}</h1>
        

        </div>
    )
}

export default Home;

// prodId && productName && sellingPrice && 