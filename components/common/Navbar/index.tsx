'use client';

import React from 'react';
import Link from 'next/link';
import { useEffect } from 'react';
import BrunLogo from '../BrunLogo';
import SideNavbar from './SideNav';
import { RootState } from '@libs/store';
import { useDispatch, useSelector } from 'react-redux';
import { usePathname, useRouter } from 'next/navigation';
import { setCartPageActiveTab } from '@libs/features/cart/cartSlice';
import { setIsHomepageRoute, setIsSidebarOpen } from '@libs/features/homepage/homepageSlice';

const Navbar = () => {

  const router = useRouter();
  const path = usePathname();
  const dispatch = useDispatch();
  const { isSidebarOpen } = useSelector((state: RootState) => state.homepage);

  const toggleSideNavbar = () => {
    dispatch(setIsSidebarOpen(!isSidebarOpen));
  };

  const toogleSearchBar = () => {
    router.push('/search');
  }

  const handleRouteToCart = (tab: 1 | 2) => {
    dispatch(setCartPageActiveTab(tab));
    router.push('/account/cart');
  }

  useEffect(() => {
    dispatch(setIsHomepageRoute(path === '/'))
  }, [path, dispatch]);

  const isProductListing = path === '/products';

  return (
    <header className="navbar flex flex-col justify-stretch w-full fixed top-0 transition-all duration-500 z-10 bg-transparent backdrop-blur-[2px]">
      <div className="navbar__container flex items-center md:items-start justify-between pt-3 md:pt-7 px-6 bg-gradient-to-b from-[#00000094] via-[#00000024] to-transparent">
        <Link href="/" className="navbar__logo__container ">
          <BrunLogo isWhiteLogo={false} />
        </Link>
        <nav className={`navbar__links__primary hidden md:flex gap-14 text-base font-urbanist ${isProductListing && 'hidden md:hidden'}`}>
          <Link href="/products">TOPS</Link>
          <Link href="/products">BOTTOM</Link>
          <Link href="/about"> ABOUT</Link>
        </nav>
        <div className="navbar__links__secondary  hidden md:flex items-center gap-16">
          <span className="material-symbols-rounded cursor-pointer" onClick={toogleSearchBar}>
            search
          </span>
          <Link href='/account'>
            <span className="material-symbols-rounded cursor-pointer">
              person
            </span>
          </Link>
          <span className="material-symbols-rounded cursor-pointer" onClick={() => handleRouteToCart(2)}>
            favorite
          </span>
          <span className="material-symbols-rounded cursor-pointer" onClick={() => handleRouteToCart(1)}>
            shopping_bag
          </span>
        </div>
        <div className="flex gap-3 items-center md:hidden">
          <span className="material-symbols-rounded text-3xl cursor-pointer" onClick={toogleSearchBar}>
            search
          </span>
          <span className="material-symbols-rounded text-3xl cursor-pointer" onClick={toggleSideNavbar}>
            menu
          </span>
        </div>
      </div>
      <SideNavbar isOpen={isSidebarOpen} onClose={toggleSideNavbar} />
    </header>
  );
};

export default Navbar;
