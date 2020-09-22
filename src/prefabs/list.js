(() => ({
  name: 'List',
  icon: 'UnorderedListIcon',
  category: 'CONTENT',
  structure: [
    {
      name: 'list',
      options: [
        {
          label: 'Model',
          key: 'model',
          value: '',
          type: 'MODEL',
        },
        {
          label: 'Filter',
          key: 'filter',
          value: {},
          type: 'FILTER',
          configuration: {
            dependsOn: 'model',
          },
        },
        {
          type: 'PROPERTY',
          label: 'Property',
          key: 'property',
          value: '',
          configuration: {
            dependsOn: 'model',
          },
        },
      ],
      descendants: [],
    },
  ],
}))();
