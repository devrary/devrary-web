'use client';
import React, { Fragment, ReactNode, useEffect } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Layout from '@/layout';
import { useSelector } from 'react-redux';
import { getModalState } from '@/state/slice/modalSlice';
import CreateLogModal from '@/widget/modal/createLogModal/CreateLogModal';

const queryClient = new QueryClient();

const BaseProvider = ({ children }: { children: ReactNode }) => {
  const modal = useSelector(getModalState);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', 'light');
  }, []);

  console.log(modal);

  return (
    <Fragment>
      <QueryClientProvider client={queryClient}>
        <Layout>{children}</Layout>
        {modal.name === 'CreateLogModal' && modal.data && (
          <CreateLogModal params={''} />
        )}
      </QueryClientProvider>
    </Fragment>
  );
};

export default BaseProvider;
