(() => ({
  name: 'redirect',
  type: 'CONTENT_COMPONENT',
  allowedTypes: [],
  orientation: 'HORIZONTAL',
  jsx: (() => {
    const { title } = options;
    const { env } = B;
    const isDev = env === 'dev';

    useEffect(() => {
      B.defineFunction('RedirectToEndpont', e => history.push(e));
    }, []);

    const InputCmp = (
      <input
        className={isDev && classes.pristine}
        type={isDev ? 'text' : 'hidden'}
        value={title}
      />
    );

    return isDev ? <div className={classes.root}>{InputCmp}</div> : InputCmp;
  })(),
  styles: B => theme => {
    const style = new B.Styling(theme);
    return {
      root: {
        '& > *': {
          pointerEvents: 'none',
        },
      },
      pristine: {
        borderWidth: '0.0625rem',
        borderColor: '#AFB5C8',
        borderStyle: 'dashed',
        backgroundColor: '#F0F1F5',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '2rem',
        width: '100%',
        fontSize: '0.75rem',
        color: '#262A3A',
        textTransform: 'uppercase',
        boxSizing: 'border-box',
        textAlign: 'center',
      },
    };
  },
}))();
