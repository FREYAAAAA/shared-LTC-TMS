import sys
import Adafruit_DHT
import time
from firebase import firebase

url = "https://yen-s-testing.firebaseio.com/"
fb = firebase.FirebaseApplication(url, None)

while True:
	humidity, temperature = Adafruit_DHT.read_retry(11, 4)
	x = 'Temperature: {0:0.1f} C Humidity: {1:0.1f} %'.format(temperature, humidity)
	print x
	fb.post("/room", x)
	time.sleep(5)