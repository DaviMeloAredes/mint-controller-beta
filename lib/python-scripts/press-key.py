import keyboard
import sys
import time
import json

key = sys.argv[1]
type = sys.argv[2]
file = open('lib/jsons/keys_config.json')

data = json.load(file)
times = data['times']

def mouse_down ():
    if (list(times).__contains__(key)):
        timestamp = times[key]
    else:
        timestamp = 0.1

    print("Registered Key: " + key + " | Event Type: " + type)

    keyboard.press(key)
    time.sleep(0.1)
    keyboard.release(key)

mouse_down()