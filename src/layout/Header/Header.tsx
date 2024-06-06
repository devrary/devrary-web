'use client'
import React from 'react'
import styles from '@/layout/Header/Header.module.scss'
import classNames from 'classnames/bind'
import Link from 'next/link'
import Image from 'next/image'
import Logo from '@/assets/Logo.png'

const cn = classNames.bind(styles)

const Header = () => {
  return (
    <header className={cn('container')}>
      <div className={cn('inner')}>
        <Link href={'/'}>
          <div className={cn('logo-container')}>
            <Image
              priority
              src={Logo}
              alt='Devrary'
              width={1280}
              height={1280}
              className={cn('image')}
            />
            <span className={cn('logo-text')}>DEVRARY</span>
          </div>
        </Link>
      </div>
    </header>
  )
}

export default Header
