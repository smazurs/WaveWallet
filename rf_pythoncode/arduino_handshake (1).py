import serial
import time

baud_rate = 9600

def send_function(serial_port, send_wallet, receive_wallet, eth_amount) -> bool:
    # Open the serial port
    ser = serial.Serial(serial_port, baud_rate, timeout=None)

    message = 't' + send_wallet + receive_wallet;
    ser.write(message.encode())

    response = ser.readline().decode().strip()
    print(response)

    if response == "ok":
        return True
    else:
        return False


def receive_function(serial_port, receive_wallet, send_wallet, eth_amount) -> bool:
    # Open the serial port
    ser = serial.Serial(serial_port, baud_rate, timeout=None)

    message = 'r' + receive_wallet + send_wallet;
    ser.write(message.encode())

    response = ser.readline().decode().strip()
    print(response)

    response = ser.readline().decode().strip()

    if response == "ok":
        return True
    else:
        return False

#my_bool = send_function("COM10", "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx", "yyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy", 8.4)
#print(my_bool)

my_bool = receive_function("COM4", "yyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy", "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx", 8.4)
print(my_bool)

