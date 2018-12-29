from robot import Robot
from leaf import BLE

class Lizard(Robot):
    move_list = {
    
                "forward":[
                    [0,35,0],#go ahead
                    [50,0,-50],
                    [0,-35,0],
                    [-50,0,50],
                    [0,35,0],
                    [50,0,-50],
                    [0,-35,0],
                    [-50,0,50],
                ],

                "backward":[
                    [0,50,0],#backward
                    [-50,0,50],
                    [0,-50,0],
                    [50,0,-50],
                    [0,50,0],
                    [-50,0,50],
                    [0,-50,0],
                    [50,0,-50],
                ],

                "turn left":[
                    [0,-35,0],#turn left
                    [50,-35,50],
                    [50,0,50],
                    [0,0,50],
                    [0,0,0],

                ],


                "turn right":[
                    [0,-45,0],#turn right
                    [-50,-45,-50],
                    [-50,0,-50],
                    [0,0,-50],
                    [0,0,0],
                ],
                "stay":[
                    [0,0,0],#go ahead
                ],
                    }
    def __init__(self,pin_list):
        super().__init__(pin_list)
        ble = BLE()
        ble.write("MODE+Lizard")
