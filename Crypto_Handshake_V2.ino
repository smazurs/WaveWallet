#include <SPI.h>
#include <nRF24L01.h>
#include <RF24.h>

#define CE_PIN   1
#define CSN_PIN  0

const byte address1[5] = {'R','x','A','A','A'};
const byte address2[5] = {'R','x','B','B','B'};

RF24 radio(CE_PIN, CSN_PIN);

char receive_data[32]; // this length must match dataToSend in the TX
bool new_data = false;

char data_to_send[32];
bool rslt = false;

String read_serial = "";
String written_serial = "";
String received_string = "";
bool send_bool = false;
String my_wallet = "";
String your_wallet = "";
char tr = 'a';
bool run_bool = false;


void setup() {
  Serial.begin(9600);

  radio.begin();
  radio.setDataRate( RF24_250KBPS );
  radio.setRetries(3,5); // delay, count

  run_bool = fsm_setup();

  if (run_bool == true){
    if (tr == 's'){
      send_string();
      receive_string();
      if (received_string == my_wallet){
        Serial.println("ok");
      }
      else{
        Serial.println("send wrong");
      }
    }
    else if (tr == 'r'){
      receive_string();
      if (received_string == my_wallet){
        Serial.println("ok");
      }
      else{
        Serial.println("receive wrong");
      }
      send_string();
    }
  }
  
}

void loop() {
  // put your main code here, to run repeatedly:

}

void get_data() {
    if ( radio.available() ) {
        radio.read( &receive_data, sizeof(receive_data) );
        new_data = true;
    }
}

void send_data() {

    rslt = radio.write( data_to_send, sizeof(data_to_send) );

}

void serial_read(){
  while (true){
    if (Serial.available() > 0) {
      read_serial = Serial.readStringUntil('\n');
      break;
    }
  }
}

bool fsm_setup(){
  serial_read();
  parse_serial();
  if (read_serial[0] == 't'){
    radio.openWritingPipe(address1);
    radio.openReadingPipe(1, address2);
    return true;
  }
  else if (read_serial[0] == 'r'){
    radio.openWritingPipe(address2);
    radio.openReadingPipe(1, address1);
    return true;
  }
  else{
    return false;
  }
}

void send_string(){
  for (int i = 0; i < 8; i++){
    for (int j = 0; j < 32; j++){
      data_to_send[j] = my_wallet[i * 32 + j];
    }
    while (rslt == false){            //send verification data
      send_data();
    }
    rslt = false;
  }
}

void receive_string(){
  for (int i = 0; i < 8; i++){
    while (new_data == false){
      get_data();
    }
    new_data = false;
    received_string += receive_data;
  }
}

void parse_serial(){
  tr = read_serial[0];
  my_wallet = read_serial.substring(129);
  your_wallet = read_serial.substring(1,128);
}
