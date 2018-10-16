import threading
import sys
import Adafruit_DHT
import datetime
from firebase import firebase
import serial, time


port = "/dev/ttyACM0"
baud = 115200
s = serial.Serial(port)
s.baudrate = baud


url = "https://share-b7589.firebaseio.com/"
fb = firebase.FirebaseApplication(url, None)

tm = str(time.strftime("%H~%M"))
ltm = str(time.strftime("%H:%M"))
tms = str(time.strftime("%H~%M~%S"))
dt = str(time.strftime("%Y-%-m-%-d"))
onlyh = str(time.strftime("%H"))
onlym = str(time.strftime("%M"))

data = s.readline()
data = str(data[0:24])
sptdata = data.split(',')
    
sptdata[0] = "Location"
locationdata = sptdata[1]
    
sptdata[2] = "PatientID"
patientiddata = sptdata[3]
    
stepdata = sptdata[4]
heartratedata = sptdata[5]

def infiniteloop1():    
    while True:     
        w = heartratedata
        x = tm + "?" + "→"+ "?" + stepdata + "?" + "steps"
        y = "Time:" + tm
        z = tms + "?" + "→" + "?"+ heartratedata
        
        fb.put("/Activities"+"/"+sptdata[3]+"/"+ dt +"/AI"+"/Step", "Step/", x)
        fb.put("/Activities"+"/"+sptdata[3]+"/"+ dt +"/AI" +"/"+sptdata[0]+"/"+locationdata, onlyh + "/", onlym)
        fb.put("/Activities"+"/"+sptdata[3]+"/"+ dt +"/AI" +"/HeartRate", "LastestHeartRate/", z)
        fb.put("/Activities"+"/"+sptdata[3]+"/"+ dt +"/AI"+"/HeartRateRecord",tms + "/",  w)
        print(patientiddata + "," + '\n'+"Time,Step:" + x+'\n'+ "Location:" + locationdata + "," + y+'\n'+ "Time,Heart Rate:" + z)
        time.sleep(10)
    
        if ltm == "00:00":
            newday = "goodmorning$"
            s.write(newday.encode())
            print(newday)

def infiniteloop2():
    while True:
        
        Humidity, Temperature = Adafruit_DHT.read_retry(11, 4)
        Edata = 'T?→?{0:0.1f}?°C?&?H?→?{1:0.1f}?%'.format(Temperature, Humidity)
        TEdata = locationdata + ", " + tm + "," +  Edata
        fb.put("/Activities"+"/EnvironmentStatus"+"/"+dt + "/" +locationdata, ltm + "/", Edata)
        print(TEdata)

        time.sleep(10)

thread1 = threading.Thread(target=infiniteloop1)
thread1.start()

thread2 = threading.Thread(target=infiniteloop2)
thread2.start()



    