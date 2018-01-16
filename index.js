const chemComposer = new Kekule.Editor.Composer(document.getElementById('kekule'))

const customButton = {
  text: 'Custom',
  htmlClass: 'K-Res-Button-YesOk',
  showText: false,
  '#activate': function (args) {
    console.log('activate', args);
  },
  // '#execute': function () {
  //   console.log('execute');
  //   // const mol = new Kekule.Molecule()
  //   // const carbon = new Kekule.Atom().setSymbol('C').setCoord2D({x: 0, y: 0})
  //   // mol.appendNode(carbon)
  //   // chemComposer.setChemObj(mol)
  // },
  // '#deactivate': function () {
  //   console.log('deactivate');
  // },
}

chemComposer.setDimension('600px', '600px')
chemComposer.setEnableStyleToolbar(true)
  .setEnableOperHistory(true)
  .setAllowCreateNewChild(false) //multiple structures will be false untill we are ready to add that feature
  .setCommonToolButtons(['undo', 'redo'])
  .setChemToolButtons(['manipulate', 'bond', 'atom', 'charge', customButton])   // create only chem tool buttons related to molecule
  .setStyleToolComponentNames(['color']);  // create all default style components*/
