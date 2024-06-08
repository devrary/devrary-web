import React, { useCallback, useEffect, useState } from 'react'
import styles from '@/components/card/toastCard/ToastCard.module.scss'
import classNames from 'classnames/bind'
import XIcon from '@/assets/icons/x.svg'
import { useDispatch, useSelector } from 'react-redux'
import { CLOSE_TOAST, getToast } from '@/state/slice/toastSlice'

const cn = classNames.bind(styles)

type Props = {
  text: string;
  direction: 'top' | 'right' | 'bottom';
}

const ToastCard = ({ text, direction }: Props) => {
  const toastInfo = useSelector(getToast)
  const [hide, setHide] = useState<boolean>(false);
  const dispatch = useDispatch()

  const handleClose = useCallback(() => {
    setHide(true);
    setTimeout(() => {
      dispatch(CLOSE_TOAST());
    }, 1000);
  }, []);


  useEffect(() => {
    if (toastInfo.autoClose && toastInfo.toast) {
      setTimeout(() => {
        handleClose()
      }, toastInfo.autoClose.duration)
    }
  }, [toastInfo])
  
  return (
    <section className={cn('container', `container-${direction}`, hide && `container-${direction}-hide`)}>
      <div className={cn('text-inner')}>
        <span className={cn('text')}>{text}</span>
      </div>
      <button className={cn('button-container')} onClick={() => handleClose()}>
        <XIcon viewBox="0 0 16 16" className={cn('svg-icon')} />
      </button>
    </section>
  )
}

export default ToastCard
