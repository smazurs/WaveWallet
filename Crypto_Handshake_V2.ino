#include <SPI.h>
#include <nRF24L01.h>
#include <RF24.h>

#define CE_PIN   1
#define CSN_PIN  0

const byte address1[5] = {'R','x','A','A','A'};
const byte address2[5] = {'R','x','B','B','B'};

RF24 radio(CE_PIN, CSN_PIN);

char receive_data[21]; // this length must match dataToSend in the TX
bool new_data = false;

char data_to_send[21];
bool rslt = false;

String read_serial = "";
String written_serial = "";
String received_string = "";
bool send_bool = false;
String my_wallet = "";
String your_wallet = "";
char tr = 'a';
bool run_bool = false;
String channel_str = "";
int channel_int = 0;
bool yours_mine = true;
bool init_1 = false;
bool init_2 = false;
bool final_bool = false;


void setup() {
  Serial.begin(9600);

  radio.begin();
  radio.setDataRate( RF24_250KBPS );
  radio.setRetries(3,5); // delay, count

  run_bool = fsm_setup();

  if (run_bool == true){
    if (tr == 't'){
      yours_mine = true;
      send_string();
      delay(250);

//      hop_m(15);
//      delay(250);
      
      receive_string();
      delay(250);

//      hop_s();
//      delay(250);
      
      if (received_string == my_wallet){
        init_1 = true;
      }
      else{
        init_1 = false;
      }
      
      yours_mine = false;
      receive_string();
      delay(250);

//      hop_s();
//      delay(250);
      
      if (received_string == your_wallet){
        init_2 = true;
      }
      else{
        init_2 = false;
      }

      send_string();
      delay(250);
      

      if (init_1 & init_2){
        Serial.println("ok");
      }
      else{
        Serial.println("transmit wrong");
      }
      
    }
    else if (tr == 'r'){
      yours_mine = true;
      receive_string();
      delay(250);

//      hop_s();
//      delay(250);
      
      if (received_string == my_wallet){
        init_1 = true;
      }
      else{
        init_1 = false;
      }
      send_string();
      delay(250);

//      hop_m(25);
//      delay(250);
      
      yours_mine = false;
      send_string();
      delay(250);

//      hop_m(35);
//      delay(250);
      
      receive_string();
      delay(250);
      
      if (received_string == your_wallet){
        init_2 = true;
      }
      else{
        init_2 = false;
      }
      if (init_1 & init_2){
        Serial.println("ok");
      }
      else{
        Serial.println("receive wrong");
      }
      
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
  radio.stopListening();
  if (yours_mine == true){
    for (int i = 0; i < 2; i++){
      for (int j = 0; j < 20; j++){
        data_to_send[j] = your_wallet[i * 20 + j];
      }
      while (rslt == false){            //send verification data
        send_data();
      }
      rslt = false;
    }
  }
  else{
    for (int i = 0; i < 2; i++){
      for (int j = 0; j < 20; j++){
        data_to_send[j] = my_wallet[i * 20 + j];
      }
      while (rslt == false){            //send verification data
        send_data();
      }
      rslt = false;
    }
  }
}

void receive_string(){
  received_string = "";
  radio.startListening();
  for (int i = 0; i < 2; i++){
    while (new_data == false){
      get_data();
    }
    new_data = false;
    received_string += receive_data;
  }
}

void parse_serial(){
  tr = read_serial[0];
  for (int i = 1; i < 41; i++){
    my_wallet += read_serial[i];
  }
  for (int i = 41; i < 81; i++){
    your_wallet += read_serial[i];
  }
  Serial.println(my_wallet);
}

void hop_m(int channel){
  channel_str = static_cast<String>(channel);
  data_to_send[0] = channel_str[0];
  data_to_send[1] = channel_str[1];

  while (rslt == false){            //send verification data
    send_data();
  }
  rslt = false;

  radio.setChannel(channel);
}

void hop_s(){
  while (new_data == false){
    get_data();
  }
  new_data = false;
  channel_str += receive_data[0];
  channel_str += receive_data[1];
  channel_int = channel_str.toInt();

  radio.setChannel(channel_int);
}
