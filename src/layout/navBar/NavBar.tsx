import React, { useMemo } from 'react'
import styles from '@/layout/navBar/NavBar.module.scss'
import classNames from 'classnames/bind'
import { GoHome } from "react-icons/go";
import { GoSearch } from "react-icons/go";
import { BsCompass } from "react-icons/bs";
import { IoNotificationsOutline } from "react-icons/io5";
import { usePathname, useRouter } from 'next/navigation';

const cn = classNames.bind(styles)

const NavBar = () => {
  const pathname = usePathname();
  const router = useRouter();
  console.log(pathname)

  const homeActive = useMemo(() => {
    if (pathname === '/') return true;
    return false;
  }, [router, pathname])

  const exploreActive = useMemo(() => {
    if (pathname === '/feed') return true;
    return false;
  }, [router, pathname])

  return (
    <nav className={cn('container')}>
      <button className={cn('nav-item', homeActive && 'nav-item-active')} onClick={() => router.push('/')}>
        <GoHome size={24} />
        <span className={cn('nav-item-text')}>
          Home
        </span>
      </button>
      <button className={cn('nav-item')}>
        <GoSearch size={24} />
        <span className={cn('nav-item-text')}>
          Search
        </span>  
      </button>
      <button className={cn('nav-item', exploreActive && 'nav-item-active')} onClick={() => router.push('/feed')}>
        <BsCompass size={22} />
        <span className={cn('nav-item-text')}>
          Explore
        </span>
      </button>
      <button className={cn('nav-item')}>
        <IoNotificationsOutline size={24} />
        <span className={cn('nav-item-text')}>
          Notification
        </span>
      </button>
    </nav>
  )
}

export default NavBar