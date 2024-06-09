import React, { ChangeEvent, useCallback, useState } from 'react'
import styles from '@/widget/searchBoard/SearchBoard.module.scss'
import classNames from 'classnames/bind'
import SearchInput from '@/components/input/searchInput/SearchInput'
import { SEARCH } from '@/constants/strings'
import SelectedBookCard from '@/components/card/selectedBookCard/SelectedBookCard'
import { HiHashtag } from "react-icons/hi";
import { COLOR } from '@/styles/COLOR'

const cn = classNames.bind(styles)

const SearchBoard = () => {
  const [search, setSearch] = useState<string>('');
  
  const handleSearch = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value)
  }, [])
  
  return (
    <div className={cn('container')}>
      <div className={cn('title-container')}>
        <span className={cn('title')}>새 로그 작성하기</span>
      </div>
      <div className={cn('bullet-container')}>
        <div className={cn('bullet-text')}>
          <div className={cn('icon')}>
            <HiHashtag color={COLOR.PRIMARY} />
          </div>
          참조할 도서 선택
        </div>
      </div>
      <div className={cn('search-container')}>
        <SearchInput
          value={search}
          onChange={handleSearch}
          recommend
          placeholder={SEARCH.PLACEHOLDER}
        />
        <div className={cn('book-container')}>
          <SelectedBookCard />
        </div>
      </div>
      <div className={cn('bullet-container')}>
        <div className={cn('bullet-text')}>
          <div className={cn('icon')}>
            <HiHashtag color={COLOR.PRIMARY} />
          </div>
          카테고리 선택
        </div>
      </div>
      <div className={cn('bullet-container')}>
        <div className={cn('bullet-text')}>
          <div className={cn('icon')}>
            <HiHashtag color={COLOR.PRIMARY} />
          </div>
          태그 선택
        </div>
      </div>
    </div>
  )
}

export default SearchBoard
