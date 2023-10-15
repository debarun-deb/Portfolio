import React from 'react';
import { HashLoader } from 'react-spinners';
import './Loader.scss';

const Loader = ({ loading }) => {
  return (
    <div className={`loader ${loading ? 'visible' : 'hidden'}`}>
      <HashLoader color={'#00adb5'} loading={loading} size={100} />
    </div>
  );
};

export default Loader;
 