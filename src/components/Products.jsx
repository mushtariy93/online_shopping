import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Skeleton from './Skeleton'
import Stars from './Stars';
import Modal from './Modal';
import ImageView from './ImageView';

const API_URL = "https://dummyjson.com"

// fetch -> axios
const Products = () => {
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(false)
    const [modalData, setModalData] = useState(null)
    console.log(modalData);
    
    useEffect(()=>{
        try{
            setLoading(true)
            axios
                .get(`${API_URL}/products`)
                .then(res => {
                    setData(res.data.products)
                })
                .catch(err => console.log(err))
                .finally(()=>{
                    setLoading(false)
                })
        }catch(error){
            console.error(error);
        }
    }, [])

    const productItems = data?.map((pro)=> (
        <div className='p-3 shadow-lg dark:bg-slate-800' key={pro.id}>
            <img onClick={()=> setModalData(pro)} className='w-full h-60 object-contain' src={pro.thumbnail} alt="" />
            <h3>{pro.title}</h3>
            <div className='flex items-center gap-1'>
                <div className='flex '>
                    <Stars rating={pro.rating}/> 
                </div>
                {pro.rating}
            </div>
        </div>
    ))

  return (
    <div  className='dark:bg-slate-800 dark:text-white' >
      {loading && <Skeleton count={12} />}
      <div className="container grid grid-cols-4 gap-3">{productItems}</div>

      {modalData && (
        <Modal close={() => setModalData(null)}>
          <ImageView data={modalData} />
        </Modal>
      )}
    </div>
  );
}

export default Products



