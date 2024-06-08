'use client';
import React from 'react';
import styles from '@/layout/Header/Header.module.scss';
import classNames from 'classnames/bind';
import Link from 'next/link';
import Image from 'next/image';
import Logo from '@/assets/Logo.png';
import Profile from '@/assets/sample/profile.png';
import CreatePostDropdown from '@/widget/dropdown/createPostDropdown/CreatePostDropdown';

const cn = classNames.bind(styles);

const Header = () => {
  return (
    <header className={cn('container')}>
      <div className={cn('inner')}>
        <Link href={'/'}>
          <div className={cn('logo-container')}>
            <Image
              priority
              src={Logo}
              alt="Devrary"
              width={1280}
              height={1280}
              className={cn('image')}
            />
            <span className={cn('logo-text')}>DEVRARY</span>
          </div>
        </Link>
        <div className={cn('user-container')}>
          <CreatePostDropdown />
          <div className={cn('user-profile-container')}>
            <Link href={'/profile'}>
              <Image
                priority
                src={Profile}
                alt="profile"
                width={1024}
                height={1024}
                className={cn('user-profile-image')}
              />
            </Link>
            <div className={cn('user-text')}>
              <Link href={'/profile'}>
                <span className={cn('user-handle-text')}>@resister_boy</span>
              </Link>
              <span className={cn('user-name-text')}>이재훈</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
