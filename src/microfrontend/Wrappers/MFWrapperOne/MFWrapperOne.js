import React from 'react';
import MFFactory from 'microfrontend/Factory';

export const MFWrapperOne = () => {
  return (
    <MFFactory
      host={process.env.REACT_APP_EXTERNAL_APP_1_HOST}
      name={process.env.REACT_APP_EXTERNAL_APP_1_NAME}
    />
  );
};
