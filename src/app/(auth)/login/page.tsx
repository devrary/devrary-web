import React from 'react'
import styles from '@/app/(auth)/login/page.module.scss'
import classNames from 'classnames/bind'
import LoginClientPage from '@/app/(auth)/login/LoginClientPage'

const cn = classNames.bind(styles)

const LoginPage = () => {
  return (
    <main>
      <LoginClientPage />
    </main>
  )
}

export default LoginPage
