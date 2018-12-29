Lizard.toolboxText =
    '<category name="%{BKY_CATLIZARD}" colour="55">' +
    '  <block type="lizard_do_action">' +
    '      <value name="step">' +
    '        <shadow type="math_number">' +
    '          <field name="NUM">1</field>' +
    '        </shadow>' +
    '      </value>' +
    '      <value name="speed">' +
    '        <shadow type="math_number">' +
    '          <field name="NUM">1</field>' +
    '        </shadow>' +
    '      </value>' +
    '  </block>' +
    '  <block type="set_offset">' +
    '      <value name="angle1">' +
    '        <shadow type="math_number">' +
    '          <field name="NUM">1</field>' +
    '        </shadow>' +
    '      </value>' +
    '      <value name="angle2">' +
    '        <shadow type="math_number">' +
    '          <field name="NUM">1</field>' +
    '        </shadow>' +
    '      </value>' +
    '      <value name="angle3">' +
    '        <shadow type="math_number">' +
    '          <field name="NUM">1</field>' +
    '        </shadow>' +
    '      </value>' +
    '  </block>' +
    '</category>' +

    '<category name="%{BKY_CATTIME}" colour="292">' +
    '  <block type="time_localtime">' +
    '  </block>' +
    '  <block type="time_mktime">' +
    '  </block>' +
    '  <block type="time_sleep">' +
    '    <value name="delay_secs">' +
    '      <shadow type="math_number">' +
    '        <field name="NUM">1</field>' +
    '      </shadow>' +
    '    </value>' +
    '  </block>' +
    '  <block type="time_sleep_ms">' +
    '    <value name="delay_secs">' +
    '      <shadow type="math_number">' +
    '        <field name="NUM">1000</field>' +
    '      </shadow>' +
    '    </value>' +
    '  </block>' +
    '  <block type="time_sleep_us">' +
    '    <value name="delay_secs">' +
    '      <shadow type="math_number">' +
    '        <field name="NUM">1000000</field>' +
    '      </shadow>' +
    '    </value>' +
    '  </block>' +
    '  <block type="time_ticks_ms">' +
    '  </block>' +
    '  <block type="time_ticks_us">' +
    '  </block>' +
    '  <block type="time_ticks_cpu">' +
    '  </block>' +
    '  <block type="time_ticks_add">' +
    '    <value name="ticks">' +
    '      <shadow type="time_ticks_ms">' +
    '      </shadow>' +
    '    </value>' +
    '    <value name="delta">' +
    '      <shadow type="math_number">' +
    '        <field name="NUM">1000</field>' +
    '      </shadow>' +
    '    </value>' +
    '  </block>' +
    '  <block type="time_ticks_diff">' +
    '    <value name="ticks1">' +
    '      <shadow type="time_ticks_ms">' +
    '      </shadow>' +
    '    </value>' +
    '    <value name="ticks2">' +
    '      <shadow type="time_ticks_ms">' +
    '      </shadow>' +
    '    </value>' +
    '  </block>' +
    '  <block type="time_time">' +
    '  </block>' +
    '</category>'
