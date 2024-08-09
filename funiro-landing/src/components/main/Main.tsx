import Image from 'next/image';

import React from 'react'
import ReactDOM from 'react-dom/client'
import EmblaCarousel from '../shared/carousel/Carousel'
import { EmblaOptionsType } from 'embla-carousel'
import "../shared/carousel/carousel.css";
import "./main.css"


const OPTIONS: EmblaOptionsType = { dragFree: true, loop: true, align: "center" }
const SLIDE_COUNT = 4
const SLIDES = Array.from(Array(SLIDE_COUNT).keys())
const SLIDESOPTIONS = [
    "slide1.jpg",
    "slide2.png",
    "slide3.png"
]


export default function Main() {
  return (
    <section className='bg-primary2 min-h-screen w-full flex flex-row overflow-x-hidden'>
        <div className='h-screen w-2/3 bg-primary1'></div>
        <div className='absolute top-[662px] md:top-[362px] lg:top-[262px] w-full bg-transparent'>
        <EmblaCarousel slides={SLIDES} options={OPTIONS}/>
        </div>
        {/* <div className='h-screen bg-primary'></div> */}
    </section>
        /* <Image
            priority
            src={Search}
            height={20}
            width={20}
            alt="Logo"
        />   */
  );
}