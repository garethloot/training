(() => ({
  name: 'dataList',
  type: 'CONTENT_COMPONENT',
  allowedTypes: ['CONTENT_COMPONENT', 'LAYOUT_COMPONENT', 'BODY_COMPONENT'],
  orientation: 'HORIZONTAL',
  jsx: (() => {
    const { GetAll, env, ModelProvider, getProperty } = B;
    const { model, filter } = options;

    function devCanvas() {
      const items = Array.from(Array(10).keys());
      return (
        <ul>
          <li>{children}</li>
          {items.map(item => (
            <li key={item}></li>
          ))}
        </ul>
      );
    }

    function productionCanvas() {
      return (
        <GetAll modelId={model} filter={filter} skip={0} take={15}>
          {({ loading, error, data }) => {
            if (loading) {
              return <span>Loading...</span>;
            }

            if (error) {
              return <span>Something went wrong: {error.message} :(</span>;
            }

            const { totalCount, results } = data;

            return (
              <div>
                <p>There are {totalCount} records.</p>
                <ul>
                  {results.map(row => (
                    <ModelProvider key={row.id} value={row} id={model}>
                      {children}
                    </ModelProvider>
                  ))}
                </ul>
              </div>
            );
          }}
        </GetAll>
      );
    }

    return env === 'dev' ? devCanvas() : productionCanvas();
  })(),
  styles: B => {
    const { theme } = B;
    return {
      root: {
        color: '#eb4034',
      },
      placeholder: {
        height: '2rem',
      },
    };
  },
}))();
