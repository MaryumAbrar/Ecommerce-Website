import Link from "next/link"
import NavItems from "./NavItems"
import MobNav from "./MobNav"
import SearchBar from "./SearchBar"


const Header = () => {
  return (
    <header className="w-full border-b">
        <div className="w-[92vw] mx-auto md:max-w-4xl lg:max-w-5xl xl:max-w-6xl py-3 flex items-center justify-between">
            <div className="hidden md:flex gap-20 items-center">
            <Link href={"/"} className="hidden lg:flex items-center gap-2">
                <h3 className="font-bold text-[1.8rem]">Hekto</h3>
            </Link>
            <nav className="md:flex-between hidden w-full max-w-xs">
                <NavItems/>
            </nav>
            </div>
            <div className="ml-2 md:ml-0">
                    <SearchBar />
            </div>
            <div className="md:hidden flex w-32 justify-end gap-3">        
                    <MobNav/>
            </div>
        </div>
    </header>
  )
}

export default Header