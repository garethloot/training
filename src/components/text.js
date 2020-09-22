(() => ({
  name: 'text',
  type: 'BODY_COMPONENT',
  // change to 'CONTENT_COMPONENT' later
  allowedTypes: [],
  orientation: 'HORIZONTAL',
  jsx: (() => {
    const { text, type } = options;

    const Tag = {
      Title1: 'h1',
      Title2: 'h2',
      Title3: 'h3',
      Title4: 'h4',
      Title5: 'h5',
      Title6: 'h6',
      Body1: 'p',
      Body2: 'p',
    }[type || 'Body1'];

    return <Tag className={classes.root}>{text || 'Empty'}</Tag>;
  })(),
  styles: B => theme => {
    const style = new B.Styling(theme);
    return {
      root: {
        color: ({ options: { color } }) => color,
        fontSize: ({ options: { type } }) => style.getFontSize(type),
        fontFamily: ({ options: { type } }) => style.getFontFamily(type),
        fontWeight: ({ options: { type } }) => style.getFontWeight(type),
        textTransform: ({ options: { type } }) => style.getTextTransform(type),
        letterSpacing: ({ options: { type } }) => style.getLetterSpacing(type),
      },
    };
  },
}))();
