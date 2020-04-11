import React, { useEffect, useState } from 'react';
import {
  attachScript,
  mountMicroFrontend,
  unmountMicroFrontend,
} from './MicroFrontendFactory.helpers';

const MicroFrontendFactory = ({ name, host, config, onError }) => {
  const [loadingError, setLoadingError] = useState('');
  useEffect(() => {
    const scriptId = `micro-frontend-${name}`;
    const handleRender = () => mountMicroFrontend(name, config);
    const handleError = err => {
      setLoadingError('OnError: Something went wrong');
    };
    document.getElementById(scriptId)
      ? handleRender()
      : attachScript(scriptId, host, handleRender, handleError);
    return () => unmountMicroFrontend(name);
  }, [name, host, config, onError]);
  return <main id={`${name}-container`}>{loadingError}</main>;
};
export default MicroFrontendFactory;
