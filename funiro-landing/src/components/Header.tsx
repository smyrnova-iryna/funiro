import Link from 'next/link'

export default function Header() {
  return (
    <header className="absolute top-0 left-0 bg-transparent bg-slate-200 w-screen h-24 flex flex-row">
        <p>Header</p>
        <Link href="/products">Products</Link>
        <Link href="/rooms">Rooms</Link>
        <Link href="/inspirations">Inspirations</Link>        
    </header>
  );
}
