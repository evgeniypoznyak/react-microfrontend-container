import React from 'react';
import MicroFrontendFactory from '../../hoc/MicroFrontendFactory';

const ExternalComponentOne = () => {
  return (
    <MicroFrontendFactory
      host={'http://localhost:4000'}
      name={'MyExternalApp'}
    />
  );
};
export default ExternalComponentOne;
