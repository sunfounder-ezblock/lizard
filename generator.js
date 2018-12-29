/*
 * var text_name = block.getFieldValue('NAME');
 * var number_name = block.getFieldValue('NAME');
 * var angle_name = block.getFieldValue('NAME');
 * var dropdown_name = block.getFieldValue('NAME');
 * var checkbox_name = block.getFieldValue('NAME') == 'TRUE';
 * var colour_name = block.getFieldValue('NAME');
 * var variable_name = Blockly.Python.variableDB_.getName(block.getFieldValue('NAME'), Blockly.Variables.NAME_TYPE);
 * var value_name = Blockly.Python.valueToCode(block, 'NAME', Blockly.Python.ORDER_ATOMIC);
 * var statement_name = Blockly.Python.statementToCode(block, 'statement');
 *
 * For statement: return code
 * For output: return [code, Blockly.Python.ORDER_NONE];
 */


'use strict';

goog.provide('Blockly.Python.lizard');

goog.require('Blockly.Python');



Blockly.Python['lizard_do_action'] = function (block) {//digital pin number
  var action = block.getFieldValue('action');
  var step = Blockly.Python.valueToCode(block, 'step', Blockly.Python.ORDER_ATOMIC);
  var speed = Blockly.Python.valueToCode(block, 'speed', Blockly.Python.ORDER_ATOMIC);

  Blockly.Python.definitions_['import_lizard'] = 'from lizard import Lizard\n__LIZARD__ = Lizard([1,2,3])';

  var code = '';
  code += '__LIZARD__.do_action(' + action + ', ' + step + ', ' + speed + ')\n'
  return code;
};

Blockly.Python['set_offset'] = function (block) {//digital pin number
  var angle1 = Blockly.Python.valueToCode(block, 'angle1', Blockly.Python.ORDER_ATOMIC);
  var angle2 = Blockly.Python.valueToCode(block, 'angle2', Blockly.Python.ORDER_ATOMIC);
  var angle3 = Blockly.Python.valueToCode(block, 'angle3', Blockly.Python.ORDER_ATOMIC);

  Blockly.Python.definitions_['import_lizard'] = 'from lizard import Lizard\n__LIZARD__ = Lizard([1,2,3])';


  var code = '';
  code += '__LIZARD__.set_offset([' + angle1 + ',' + angle2 + ',' + angle3 + ']))\n'
  return code;
};

