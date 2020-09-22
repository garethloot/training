(() => ({
  name: 'Section Column',
  icon: 'ColumnIcon',
  category: 'LAYOUT',
  structure: [
    {
      name: 'column',
      options: [
        {
          type: 'CUSTOM',
          label: 'Align horizontal',
          key: 'alignHorizontal',
          value: 'flex-start',
          configuration: {
            as: 'BUTTONGROUP',
            dataType: 'string',
            allowedInput: [
              {
                name: 'Left',
                value: 'flex-start',
              },
              {
                name: 'Center',
                value: 'center',
              },
              {
                name: 'Right',
                value: 'flex-end',
              },
            ],
          },
        },
        {
          type: 'CUSTOM',
          label: 'Align vertical',
          key: 'alignVertical',
          value: 'flex-start',
          configuration: {
            as: 'BUTTONGROUP',
            dataType: 'string',
            allowedInput: [
              {
                name: 'Top',
                value: 'flex-start',
              },
              {
                name: 'Center',
                value: 'center',
              },
              {
                name: 'Bottom',
                value: 'flex-end',
              },
            ],
          },
        },
      ],
      descendants: [],
    },
  ],
}))();
