import React from 'react';
// import ReactDOM from 'react-dom/client';
import EmblaCarousel from '../shared/carousel/Carousel';
import { EmblaOptionsType } from 'embla-carousel';
import Link from 'next/link';
import Image from 'next/image';
import "../shared/carousel/carousel.css";
import OfferInfo from '../shared/offer/OfferInfo';
import "./main.css";
import ArrowRight from "../../../public/icons/Arrow-right.svg"


const OPTIONS: EmblaOptionsType = { dragFree: true, loop: true, align: "center" }
const SLIDE_COUNT = 4
const SLIDES = Array.from(Array(SLIDE_COUNT).keys())
const slidesData = [
    "slide1.png",
    "slide2.png",
    "slide3.png",
    "slide4.png"
]



export default function Main() {
  return (
    <section className='w-full flex flex-row overflow-x-hidden min-h-screen bg-primary2'>
        <div className='h-screen w-2/3 bg-primary1 h-full'></div>
        <div className='absolute top-[562px] md:top-[362px] lg:top-[262px] w-full bg-transparent'>
              <EmblaCarousel slides={SLIDES} options={OPTIONS} slidesData={slidesData} />
            <Link href="/" className="absolute top-[40%] max-[768px]:left-1/2 max-[768px]:transform max-[768px]:-translate-x-1/2 
            max-[768px]:-translate-y-1/2 p-6 w-[294px] bg-opacityBlock flex flex-row justify-between items-end md:right-[140px] 
            md:bottom-[40px] md:top-auto">
              <OfferInfo  title='Bohauss' description='Luxury big sofa 2-seat' rp='Rp 17.000.000'/>
              <Image
                priority
                src={ArrowRight}
                height={24}
                width={24}
                alt="Arrow right"
            />
            </Link>
        </div>

    </section>
  );
}