'use client';
import React, { useCallback, useState } from 'react';
import styles from '@/app/(auth)/signup/page.module.scss';
import classNames from 'classnames/bind';
import { ISignupInfo } from '@/interface/data/auth';
import { useRouter } from 'next/navigation';

const cn = classNames.bind(styles);

const SignUpClientPage = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [signupInfo, setSignupInfo] = useState<ISignupInfo>({
    email: '',
    password: '',
    confirmPassword: '',
  });

  const userRegister = useCallback((event: { preventDefault: () => void }) => {
    event.preventDefault();
    setIsLoading(true);
  }, []);
  return <div></div>;
};

export default SignUpClientPage;
