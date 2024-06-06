'use client'
import React, { Fragment, ReactNode, useMemo } from 'react'
import Header from '@/layout/header/Header'
import Footer from '@/layout/footer/Footer'
import { usePathname } from 'next/navigation'
import NavBar from '@/layout/navBar/NavBar'

const Layout = ({ children }: { children: ReactNode }) => {
  const pathname = usePathname();

  const showHeader = useMemo(() => {
    if (pathname === '/login') return false;
    return true;
  }, [pathname])


  const showFooter = useMemo(() => {
    if (pathname === '/login') return false;
    return true;
  }, [pathname])

  const showNavBar = useMemo(() => {
    if (pathname === '/login') return false;
    return true;
  }, [pathname])

  return (
    <Fragment>
      {showHeader && <Header />}
      {children}
      {showNavBar && <NavBar />}
      {showFooter && <Footer />}
    </Fragment>
  )
}

export default Layout
