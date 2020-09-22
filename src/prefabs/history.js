(() => ({
  name: 'History',
  icon: 'ButtonIcon',
  category: 'CONTENT',
  structure: [
    {
      name: 'history',
      options: [
        {
          label: 'Heading text',
          key: 'text',
          value: 'Hello World',
          type: 'TEXT',
        },
        {
          type: 'CUSTOM',
          label: 'Type',
          key: 'type',
          value: 'next',
          configuration: {
            as: 'BUTTONGROUP',
            dataType: 'string',
            allowedInput: [
              {
                name: 'Prev',
                value: 'prev',
              },
              {
                name: 'Next',
                value: 'next',
              },
              {
                name: 'Custom',
                value: 'custom',
              },
            ],
          },
        },
        {
          type: 'ENDPOINT',
          label: 'Endpoint',
          key: 'endpoint',
          value: '',
          configuration: {
            condition: {
              type: 'SHOW',
              option: 'type',
              comparator: 'EQ',
              value: 'custom',
            },
          },
        },
      ],
      descendants: [],
    },
  ],
}))();
