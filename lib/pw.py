from leaf import Timer
from leaf import Pin

class PWM(object):
    PERIOD = 4095
    _period = PERIOD
    PINS = [None, "D0","D1","D2","D3","D6","D7","A8","A9","A10","A11","A12","A13"]

    def __init__(self, pin_list):
        self.pin_list = pin_list
        self.pin_obj_list = []
        self._pulse_width_list = []
        for pin in pin_list:
           self.pin_obj_list.append(Pin(self.PINS[pin], Pin.OUT_PP))
           self._pulse_width_list.append(300)

        self.pin = self.pin_obj_list[0]
        self.tick_count = 0
        self.tim = Timer(2)
        self.tim.init(prescaler=410, period=4095)
        self.tim.callback(self.tick)
        self.freq(50)
        self._counter = True
        self._pulse_width = self._pulse_width_list[0]

    def tick(self, timer):
        
        self._counter = not self._counter
        if self._counter:
            self.pin.high()
            self.tim.period(self.PERIOD - self._pulse_width)
            self.tick_count += 1
            if self.tick_count == len(self._pulse_width_list):
                self.tick_count = 0
            self._pulse_width = self._pulse_width_list[self.tick_count]

        else:
            self.pin.low()
            self.tim.period(self._pulse_width)
            self.pin = self.pin_obj_list[self.tick_count]


    def freq(self, freq):
        self._freq = freq
        _prescaler = int(84000000/freq/4095)
        self.tim.prescaler(_prescaler)

    def pulse_width_list(self, pulse_width_list):
        self._pulse_width_list = pulse_width_list

    def pulse_width(self, chn, pulse_width):
        chn_num = self.pin_list.index(chn)
        self._pulse_width_list[chn_num] = pulse_width

    def pulse_width_all(self, value):
        self._pulse_width_list = []
        for pin in self.pin_obj_list:
            self._pulse_width_list.append(value)

    def angle(self, chn, angle):
        Th = angle * 2000 / 180 + 500
        pw = int(Th * self._freq * self.PERIOD / 1000000)
        self.pulse_width(chn, pw)

    def angle_list(self, angle_list):
        _pulse_width_list = []
        for angle in angle_list:
            Th = angle * 2000 / 180 + 500
            pw = int(Th * self._freq * self.PERIOD / 1000000)
            _pulse_width_list.append(pw)
        self.pulse_width_list(_pulse_width_list)

    def angle_all(self, angle):
        Th = angle * 2000 / 180 + 500
        pw = int(Th * self._freq * self.PERIOD / 1000000)
        self.pulse_width_all(pw)

        
