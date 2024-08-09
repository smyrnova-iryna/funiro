import Link from 'next/link';
import Image from 'next/image';
import ArrowDown from "../../../../public/icons/Arrow-down.svg";


export default function Header(props: {title: string}) {
  return (
    <Link href="/products" className='flex flex-row gap-2 items-center'>
    {props.title}
        <Image
            priority
            src={ArrowDown}
            height={20}
            width={20}
            alt="Logo"
        />  
    </Link>
  );
}
