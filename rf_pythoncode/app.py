from flask import Flask, render_template, request, jsonify
import subprocess
import serial
import time

baud_rate = 9600

def send_function(serial_port, send_wallet, receive_wallet, eth_amount) -> bool:
    # Open the serial port
    ser = serial.Serial(serial_port, baud_rate, timeout=None)
    message = 't' + send_wallet + receive_wallet
    ser.write(message.encode())

    response = ser.readline().decode().strip()
    print("Key Access Success!\nPublic Key:", response)

    if response == "ok":
        return True
    else:
        return False

def receive_function(serial_port, receive_wallet, send_wallet, eth_amount) -> bool:
    # Open the serial port
    ser = serial.Serial(serial_port, baud_rate, timeout=None)
    message = 'r' + receive_wallet + send_wallet
    ser.write(message.encode())

    response = ser.readline().decode().strip()
    print("Key Access Success!\nPublic Key:", response)
    response = ser.readline().decode().strip()
    print(response)

    if response == "ok":
        return True
    else:
        return False

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/run_code', methods=['POST'])
def run_code():
    my_bool = receive_function("COM4", "E4D6A1C87F3B2E9D54178CFA03B6D8052A7E90FE", "7A1F3BC49E8D207AF692B8D04F5A9C310B7C8D2E", 8.4)
    print(my_bool)
    return jsonify({'output': str(my_bool)})

if __name__ == '__main__':
    app.run(debug=True)