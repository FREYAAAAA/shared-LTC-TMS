import serial, time
from firebase import firebase

port = "/dev/ttyACM0"
baud = 115200
s = serial.Serial(port)
s.baudrate = baud

url = "https://yen-s-testing.firebaseio.com/"
fb = firebase.FirebaseApplication(url, None)


while True:
    x=s.readline()
    fb.post("/room", x)
    print(x) 
    time.sleep(1)
    


