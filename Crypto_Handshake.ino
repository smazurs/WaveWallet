#include <SPI.h>
#include <nRF24L01.h>
#include <RF24.h>

#define CE_PIN   1
#define CSN_PIN  0

const byte address1[5] = {'R','x','A','A','A'};
const byte address2[5] = {'R','x','B','B','B'};

RF24 radio(CE_PIN, CSN_PIN);

char receive_data[257]; // this length must match dataToSend in the TX
bool new_data = false;

char data_to_send[257];
bool rslt = false;

bool transaction_check = false;

String input = "";

void setup() {
  Serial.begin(9600);

  radio.begin();
  radio.setDataRate( RF24_250KBPS );
  radio.setRetries(3,5); // delay, count

  while (true){
    if (Serial.available() > 0) {
      input = Serial.readStringUntil('\n');
      break;
    }
  }
  if (input[0] == '0'){
    radio.openWritingPipe(address1);
    radio.openReadingPipe(1, address2);
    Serial.println("code_0");
  }
  else if (input[0] == '1'){
    radio.openWritingPipe(address2);
    radio.openReadingPipe(1, address1);
    Serial.println("code_1");
  }
  else{
    Serial.println(input);
    Serial.println("code_init_fail");
  }
  
}

void loop() {
  if (Serial.available() > 0) {
    
    input = Serial.readStringUntil('\n');
    
    if (input[0] == 's'){
      
      Serial.println("code_send");
      data_to_send[0] = 't';          //test connection
      while (rslt == false){
        send_data();   
      }
      Serial.println("sent_test");
      rslt = false;
      
      data_to_send[0] = 's';            //construct verification data
      for (int i = 1; i < 256; i++){       
        data_to_send[i] = input[i];
      }
      
      while (rslt == false){            //send verification data
        send_data();
      }
      rslt = false;
      Serial.println(data_to_send);

      radio.startListening();
      while (new_data == false){
        get_data();
      }
      new_data = false;

      Serial.println(receive_data);

      if (receive_data[0] == 's'){
        
        transaction_check = true;
        for (int i = 129; i < 257; i++){
          if (input[i] != receive_data[i]){
            transaction_check = false;
            Serial.println("wrong address or amount sent");
            data_to_send[0] = 'e';
            break;
          }
        }
        if (transaction_check == true){
          for (int i = 1; i < 129; i++){
            if (input[i+256] != receive_data[i]){
              transaction_check = false;
              Serial.println("wrong address or amount sent");
              data_to_send[0] = 'e';
            }
          }
        }
        if (transaction_check == true){
          Serial.println("send_it");
        }
        
      }
      else if(receive_data[0] == 'e'){
        Serial.println("wrong address or amount sent");
      }
      
    }
    
    else if (input[0] == 'r'){

      Serial.println("code_receive");
  
      radio.startListening();
  
      while (new_data == false){
        get_data();
      }
      new_data = false;
      Serial.println(receive_data);
      
      if (receive_data[0] == 't'){
        Serial.println("received_test");
        
        while(new_data == false){
          get_data();
        }
        radio.stopListening();
        Serial.println(receive_data);
        
        transaction_check = true;
        for (int i = 129; i < 257; i++){
          if (input[i] != receive_data[i]){
            transaction_check = false;
            Serial.println("wrong address or amount sent");
            data_to_send[0] = 'e';
            break;
          }
        }
        if (transaction_check == true){
          for (int i = 1; i < 129; i++){
            if (input[i+256] != receive_data[i]){
              transaction_check = false;
              Serial.println("wrong address or amount sent");
              data_to_send[0] = 'e';
            }
          }
        }

        if (transaction_check == true){
          Serial.println("send it");
          data_to_send[0] = 's';            //construct verification data
          for (int i = 1; i < 256; i++){       
          data_to_send[i] = input[i];
          }
          send_data();
        }
        else{
          send_data();
        }
      }
      else{
        Serial.println("code_s_r_fail");
      }
      
    }
    else{
      Serial.println("formatting error, check first character sent to Serial");
    }
  }
  input = "";
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
