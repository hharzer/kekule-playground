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
   Kekule.X.domReady(function(){
     var composer = Kekule.Widget.getWidgetById('composer');

     // bind event
     Kekule.Widget.getWidgetById('btnSetCustomButtons').on('execute', function(e){
       var BNS = Kekule.ChemWidget.ComponentWidgetNames;
       composer.setCommonToolButtons([BNS.undo, BNS.redo, BNS.zoomIn, BNS.zoomOut, BNS.objInspector]).setChemToolButtons([
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
     });
     Kekule.Widget.getWidgetById('btnReset').on('execute', function(e){
       composer.setCommonToolButtons(null).setChemToolButtons(null);
     });
   });
