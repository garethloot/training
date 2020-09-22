(() => ({
  name: 'actionButton',
  type: 'CONTENT_COMPONENT',
  allowedTypes: ['INPUT_VAR'],
  orientation: 'HORIZONTAL',
  jsx: (() => {
    const { useText, Action } = B;
    const { text, actionId } = options;
    const params = useParams();

    const id = Number(useText(options.queryVars));
    console.log(id);
    console.log(params);

    return (
      <div>
        <Action actionId={actionId}>
          {(callAction, { loading, error, data }) => (
            <button
              onClick={event => {
                callAction({
                  variables: { input: { id: id } },
                });
              }}
            >
              {useText(text)}
            </button>
          )}
        </Action>
      </div>
    );
  })(),
  styles: B => theme => {
    const style = new B.Styling(theme);
    return {
      root: {
        position: 'relative',
      },
    };
  },
}))();
