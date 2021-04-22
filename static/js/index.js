//https://www.eclipse.org/paho/clients/js/

function historial_1(){
	//alert("led on");
	console.log("led on");
	//document.getElementById("sensor").innerHTML="led on";
	message = new Paho.MQTT.Message("1");
    	message.destinationName = "juanpinduisaca.jq@gmail.com/test";
    	client.send(message);
  
}
function historial_2(){	
	//alert("led off");
	console.log("led off");
	message = new Paho.MQTT.Message("0");
    	message.destinationName = "juanpinduisaca.jq@gmail.com/test";
    	client.send(message);
	//document.getElementById("sensor").innerHTML="led off";
}
function historial_3(){	
	//alert("led off");
	console.log("historial sensor 1");
	message = new Paho.MQTT.Message("2");
    	message.destinationName = "juanpinduisaca.jq@gmail.com/test";
    	client.send(message);
	//document.getElementById("sensor").innerHTML="led off";
}
function historial_4(){	
	//alert("led off");
	console.log("historial sensor 2");
	message = new Paho.MQTT.Message("3");
    	message.destinationName = "juanpinduisaca.jq@gmail.com/test";
    	client.send(message);
	//document.getElementById("sensor").innerHTML="led off";
}



// Create a client instance
  //client = new Paho.MQTT.Client("postman.cloudmqtt.com", 14970);
  
  client = new Paho.MQTT.Client("maqiatto.com", 8883, "web_" + parseInt(Math.random() * 100, 10));

  // set callback handlers
  client.onConnectionLost = onConnectionLost;
  client.onMessageArrived = onMessageArrived;
  var options = {
   useSSL: false,
    userName: "juanpinduisaca.jq@gmail.com",
    password: "liga19041995",
    onSuccess:onConnect,
    onFailure:doFail
  }

  // connect the client
  client.connect(options);
   
  // called when the client connects
  function onConnect() {
    // Once a connection has been made, make a subscription and send a message.
    console.log("Conectado...para enviar datos al microcontrolador");
    client.subscribe("juanpinduisaca.jq@gmail.com/test1");
    message = new Paho.MQTT.Message("hola desde la web");
    message.destinationName = "juanpinduisaca.jq@gmail.com/test";
    client.send(message);
	
  }


  function doFail(e){
    console.log(e);
	
  }

  // called when the client loses its connection
  function onConnectionLost(responseObject) {
    if (responseObject.errorCode !== 0) {
      console.log("onConnectionLost:"+responseObject.errorMessage);
    }
  }

  // called when a message arrives
  function onMessageArrived(message) {
    console.log("onMessageArrived:"+message.payloadString);
	 
    x=message.payloadString;
    y=message.payloadString;
	// document.getElementById("Historial0").innerHTML=x;
// document.getElementById("Historial").innerHTML=x;
//	 document.getElementById("Historial1").innerHTML=x;
	  
    if(x=="Encender"){
	 document.getElementById("Historial0").innerHTML=x;
    }
	else{
	document.getElementById("Historial1").innerHTML=x;
		}
   if(x=="Apagado"){
	 document.getElementById("Historial0").innerHTML=x;
    }
	else{
	document.getElementById("Historial2").innerHTML=x;
		}
   if(x=="historial1"){
	 document.getElementById("Historial0").innerHTML=x;
    }
	else{
	document.getElementById("Historial3").innerHTML=x;
		}
    
//	  if(x=="Encender"){
//	 document.getElementById("Historial0").innerHTML=x;
  //  }
//	else{
///	document.getElementById("Historial1").innerHTML=x;
	//	}
	

   
   if(x=="historial2"){
	 document.getElementById("Historial0").innerHTML=x;;
    }
	  else{
	document.getElementById("Historial4").innerHTML=x;
	}
   	 
	  
	
  }
  
