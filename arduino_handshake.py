import serial
import time

baud_rate = 9600

def send_function(serial_port, receive_wallet, send_wallet, eth_amount) -> bool:
    # Open the serial port
    ser = serial.Serial(serial_port, baud_rate, timeout=1)

    message = 't' + receive_wallet + send_wallet;
    ser.write(message.encode())

    response = ser.readline().decode().strip()
    if response == "ok":
        return True
    else:
        return False


def receive_function(serial_port, send_wallet, receive_wallet, eth_amount) -> bool:
    # Open the serial port
    ser = serial.Serial(serial_port, baud_rate, timeout=1)

    message = 'r' + send_wallet + receive_wallet;
    ser.write(message.encode())

    response = ser.readline().decode().strip()

    if response == "ok":
        return True
    else:
        return False

# return_bool = send_function("COM10", "b72ef1a4c8d6390fc5f8724e4aaf786b4932c91737cb13a8b1e256b87b8f9d6d98c7f4a5304e0b9f8d9ab6dc5d883c2c22cfc8f599bc31d0cc116b05cbf0ee8", "a9e6b31f7c4d208d695a7e23e38d4d1f5295e9b0f0f1d83bca55f5c0c643d7a99b1d9e0e1f6b7a8d2e7c2f3d7f2e3a4f3b4f2c4e2d5e4d4e5c3f2e2d7e4", 0.73829457810438203291274927390584379510283749217489302749173921847219847321897412038471239841720384923827498371239847120384971238478947219837412038471298347812)
# print(return_bool)
#
# return_bool = receive_function("COM10", "a9e6b31f7c4d208d695a7e23e38d4d1f5295e9b0f0f1d83bca55f5c0c643d7a99b1d9e0e1f6b7a8d2e7c2f3d7f2e3a4f3b4f2c4e2d5e4d4e5c3f2e2d7e4", "b72ef1a4c8d6390fc5f8724e4aaf786b4932c91737cb13a8b1e256b87b8f9d6d98c7f4a5304e0b9f8d9ab6dc5d883c2c22cfc8f599bc31d0cc116b05cbf0ee8", 0.73829457810438203291274927390584379510283749217489302749173921847219847321897412038471239841720384923827498371239847120384971238478947219837412038471298347812)
# print(return_bool)
