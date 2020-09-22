(() => ({
  name: 'Data List',
  icon: 'UnorderedListIcon',
  category: 'CONTENT',
  structure: [
    {
      name: 'dataList',
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
      ],
      descendants: [],
    },
  ],
}))();
