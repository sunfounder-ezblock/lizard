from pw import PWM
from time import sleep_us


class Robot(PWM):
    move_list = {}
    def __init__(self,pin_list):
        super().__init__(pin_list)
        self.pin_num = len(pin_list)
        self.origin_positions = self.new_list(90)
        self.offset = self.new_list(0)
        self.servo_positions = self.new_list(0)

    def new_list(self, default_value):
        _ = []
        for i in range(self.pin_num):
            _.append(default_value)
        return _

    def servo_write_all(self, angles):
        rel_angles = []  # ralative angle to home
        for i in range(self.pin_num):
            rel_angles.append(self.origin_positions[i] + angles[i] + self.offset[i])
        self.angle_list(rel_angles)

    def servo_move(self, targets, speed=50):
        '''
            calculate the max delta angle, multiply by 2 to define a max_step
            loop max_step times, every servo add/minus 1 when step reaches its adder_flag
        '''
        delta = []
        absdelta = []
        adder_flag = []
        max_step = 0

        for i in range(self.pin_num):
            value = targets[i] - self.servo_positions[i]
            delta.append(value)
            absdelta.append(abs(value))

        max_step = 2 * abs(max(absdelta))

        if max_step != 0:
            for i in range(self.pin_num):
                if abs(delta[i]) != 0:
                    adder_flag.append(int(max_step / abs(delta[i])))
                else:
                    adder_flag.append(0)

            for step in range(max_step):
                for j in range(self.pin_num):
                    if adder_flag[j] != 0:
                        if step % adder_flag[j] == 0:
                            if self.servo_positions[j] != targets[j]:
                                self.servo_positions[j] = int(self.servo_positions[j] + (delta[j] / abs(delta[j])))
                                self.servo_write_all(self.servo_positions)
                        sleep_us((101 - speed) * 10)

    def do_action(self,motion_name, step=1, speed=50):
        for i in range(step):
            for motion in self.move_list[motion_name]:
                self.servo_move(motion, speed)

    def set_offset(self,offset_list):
        self.offset = offset_list
        self.reset()


    def reset(self,):
        self.servo_positions = self.new_list(0)
        self.servo_write_all(self.servo_positions)

    def soft_reset(self,):
        self.servo_positions = self.new_list(0)
        self.servo_move(self.servo_positions)
