'use client'
import React from 'react'
import styles from '@/layout/Header/header.module.scss'
import classNames from 'classnames/bind'

const cn = classNames.bind(styles)

const Header = () => {
  return (
    <header className={cn('container')}>
    </header>
  )
}

export default Header
