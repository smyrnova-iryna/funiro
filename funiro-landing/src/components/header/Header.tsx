import Link from 'next/link';
import Image from 'next/image';
import Logo from "../../../public/icons/Logo.svg";
import DetailedLink from "./shared/DetailedLink";
import SearchBar from "./shared/SearchBar";
import Heart from "../../../public/icons/Heart.svg";
import Cart from "../../../public/icons/Cart.svg";
import Avatar from "../../../public/images/avatar.png"


export default function Header() {
  return (
    <header className="absolute top-0 left-0 bg-transparent w-screen h-[500px] flex flex-col-reverse items-center justify-between font-medium text-gray1
     py-10 px-7 gap-8 md:h-[200px] lg:h-[100px] lg:flex-row lg:gap-auto xl:px-[100px]">
        <nav className='flex flex-col gap-10 w-full md:flex-row lg:w-max'>
            <Image
                priority
                src={Logo}
                height={29}
                width={74}
                alt="Logo"
            /> 
            <DetailedLink title='Products'/>
            <DetailedLink title='Rooms'/>
            <Link className='flex items-center' href="/inspirations">Inspirations</Link>
            <SearchBar/>
        </nav>
        <div className='flex flex-row gap-8 justify-end w-full lg:w-max'>
            <Image
                priority
                src={Heart}
                height={24}
                width={24}
                alt="Heart icon"
            /> 
            <Image
                priority
                src={Cart}
                height={24}
                width={24}
                alt="Cart icon"
            />
            <Image
                priority
                src={Avatar}
                height={40}
                width={40}
                alt="Cart icon"
            />  
        </div>
    </header>
  );
}
