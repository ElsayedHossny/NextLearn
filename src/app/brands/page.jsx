import React from 'react'
import Image from 'next/image'

export default async function Brands() {



    async function fetchBrands(params) {
        try {
            let response = await fetch('https://ecommerce.routemisr.com/api/v1/brands');
            let branddata = await response.json();
            console.log(branddata);
            return branddata;
        } catch (error) {
            console.log(error);
            return error;
        }
    }


    const { data } = await fetchBrands();
    console.log(data);



    return (
        <div className="container bg-blue-100  mx-auto p-6 text-center ">
            <h1 className='font-bold text-3xl'>Brands</h1>
            <div className="mt-5 mb-7 grid md:grid-cols-4 gap-4">
                {data.map((brand) => (
                    <div key={brand._id} className="flex flex-col justify-center bg-blue-300 p-3">
                        <img
                            src={brand.image}
                            alt={brand.name}
                        />
                        <h3 className='font-bold mt-2 text-2xl'>{brand.slug}</h3>
                    </div>
                ))}
            </div>
        </div>
    )
}
