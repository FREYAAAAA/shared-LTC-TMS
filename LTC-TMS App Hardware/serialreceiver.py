import serial, time
from firebase import firebase


port = "/dev/ttyACM0"
baud = 115200
s = serial.Serial(port)
s.baudrate = baud


url = "https://yen-s-testing.firebaseio.com/"
fb = firebase.FirebaseApplication(url, None)


while True:
    data = s.readline()
    data = str(data[0:8])
    fb.post("/room", data)
    print(data)
    time.sleep(10)
    


