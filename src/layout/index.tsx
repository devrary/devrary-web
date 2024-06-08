'use client';
import React, { Fragment, ReactNode, useMemo } from 'react';
import Header from '@/layout/header/Header';
import Footer from '@/layout/footer/Footer';
import { usePathname } from 'next/navigation';
import NavBar from '@/layout/navBar/NavBar';
import SideBar from '@/layout/sideBar/SideBar';

const Layout = ({ children }: { children: ReactNode }) => {
  const pathname = usePathname();

  const showHeader = useMemo(() => {
    if (
      pathname === '/login' ||
      pathname === '/signup' ||
      pathname === '/reset'
    )
      return false;
    return true;
  }, [pathname]);

  const showFooter = useMemo(() => {
    if (
      pathname === '/login' ||
      pathname === '/signup' ||
      pathname === '/reset'
    )
      return false;
    return true;
  }, [pathname]);

  const showNavBar = useMemo(() => {
    if (
      pathname === '/login' ||
      pathname === '/signup' ||
      pathname === '/reset'
    )
      return false;
    return true;
  }, [pathname]);

  const showSideBar = useMemo(() => {
    if (
      pathname === '/login' ||
      pathname === '/signup' ||
      pathname === '/reset'
    )
      return false;
    return true;
  }, [pathname]);

  return (
    <Fragment>
      {showHeader && <Header />}
      {children}
      {showNavBar && <NavBar />}
      {showSideBar && <SideBar />}
      {showFooter && <Footer />}
    </Fragment>
  );
};

export default Layout;
