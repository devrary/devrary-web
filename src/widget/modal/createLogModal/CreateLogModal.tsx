import React, { useCallback, useRef } from 'react';
import styles from '@/widget/modal/createLogModal/CreateLogModal.module.scss';
import classNames from 'classnames/bind';
import BaseModal from '@/components/modal/baseModal/BaseModal';
import useOnClickOutside from '@/hooks/useOnClick';
import { useDispatch } from 'react-redux';
import { CLOSE_MODAL } from '@/state/slice/modalSlice';
import CloseModalButton from '@/widget/button/closeModalButton/CloseModalButton';
import SearchBoard from '@/widget/searchBoard/SearchBoard';

const cn = classNames.bind(styles);

type Props = {
  params: string;
};

const CreateLogModal = ({ params }: Props) => {
  const data = params;
  const bodyRef = useRef<HTMLDivElement | null>(null);
  const dispatch = useDispatch();

  console.log(data);

  const closeModal = useCallback(() => {
    dispatch(CLOSE_MODAL());
  }, []);

  useOnClickOutside({
    ref: bodyRef,
    handler: () => closeModal(),
    mouseEvent: 'click',
  });

  return (
    <BaseModal type={'dark'}>
      <div className={cn('container')} ref={bodyRef}>
        <div className={cn('inner')}>
          <SearchBoard />
        </div>
        <CloseModalButton onClick={closeModal} />
      </div>
    </BaseModal>
  );
};

export default CreateLogModal;
