import React from 'react'
import styles from '@/widget/modal/createLogModal/CreateLogModal.module.scss'
import classNames from 'classnames/bind'
import BaseModal from '@/components/modal/baseModal/BaseModal'

const cn = classNames.bind(styles)

type Props = {
  params: string;
}

const CreateLogModal = ({ params }: Props) => {
  const data = params;
  console.log(data)
  return (
    <BaseModal type={'dark'}>
      <div></div>
    </BaseModal>
  )
}

export default CreateLogModal
