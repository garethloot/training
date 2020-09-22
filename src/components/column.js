(() => ({
  name: 'column',
  type: 'LAYOUT_COMPONENT',
  allowedTypes: [
    'BODY_COMPONENT',
    'CONTAINER_COMPONENT',
    'CONTENT_COMPONENT',
  ],
  orientation: 'VERTICAL',
  jsx: (() => {
    const { env } = B;
    const isEmpty = env === 'dev' && children.length === 0;
    return (
      <div className={[classes.root, isEmpty ? classes.empty : ''].join(' ')}>
        {isEmpty ? 'Column' : children}
      </div>
    );
  })(),
  styles: B => theme => {
    const style = new B.Styling(theme);
    return {
      root: {
        display: 'flex',
        flexDirection: 'column',
        width: '992px',
        height: '100%',
        alignItems: ({ options: { alignHorizontal } }) => alignHorizontal,
        justifyContent: ({ options: { alignVertical } }) => alignVertical,
      },
      empty: {
        minHeight: '4rem',
        alignItems: 'center !important',
        justifyContent: 'center !important',
        borderWidth: '0.0625rem',
        borderColor: '#AFB5C8',
        borderStyle: 'dashed',
        backgroundColor: '#F0F1F5',
      },
    };
  },
}))();
