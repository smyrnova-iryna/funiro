import Image from 'next/image';
import Search from "../../../../public/icons/Search.svg"

export default function SearchBar() {
  return (
    <div className='flex flex-row items-center w-full xl:w-[33vw] h-[45px] bg-white text-sm p-3 gap-3 '>
        <Image
            priority
            src={Search}
            height={20}
            width={20}
            alt="Logo"
        />  
        <input className='w-full focus:outline-none' placeholder='Search for minimalist chair'>
             
        </input>
    </div>
  );
}