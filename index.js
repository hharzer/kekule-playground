const chemComposer = new Kekule.Widget.getWidgetById('kekule')

const testButton = {
  text: 'test',
  showText: true,
  '#execute': function () {
    let selection = chemComposer.getSelection()
    if(selection.length === 1){
      let name = selection[0].getClassName()
      console.log('ONE selection', name)

    }else{
      for (var i = 0, l = selection.length; i < l; ++i){
        msg += '\n' + selection[i].getClassName() + ': ' + (selection[i].getId() || '');
      }
    }

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

//const BNS = Kekule.ChemWidget.ComponentWidgetNames;
//console.log('BNS', BNS)

//chemComposer.setDimension('600px', '600px')

/*var MySingleElectronAction = Kekule.Editor.createComposerIaControllerActionClass(
    'Kekule.Editor.ActionComposerSetAttachedMarkerIaControllerSingleElectron',
    'Single Electron',
    'Add single electron',
    'AttachedMarkerIaController',
    'AttachedMarkerIaController-SingleElectron',
    {
      'markerClassName': 'Kekule.ChemMarker.UnbondedElectronSet',
      'targetClassName': 'Kekule.AbstractAtom',
      'initialPropValues': {'electronCount': 1}
    },
    null, null,
    'singleElectron'
  )

  chemComposer.setCommonToolButtons([BNS.undo, BNS.redo, BNS.zoomIn, BNS.zoomOut, BNS.objInspector]).setChemToolButtons([
      BNS.manipulate,
      BNS.erase,
      {'name': 'Custom', 'actionClass': Kekule.Editor.ActionOnComposerAdv,
        'text': 'Create', 'hint': 'My create button', 'id': 'btnMyCreate', 'htmlClass': 'MYBUTTON',
        'widget': Kekule.Widget.RadioButton,
        'attached': [
        BNS.molBondSingle, BNS.molBondDouble, BNS.molBondTriple,  //only show single, double and triple bounds
        BNS.molAtom
      ]},
      //BNS.molAtom,
      BNS.molFormula,
      BNS.molRing,
      {
        'name': BNS.molCharge,
        'attached': [
          BNS.molChargeClear,
          BNS.molChargePositive,
          BNS.molChargeNegative,
          BNS.molElectronLonePair,   // New added single electron button, bind it with MySingleElectronAction
          {
            'name': 'singleElectron', 'actionClass': MySingleElectronAction
          }
        ]
      }
    ]);


chemComposer.setEnableStyleToolbar(true)
  .setEnableOperHistory(true)
  .setAllowCreateNewChild(false) //multiple structures will be false untill we are ready to add that feature
  //.setCommonToolButtons([])//['zoomIn', 'zoomOut', 'config', 'objInspector']) // create all default common tool buttons
  //.setChemToolButtons([])   // create only chem tool buttons related to molecule
  .setStyleToolComponentNames([]);  // create all default style components */



      var MySingleElectronAction = Kekule.Editor.createComposerIaControllerActionClass(
        'Kekule.Editor.ActionComposerSetAttachedMarkerIaControllerSingleElectron',
        'Single Electron',
        'Add single electron',
        'AttachedMarkerIaController',
        'AttachedMarkerIaController-SingleElectron',
        {
          'markerClassName': 'Kekule.ChemMarker.UnbondedElectronSet',
          'targetClassName': 'Kekule.AbstractAtom',
          'initialPropValues': {'electronCount': 1}
        },
        null, null,
        'singleElectron'
      );

      // initialize Composer

        // bind event
          var BNS = Kekule.ChemWidget.ComponentWidgetNames;
          chemComposer.setCommonToolButtons([BNS.undo, BNS.redo, BNS.zoomIn, BNS.zoomOut, BNS.objInspector]).setChemToolButtons([
            BNS.manipulate,
            BNS.erase,
            {'name': 'Custom', 'actionClass': Kekule.Editor.ActionOnComposerAdv,
              'text': 'Create', 'hint': 'My create button', 'id': 'btnMyCreate', 'htmlClass': 'MYBUTTON',
              'widget': Kekule.Widget.RadioButton,
              'attached': [
              BNS.molBondSingle, BNS.molBondDouble, BNS.molBondTriple,  //only show single, double and triple bounds
              /*  Hide other bond buttons

               BNS.molBondCloser, BNS.molBondWedgeUp, BNS.molBondWedgeDown,
               BNS.molRepMethane,
               BNS.molRepFischer1, BNS.molRepFischer2,
               BNS.molRepSawhorseStaggered, BNS.molRepSawhorseEclipsed
               */
              //{'name': BNS.molAtom, 'actionClass': Kekule.Editor.ActionComposerSetAtomController}
              BNS.molAtom
            ]},
            //BNS.molAtom,
            BNS.molFormula,
            BNS.molRing,
            {
              'name': BNS.molCharge,
              'attached': [
                BNS.molChargeClear,
                BNS.molChargePositive,
                BNS.molChargeNegative,
                BNS.molElectronLonePair,
                {
                  'name': 'singleElectron', 'actionClass': MySingleElectronAction
                }
              ]
            }
            // BNS.molCharge,
            // BNS.textImage
          ]);


  let renderConfigs = chemComposer.getRenderConfigs()
      renderConfigs.getLengthConfigs().setBondLineWidth(2)
      renderConfigs.getLengthConfigs().setAtomFontSize(18)
      renderConfigs.getLengthConfigs().setDefBondLength(56)
      renderConfigs.getColorConfigs().setBondColor('#A2D6DD')
      renderConfigs.getColorConfigs().setAtomColor('#00758E')

  chemComposer.getEditor().repaint()
