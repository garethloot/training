(() => ({
  name: 'Button',
  icon: 'ButtonIcon',
  category: 'CONTENT',
  structure: [
    {
      name: 'button',
      options: [
        {
          label: 'Text',
          key: 'text',
          value: ['Button'],
          type: 'VARIABLE',
        },
        {
          type: 'ENDPOINT',
          label: 'Endpoint',
          key: 'endpoint',
          value: '',
        },
      ],
      descendants: [],
    },
  ],
}))();
