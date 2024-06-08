import React from 'react';

type Props = {
  params: {
    id: string;
  };
};

const BookDetailPage = ({ params }: Props) => {
  const { id } = params;

  return <div>{id}</div>;
};

export default BookDetailPage;
