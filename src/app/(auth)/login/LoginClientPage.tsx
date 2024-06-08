'use client';
import React, { Fragment, useCallback, useState } from 'react';
import styles from '@/app/(auth)/login/page.module.scss';
import classNames from 'classnames/bind';
import { ILoginInfo } from '@/interface/data/auth';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Logo from '@/assets/Logo.png';
import Spinner from '@/components/loader/spinner/Spinner';
import { COLOR } from '@/styles/COLOR';
import BaseInput from '@/components/input/baseInput/BaseInput';
import { CiMail } from 'react-icons/ci';
import { CiLock } from 'react-icons/ci';
import BaseButton from '@/components/button/baseButton/BaseButton';
import AutoSignInCheckbox from '@/widget/checkbox/autoSignInCheckbox/AutoSignInCheckbox';
import { AUTO_SIGNIN_MESSAGE } from '@/constants/strings';
import BaseDivider from '@/components/divider/baseDivider/BaseDivider';
import TextButton from '@/components/button/textButton/TextButton';
import ArrowRightIcon from '@/assets/icons/arrow-right.svg'

const cn = classNames.bind(styles);

const LoginClientPage = () => {
  const router = useRouter();
  const [loginInfo, setLoginInfo] = useState<ILoginInfo>({
    email: '',
    password: '',
  });
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [autoLogin, setAutoLogin] = useState<boolean>(false);

  const redirectUser = useCallback(() => {
    router.push('/');
  }, []);

  const userLogin = useCallback((event: { preventDefault: () => void }) => {
    event.preventDefault();
    setIsLoading(true);
  }, []);

  return (
    <Fragment>
      {isLoading && (
        <Spinner type={'basic'} strokeColor={COLOR.PRIMARY} width="40" />
      )}
      <section className={cn('container')}>
        <div className={cn('logo-container')}>
          <h1>
            <Image
              src={Logo}
              alt="Devrary"
              width={1280}
              height={1280}
              priority
              className={cn('logo')}
            />
          </h1>
          <h3 className={cn('logo-text')}>DEVRARY</h3>
        </div>
        <form onSubmit={userLogin} className={cn('form-container')}>
          <div className={cn('input-container')}>
            <BaseInput
              id="email"
              type="email"
              label="이메일"
              labelVisible={true}
              placeholder="이메일을 입력해주세요"
              value={loginInfo.email}
              onChange={(event) =>
                setLoginInfo({ ...loginInfo, email: event.target.value })
              }
            >
              <CiMail size={22} color="grey" />
            </BaseInput>
          </div>
          <div className={cn('input-container')}>
            <BaseInput
              id="password"
              type="password"
              label="비밀번호"
              labelVisible={true}
              placeholder="비밀번호를 입력해주세요"
              value={loginInfo.password}
              onChange={(event) =>
                setLoginInfo({ ...loginInfo, password: event.target.value })
              }
            >
              <CiLock size={22} color="grey" />
            </BaseInput>
          </div>
          <div className={cn('inline-container')}>
            <AutoSignInCheckbox
              checked={autoLogin}
              onChange={() => setAutoLogin(!autoLogin)}
              label="자동 로그인"
              message={AUTO_SIGNIN_MESSAGE}
              disabled={false}
              orientation={'top'}
            />
            <TextButton
              name='비밀번호 수정'
              onClick={() => router.push('/reset')}
            >
              <ArrowRightIcon viewBox="0 0 1024 1024" className={cn('icon')} />
            </TextButton>
          </div>
          <div className={cn('button-container')}>
            <BaseButton name="로그인" type={'fill'} onClick={() => {}} />
            <BaseDivider />
            <BaseButton name="회원가입" type={'outline'} onClick={() => router.push('/signup')} />
            <BaseDivider />
          </div>
        </form>
      </section>
    </Fragment>
  );
};

export default LoginClientPage;
