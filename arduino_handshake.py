import serial
import time
import sys

baud_rate = 9600

def send_function(serial_port, receive_wallet, send_wallet, eth_amount) -> bool:
    # Open the serial port
    ser = serial.Serial(serial_port, baud_rate, timeout=1)

    message = 't' + receive_wallet + send_wallet
    ser.write(message.encode())

    response = ser.readline().decode().strip()
    if response == "ok":
        return True
    else:
        return False


def receive_function(serial_port, send_wallet, receive_wallet, eth_amount) -> bool:
    # Open the serial port
    ser = serial.Serial(serial_port, baud_rate, timeout=1)

    message = 'r' + send_wallet + receive_wallet
    ser.write(message.encode())

    response = ser.readline().decode().strip()

    if response == "ok":
        return True
    else:
        return False


if __name__ == '__main__':
    action = sys.argv[1]
    recipient = sys.argv[2]
    amount = float(sys.argv[3])

    send_wallet_address = "0x11Ec4aF7f5e10068Cc07EDDC6884223a0b93b732"

    if action == 'send':
        return_bool = send_function("COM10", recipient, send_wallet_address, amount)
        print(return_bool)
    elif action == 'receive':
        return_bool = receive_function("COM10", send_wallet_address, recipient, amount)
        print(return_bool)
    else:
        print("Invalid action. Please specify 'send' or 'receive'.")