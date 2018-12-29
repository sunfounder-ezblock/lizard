/*
  Input:
    .appendDummyInput
    .appendStatementInput
    .appendValueInput
 
  Field:
    .appendField(Blockly.Msg.MODULE_BLOCKNAME_TITLE1)
    .appendField(new Blockly.FieldTextInput("DEFAULT"), "NAME")
    .appendField(new Blockly.FieldNumber(DEFAULT, MIN, MAX), "NAME")
    .appendField(new Blockly.FieldAngle(90), "NAME")
    .appendField(new Blockly.FieldDropdown(Blockly.Constants.MODULE.XXX), "NAME")
    .appendField(new Blockly.FieldCheckbox("TRUE"), "NAME");
    .appendField(new Blockly.FieldColour("#ff0000"), "NAME");
    .appendField(new Blockly.FieldVariable("item"), "NAME");
    .appendField(new Blockly.FieldImage("https://www.gstatic.com/codesite/ph/images/star_on.gif", 15, 15, "*"));
 
  Type:
    .setCheck(null)
    .setCheck("Boolean")
    .setCheck("Number")
    .setCheck("String")
    .setCheck("Array")
    .setCheck("CUSTOM")
    .setCheck(["Boolean", "Number"])
 
  this.setInputsInline(false);
  this.setOutput(true, TYPE);
  this.setPreviousStatement(true, TYPE);
  this.setNextStatement(true, TYPE);
  this.setColour(Blockly.Constants.MODULE.HUE);
  this.setTooltip(Blockly.Msg.MODULE_BLOCKNAME_TOOLTIP);
  this.setHelpUrl('');
 */

'use strict';
goog.provide('Blockly.Blocks.lizard');  // Deprecated
goog.provide('Blockly.Constants.Lizard');

goog.require('Blockly.Blocks');
goog.require('Blockly.Msg');

Blockly.Constants.Lizard.HUE = 50;
Blockly.Blocks.lizard.HUE = Blockly.Constants.Lizard.HUE;

console.log(Blockly.Msg.LIZARD_WALK_FORWARD_TITLE1)

Blockly.Constants.Lizard.ACTIONS = [
  // [Blockly.Msg.LIZARD_WALK_FORWARD_TITLE1, '"forward"'],
  // [Blockly.Msg.LIZARD_WALK_BACKWARD_TITLE1, '"backward"'],
  // [Blockly.Msg.LIZARD_TURN_LEFT_TITLE1, '"turn left"'],
  // [Blockly.Msg.LIZARD_TURN_RIGHT_TITLE1, '"turn right"'],
  ["forward", '"forward"'],
  ["backward", '"backward"'],
  ["turn left", '"turn left"'],
  ["turn right", '"turn right"'],
];

Blockly.Blocks['lizard_do_action'] = {
  init: function() {
    this.appendValueInput('step')
        .appendField(new Blockly.FieldDropdown(Blockly.Constants.Lizard.ACTIONS), "action");
    this.appendValueInput('speed')
        .appendField(Blockly.Msg.LIZARD_WALK_FORWARD_TITLE2);
    this.appendDummyInput()
       // .appendField(new Blockly.FieldNumber(0, 0, 100), "NAME")
        .appendField(Blockly.Msg.LIZARD_WALK_FORWARD_TITLE3);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Constants.Lizard.HUE);
    this.setTooltip(Blockly.Msg.LIZARD_WALK_FOEWARD_TOOLTIP);
    this.setHelpUrl('');
  }
};
Blockly.Blocks['set_offset'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.LIZARD_SET_OFFSET_TITLE);
    this.appendValueInput('angle1')
        .appendField(Blockly.Msg.LIZARD_SET_OFFSET_TITLE1);
    this.appendValueInput('angle2')
        .appendField(Blockly.Msg.LIZARD_SET_OFFSET_TITLE2);
    this.appendValueInput('angle3')
        .appendField(Blockly.Msg.LIZARD_TURN_RIGHT_TITLE3);
    
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Constants.Lizard.HUE);
    this.setTooltip(Blockly.Msg.LIZARD_WALK_BACKWARD_TITLE1);
    this.setHelpUrl('');
  }
};

