(() => ({
  name: 'history',
  type: 'CONTENT_COMPONENT',
  allowedTypes: [],
  orientation: 'HORIZONTAL',
  jsx: (() => {
    const { env, useEndpoint } = B;
    const { text, type, endpoint } = options;
    const history = env === 'prod' && useHistory();

    function go() {
      if (type === 'prev') {
        history.goBack();
      } else if (type === 'next') {
        history.goForward();
      } else {
        history.push(useEndpoint(endpoint));
      }
    }

    function button() {
      return (
        <div className={classes.root}>
          <button onClick={go} type="button">
            {text}
          </button>
        </div>
      );
    }

    return button();
  })(),
  styles: B => {
    const { theme } = B;
    return {
      root: {
        color: '#eb4034',
      },
    };
  },
}))();
