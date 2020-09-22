(() => ({
  name: 'button',
  type: 'CONTENT_COMPONENT',
  allowedTypes: [],
  orientation: 'HORIZONTAL',
  jsx: (() => {
    const { useText, Link } = B;
    const { text, endpoint } = options;

    const handleClick = event => {
      B.triggerEvent('CustomClick', event);
    };

    if (endpoint) {
      return (
        <div>
          <Link endpoint={endpoint}>
            <button>{useText(text)}</button>
          </Link>
        </div>
      );
    }
    return (
      <button onClick={handleClick} type="button">
        {useText(text)}
      </button>
    );
  })(),
  styles: B => theme => {
    const style = new B.Styling(theme);
    return {
      root: {
        color: '#eb4034',
      },
    };
  },
}))();
