const socket = io();

let btn = document.getElementById("btn");
let inputMsg = document.getElementById("newmsg");
let msglist = document.getElementById("msglist");

btn.onclick = function exec() {
  socket.emit("msg_send", {
    msg: inputMsg.value,
  });
};

socket.on("msg_rcvd", (data) => {
  let li_msg = document.createElement("li");
  li_msg.innerText = data.msg;
  msglist.appendChild(li_msg);
});
