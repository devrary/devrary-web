'use client';
import React from 'react';
import styles from '@/app/page.module.scss';
import classNames from 'classnames/bind';
import TrendingListCard from '@/widget/card/trendingListCard/TrendingListCard';

const cn = classNames.bind(styles);

const HomeClientPage = () => {
  return (
    <section className={cn('container')}>
      <div className={cn('side-banner-container')}>
        <TrendingListCard title="트렌딩 토픽" queryParams="topic" />
        <TrendingListCard title="트렌딩 도서" queryParams="book" />
        <TrendingListCard title="트렌딩 레포지토리" queryParams="repository" />
        <TrendingListCard title="트렌딩 포스트" queryParams="post" />
        <TrendingListCard title="트렌딩 유저" queryParams="user" />
      </div>
    </section>
  );
};

export default HomeClientPage;
