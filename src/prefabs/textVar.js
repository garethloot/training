(() => ({
  name: 'Text Var',
  icon: 'ParagraphIcon',
  category: 'CONTENT',
  structure: [
    {
      name: 'textVar',
      options: [
        {
          label: 'Text Content',
          key: 'text',
          value: ['Hello World'],
          type: 'VARIABLE',
        },
        {
          label: 'Type',
          key: 'type',
          value: 'Body1',
          type: 'FONT',
        },
      ],
      descendants: [],
    },
  ],
}))();
