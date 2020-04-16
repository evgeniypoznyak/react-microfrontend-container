export const attachScript = (id, host, onLoad, onError, async = true) => {
  const script = document.createElement('script');
  script.type = 'text/javascript';
  script.crossOrigin = '';
  script.id = id;
  script.async = async;
  script.src = `${host}/bundle.js`;
  script.onload = onLoad;
  script.onerror = onError;
  document.head.appendChild(script);
};

export const mountMicroFrontend = (name, config) => {
  const renderHandler = window[`render${name}`];
  renderHandler
    ? renderHandler(`${name}-container`, config)
    : console.error(` render ${name} handler does not exist!`);
};

export const unmountMicroFrontend = name => {
  console.log('poop');
  const unmountHandler = window[`unmount${name}`];
  unmountHandler
    ? unmountHandler(`${name}-container`)
    : console.error(` render ${name} handler does not exist!`);
};
