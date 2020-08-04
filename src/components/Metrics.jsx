import React from 'react';
import { useSelector } from 'react-redux';

export default () => {
  const online = useSelector(({ metrics: { online }}) => (online));
  return (
    <div>
      {online ? 'Online' : 'Offline'}
    </div>
  )
}
