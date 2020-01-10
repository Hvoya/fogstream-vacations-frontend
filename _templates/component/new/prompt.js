module.exports = [
  {
    type: 'select',
    name: 'folder',
    message: "What kind of component you want to create?",
    choices: [
      { message: 'Atom', value: 'atoms' },
      { message: 'Molecule', value: 'molecules' },
      { message: 'Organism', value: 'organisms' },
      { message: 'Template', value: 'templates' },
      { message: 'Page', value: 'pages' },
    ]
  },
  {
    type: 'input',
    name: 'name',
    message: "Enter name of a new component.",
  },
  {
    type: 'select',
    name: 'suffix',
    message: "Choose component name suffix.",
    choices: ['', 'Btn', 'Block', 'Item', 'Modal', 'Container', 'Wrapper', 'Page', 'Form', 'Field']
  }
];
