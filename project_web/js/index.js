var button = document.getElementsByClassName('butto')[0];
button.addEventListener("click",oncli);
var count = 0;
var count_1 = 1;

function oncli(){
	console.log(count);
	var input = document.getElementsByClassName('form-control')[0].value;

	var div_chat = document.createElement("div");
	div_chat.className += "outgoing-chats";

	var	div_msg = document.createElement("div");
	div_msg.className += "outgoing-chats-msg";

	var para = document.createElement("p");
	var node = document.createTextNode(input);
	para.appendChild(node);

	var span_time = document.createElement("SPAN");
	span_time.className += "time";
	var today = new Date();
	var times = today.getHours()+":"+today.getMinutes()+":"+today.getSeconds();
	var node_span = document.createTextNode(times);
	span_time.appendChild(node_span);

	// console.log(document.getElementsByClassName("msg-page"));
	document.getElementsByClassName("msg-page")[0].appendChild(div_chat);
	document.getElementsByClassName("msg-page")[0].appendChild(div_msg);
	document.getElementsByClassName("outgoing-chats-msg")[count].appendChild(para);
	document.getElementsByClassName("outgoing-chats-msg")[count].appendChild(span_time);
	count +=1;
	// setTimeout(response, 3000);
	response();

}

function response(){
	var div_response = document.createElement("div");
	div_response.className += "received-chats";

	var div_response_msg = document.createElement("div");
	div_response_msg.className += "recieved-msg";

	var div_response_msg_inbox = document.createElement("div");
	div_response_msg_inbox.className += "recieved-msg-inbox";

	var para = document.createElement("p");
	var node = document.createTextNode("Thats good to hear");
	para.appendChild(node);

	var span_time = document.createElement("SPAN");
	span_time.className += "time";
	var today = new Date();
	var times = today.getHours()+":"+today.getMinutes()+":"+today.getSeconds();
	var node_span = document.createTextNode(times);
	span_time.appendChild(node_span);


	document.getElementsByClassName("msg-page")[0].appendChild(div_response);
	document.getElementsByClassName("msg-page")[0].appendChild(div_response_msg);
	document.getElementsByClassName("msg-page")[0].appendChild(div_response_msg_inbox);
	document.getElementsByClassName("recieved-msg-inbox")[count_1].appendChild(para);
	document.getElementsByClassName("recieved-msg-inbox")[count_1].appendChild(span_time);
	
	count_1 +=1;


}



