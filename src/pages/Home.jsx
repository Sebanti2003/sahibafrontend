import React, { useEffect } from 'react'
// import Discountcontinuous from './Discountcontinuous';
import { products } from '../data/products';
import axios from 'axios';
import Dropdown from '../components/Dropdown';
import Introduction from '../components/Introduction';
import { useAppSelector, useAppDispatch } from '../store/hook';
import { setauthenticatedornot } from '../slices/authenticateornot';
const Home = () => {
    useEffect(() => {
        const getallproducts=async()=>{
            try {
                const products = await axios.get("https://mytaylorzonebackend.onrender.com/get-product",{
                    withCredentials: true
                });
                console.log(products.data);
            } catch (error) {
                console.log(error);
            }
        }
        getallproducts();
    },[]);
    const authenticatedornot = useAppSelector((state) => state.authenticatedornot);
    const dispatch = useAppDispatch();
    console.log(authenticatedornot.auth);
    dispatch(setauthenticatedornot({
        auth: false,
        value: "",
        role: ""
    }))
    const [allproducts] = React.useState(products);
    const categories = ["All", ...new Set(allproducts.map((item) => item.category))];
    return (
        <div className='homecolor mt-1'>
            <div
                className="h-screen w-full bg-center bg-no-repeat sm:bg-cover bg-contain"
                style={{ backgroundImage: "url('/face.avif')" }}
            ></div>
            <div>
                <Introduction />
            </div>
            <div className='flex flex-col gap-3'>
                <div className='flex justify-between items-center px-5'>
                    <div className='text-2xl font-bold font-[anzonew]'>Products</div>
                    <div className='mt-2'><Dropdown categories={categories} /></div>
                </div>
                <div className='mx-5'>
                    <input placeholder='Search...' className='w-full p-2 placeholder:text-sm placeholder:font-[anzonew] border-2 border-black rounded-lg' type="text" />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 place-items-center p-5 gap-5 transition-all duration-500">

                    {products.map((item) => {
                        if (item.name == "") {
                            return;
                        }
                        return (
                            <div key={item._id} className="eachproduct rounded-lg shadow-md p-4 m-4 w-full border-2 min-h-[200px] flex flex-col items-center justify-center border-black ">
                                {item.img && <img
                                    src={item.img}
                                    alt={item.name}
                                    className="w-full h-48 object-cover mb-4 rounded-lg"
                                />}
                                <h3 className="text-xl font-bold mb-2">{item.name}</h3>
                                <p className="text-gray-700 mb-2">{item.category}</p>
                                {/* <p className="text-gray-700 mb-2">Rating: {item.rating}⭐</p> */}
                                <p className="text-gray-700 font-bold mb-4">{item.price}</p>
                                <button className="buttonhome text-white px-4 py-2 rounded-lg  transition-all duration-300">
                                    Add to Cart
                                </button>
                            </div>
                        )
                    })}


                </div>
            </div>
        </div>
    )
}

export default Home
