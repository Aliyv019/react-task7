import React from 'react'
import Card from '../components/Card'

export default function Home() {
    const products=[
        {
            name:"iphone 12",
            price:500,
            img:"https://www.gurgencler.com.tr/media/catalog/product/6/f/6f2bd85a0c32a84aee5c179034e5fd6157ff0a22de4f444e79724bb92070c698.jpeg"
        },
        {
            name:"iphone 13",
            price:600,
            img:"https://www.gurgencler.com.tr/media/catalog/product/6/f/6f2bd85a0c32a84aee5c179034e5fd6157ff0a22de4f444e79724bb92070c698.jpeg"
        },
        {
            name:"iphone 99",
            price:1000,
            img:"https://www.gurgencler.com.tr/media/catalog/product/6/f/6f2bd85a0c32a84aee5c179034e5fd6157ff0a22de4f444e79724bb92070c698.jpeg"
        },
        {
            name:"iphone X",
            price:250,
            img:"https://www.gurgencler.com.tr/media/catalog/product/6/f/6f2bd85a0c32a84aee5c179034e5fd6157ff0a22de4f444e79724bb92070c698.jpeg"
        },
        {
            name:"iphone 78",
            price:400,
            img:"https://www.gurgencler.com.tr/media/catalog/product/6/f/6f2bd85a0c32a84aee5c179034e5fd6157ff0a22de4f444e79724bb92070c698.jpeg"
        },
        {
            name:"iphone 11",
            price:900,
            img:"https://www.gurgencler.com.tr/media/catalog/product/6/f/6f2bd85a0c32a84aee5c179034e5fd6157ff0a22de4f444e79724bb92070c698.jpeg"
        },
        {
            name:"iphone 50",
            price:700,
            img:"https://www.gurgencler.com.tr/media/catalog/product/6/f/6f2bd85a0c32a84aee5c179034e5fd6157ff0a22de4f444e79724bb92070c698.jpeg"
        },
        {
            name:"iphone 7",
            price:655,
            img:"https://www.gurgencler.com.tr/media/catalog/product/6/f/6f2bd85a0c32a84aee5c179034e5fd6157ff0a22de4f444e79724bb92070c698.jpeg"
        },
        {
            name:"iphone 7",
            price:655,
            img:"https://www.gurgencler.com.tr/media/catalog/product/6/f/6f2bd85a0c32a84aee5c179034e5fd6157ff0a22de4f444e79724bb92070c698.jpeg"
        },
        {
            name:"iphone 7",
            price:655,
            img:"https://www.gurgencler.com.tr/media/catalog/product/6/f/6f2bd85a0c32a84aee5c179034e5fd6157ff0a22de4f444e79724bb92070c698.jpeg"
        },
        {
            name:"iphone 7",
            price:655,
            img:"https://www.gurgencler.com.tr/media/catalog/product/6/f/6f2bd85a0c32a84aee5c179034e5fd6157ff0a22de4f444e79724bb92070c698.jpeg"
        },
        {
            name:"iphone 7",
            price:655,
            img:"https://www.gurgencler.com.tr/media/catalog/product/6/f/6f2bd85a0c32a84aee5c179034e5fd6157ff0a22de4f444e79724bb92070c698.jpeg"
        },
        {
            name:"iphone 7",
            price:655,
            img:"https://www.gurgencler.com.tr/media/catalog/product/6/f/6f2bd85a0c32a84aee5c179034e5fd6157ff0a22de4f444e79724bb92070c698.jpeg"
        },
        {
            name:"iphone 7",
            price:655,
            img:"https://www.gurgencler.com.tr/media/catalog/product/6/f/6f2bd85a0c32a84aee5c179034e5fd6157ff0a22de4f444e79724bb92070c698.jpeg"
        },
        {
            name:"iphone 7",
            price:655,
            img:"https://www.gurgencler.com.tr/media/catalog/product/6/f/6f2bd85a0c32a84aee5c179034e5fd6157ff0a22de4f444e79724bb92070c698.jpeg"
        },
        {
            name:"iphone 7",
            price:655,
            img:"https://www.gurgencler.com.tr/media/catalog/product/6/f/6f2bd85a0c32a84aee5c179034e5fd6157ff0a22de4f444e79724bb92070c698.jpeg"
        },
        {
            name:"iphone 7",
            price:655,
            img:"https://www.gurgencler.com.tr/media/catalog/product/6/f/6f2bd85a0c32a84aee5c179034e5fd6157ff0a22de4f444e79724bb92070c698.jpeg"
        },
        {
            name:"iphone 7",
            price:655,
            img:"https://www.gurgencler.com.tr/media/catalog/product/6/f/6f2bd85a0c32a84aee5c179034e5fd6157ff0a22de4f444e79724bb92070c698.jpeg"
        }
    ]
    
  return (
    <div className=' flex flex-col items-center'>
        <ul className=' flex flex-wrap gap-10 justify-center p-2 w-3/4'>
            {products.map((item)=>{
                return <Card item={item}/>
            })}
        </ul>
    </div>
  )
}
