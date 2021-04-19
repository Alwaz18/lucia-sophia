import Link from 'next/link';
import { useState, useCallback, useEffect } from 'react';
import { BiMenuAltRight } from 'react-icons/bi'
import ActiveLink from "./common/ActiveLink";

const useMediaQuery = (width) => {
    const [targetReached, setTargetReached] = useState(false);

    const updateTarget = useCallback((e) => {
        if (e.matches) {
            setTargetReached(true);
        } else {
            setTargetReached(false);
        }
    }, []);

    useEffect(() => {
        const media = window.matchMedia(`(max-width: ${width}px)`)
        media.addEventListener('change', e => updateTarget(e))

        // Check on mount (callback is not called until a change occurs)
        if (media.matches) {
            setTargetReached(true)
        }

        return () => media.removeEventListener('change', e => updateTarget(e))
    }, [])

    return targetReached;
};


const Navbar = () => {
    let listener = null
    const [scrollState, setScrollState] = useState(false)

    useEffect(() => {
        listener = document.addEventListener("scroll", e => {
            var scrolled = document.scrollingElement.scrollTop
            if (scrolled >= 80) {
                setScrollState(true)
            }
            if (scrolled < 80) {
                setScrollState(false)
            }
        })
        return () => {
            document.removeEventListener("scroll", listener)
        }
    }, [scrollState])
    const [showMenu, setShowMenu] = useState(false)
    function toggleMenu() {
        setShowMenu(!showMenu)
    }

    const menu = <ul onClick={toggleMenu}
        className="w-full min-h-screen center flex-col absolute z-30 mainbg  bg-opacity-40 shadow-xl right-0 top-0 cursor-pointer py-4">
        <div className="custom-montserrat font-extrabold text-3xl text-yellow-600 cursor-pointer mb-4 border-b-2 border-yellow-500 w-full text-center py-2">
            LuciaSophia.
    </div>
        <li className="py-6 px-2 sm:text-lg text-base"
            onClick={toggleMenu}>
            <ActiveLink href={"/"}>Home</ActiveLink>
        </li>
        <li className="py-6 px-2 sm:text-lg text-base"
            onClick={toggleMenu}>
            <ActiveLink href={"/products"}>Products</ActiveLink>
        </li>
        <li className="py-6 px-2 sm:text-lg text-base"
            onClick={toggleMenu}>
            <ActiveLink href={"/testimonials"}>What They Say ?</ActiveLink>

        </li>
        <li className="py-6 px-2 sm:text-lg text-base"
            onClick={toggleMenu}>
            <ActiveLink href={"/#about"}>About us</ActiveLink>

        </li>
        <li className="py-6 px-2 sm:text-lg text-base"
            onClick={toggleMenu}>
            <ActiveLink href={"/#footer"}>Contact us</ActiveLink>

        </li>
    </ul>

    const isBreakpoint = useMediaQuery(768)
    let bg = scrollState ? 'mainbg shadow-xl fixed' : '  absolute '
    return (
        <>
            { isBreakpoint ? (

                <nav className={`${bg}  flex w-full justify-between items-center py-4 h-16 z-20 px-4`}>
                    <Link href="/">
                        <div className="custom-montserrat font-extrabold  text-yellow-600 text-2xl cursor-pointer">
                            LuciaSophia
                <span className=" text-yellow-600 animate-pulse">.</span>
                        </div>
                    </Link>
                    <div><BiMenuAltRight size={30}
                        onClick={toggleMenu}
                        className="text-gray-700 rounded-full"
                    />
                    </div>
                    {showMenu && menu}
                </nav>

            ) : (

                <nav
                    className={`${bg} sm:flex justify-between items-center py-4 px-4 lg:px-8 h-14 
                  w-full overflow-hidden fixed z-20`}
                >
                    <Link href="/">
                        <div
                            className="custom-montserrat font-extrabold text-3xl 
          text-yellow-600  cursor-pointer"
                        >
                            LuciaSophia
                  <span className=" text-yellow-600 animate-pulse">.</span>
                        </div>
                    </Link>
                    <div className="flex items-center justify-start lg:w-1/2 md:w-2/3">
                        <ul className="flex w-full items-center justify-around  cursor-pointer">
                            <ActiveLink href={"/"}>Home</ActiveLink>
                            <ActiveLink href={"/products"}>Products</ActiveLink>
                            <ActiveLink href={"/testimonials"}>What They Say ?</ActiveLink>
                            <ActiveLink href={"/#about"}>About us</ActiveLink>

                            <Link href={"/#footer"}><span className="py-1 px-2  border-yellow-600 border hover:bg-yellow-600 hover:text-gray-200
        transition-all  duration-500 ease-in-out rounded-xl text-yellow-500 custom-roboto font-medium text-base hover:opacity-80">Contact us</span></Link>


                        </ul>
                    </div>
                </nav>

            )}
        </>
    )
}

export default Navbar;
