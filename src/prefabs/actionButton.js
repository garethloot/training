(() => ({
  name: 'Action Button',
  icon: 'ButtonIcon',
  category: 'CONTENT',
  structure: [
    {
      name: 'actionButton',
      options: [
        {
          label: 'Text',
          key: 'text',
          value: ['Button'],
          type: 'VARIABLE',
        },
        {
          label: 'Variable',
          key: 'variable',
          value: ['Button'],
          type: 'VARIABLE',
        },
        {
          label: 'Action',
          key: 'actionId',
          value: '',
          type: 'ACTION',
          configuration: {
            apiVersion: 'v1',
          },
        },
        {
          type: 'VARIABLE',
          label: 'Query vars',
          key: 'queryVars',
          value: [],
        },
      ],
      descendants: [],
    },
  ],
}))();
