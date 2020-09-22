(() => ({
  name: 'meContainer',
  type: 'BODY_COMPONENT',
  allowedTypes: ['CONTENT_COMPONENT', 'LAYOUT_COMPONENT', 'BODY_COMPONENT'],
  orientation: 'HORIZONTAL',
  jsx: (() => {
    const { ModelProvider, GetMe, env } = B;
    const { authenticationProfileId } = options;
    const isDev = env === 'dev';

    return isDev ? (
      <div className={classes.root}>{children}</div>
    ) : (
      <div className={classes.root}>
        <GetMe authenticationProfileId={authenticationProfileId}>
          {({ loading, error, data }) => {
            if (loading) {
              return <span>Loading...</span>;
            }

            if (error) {
              return <span>Something went wrong: {error.message} :(</span>;
            }

            return (
              <div>
                <ModelProvider value={data}>{children}</ModelProvider>
              </div>
            );
          }}
        </GetMe>
      </div>
    );
  })(),
  styles: B => theme => {
    const style = new B.Styling(theme);
    return {
      root: {},
    };
  },
}))();
