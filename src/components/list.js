(() => ({
  name: 'list',
  type: 'CONTENT_COMPONENT',
  allowedTypes: [],
  orientation: 'HORIZONTAL',
  jsx: (() => {
    const { GetAll, env, getProperty } = B;
    const { model, filter, property } = options;

    function devCanvas() {
      const items = Array.from(Array(10).keys());
      return (
        <ul>
          {items.map(item => (
            <li key={item}>{`Item ${item}`}</li>
          ))}
        </ul>
      );
    }

    function productionCanvas() {
      const { name } = getProperty(property);
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
                    <li key={row.id}>{row[name]}</li>
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
    };
  },
}))();
