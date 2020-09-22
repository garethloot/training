(() => ({
  name: 'section',
  type: 'BODY_COMPONENT',
  allowedTypes: ['LAYOUT_COMPONENT'],
  orientation: 'HORIZONTAL',
  jsx: (() => {
    const { env } = B;
    const isEmpty = env === 'dev' && children.length === 0;
    const [show, setShow] = useState(true);

    useEffect(() => {
      B.defineFunction('Visibility', () => setShow(p => !p));
    }, []);

    return (
      <div
        className={[
          show ? classes.root : classes.hide,
          isEmpty ? classes.empty : '',
        ].join(' ')}
      >
        {isEmpty ? 'Section' : children}
      </div>
    );
  })(),
  styles: B => theme => {
    const style = new B.Styling(theme);
    return {
      root: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: ({ options: { height } }) => height || 'auto',
        backgroundColor: ({ options: { color } }) =>
          color === 'Transparent' ? 'transparent' : style.getColor(color),
      },
      empty: {
        minHeight: '4rem',
        borderWidth: '0.0625rem',
        borderColor: '#AFB5C8',
        borderStyle: 'dashed',
        backgroundColor: '#F0F1F5',
      },
      hide: {
        display: 'none',
      },
    };
  },
}))();
