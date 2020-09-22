(() => ({
  name: 'Text',
  icon: 'ParagraphIcon',
  category: 'CONTENT',
  structure: [
    {
      name: 'text',
      options: [
        {
          label: 'Text Content',
          key: 'text',
          value: 'Hello World',
          type: 'TEXT',
        },
        {
          label: 'Color hex',
          key: 'color',
          value: '',
          type: 'TEXT',
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
