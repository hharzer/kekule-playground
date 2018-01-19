const chemComposer = new Kekule.Editor.Composer(document.getElementById('kekule'))

const drawButton = {
  text: 'Draw',
  showText: true,
  '#execute': function () {
    const mol = new Kekule.Molecule()
    const carbon = new Kekule.Atom().setSymbol('C').setCoord2D({x: 0, y: 0})
    mol.appendNode(carbon)
    chemComposer.setChemObj(mol)
  }
}

const editButton = {
  text: 'Edit',
  showText: true,
  '#execute': function () {
    const mol = new Kekule.Molecule()
    const carbon = new Kekule.Atom().setSymbol('C').setCoord2D({x: 0, y: 0})
    mol.appendNode(carbon)
    chemComposer.setChemObj(mol)
  }
}

chemComposer.setDimension('600px', '600px')
chemComposer.setEnableStyleToolbar(true)
  .setEnableOperHistory(true)
  .setAllowCreateNewChild(false) //multiple structures will be false untill we are ready to add that feature
  .setCommonToolButtons(['zoomIn', 'zoomOut']) // create all default common tool buttons
  .setChemToolButtons(['bond', 'atom', 'manipulate', 'erase', 'charge', 'ring'])   // create only chem tool buttons related to molecule
  .setStyleToolComponentNames([]);  // create all default style components*/


  let renderConfigs = chemComposer.getRenderConfigs()
      renderConfigs.getLengthConfigs().setBondLineWidth(2)
      renderConfigs.getLengthConfigs().setAtomFontSize(18)
      renderConfigs.getLengthConfigs().setDefBondLength(56)
      renderConfigs.getColorConfigs().setBondColor('#A2D6DD')
      renderConfigs.getColorConfigs().setAtomColor('#00758E')

  chemComposer.getEditor().repaint()
