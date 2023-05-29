import React from 'react';

/* Components */
import ErrorWarning from '../ErrorWarning';
import LoadingCard from '../LoadingCard';

/* Utilities */
import { APIRequest } from '../../apis/colav';
import { useLocation } from 'react-router-dom';

const EntrepreneurshipTab = () => {
  const location = useLocation();
  const [state] = APIRequest(
    `${location.pathname}${location.search}&data=entrepreneurship`
  );

  if (state.isError) {
    return <ErrorWarning />;
  }
  if (state.isLoading) {
    return <LoadingCard />;
  }
  return <div>EntrepreneurshipTab</div>;
};

export default EntrepreneurshipTab;
