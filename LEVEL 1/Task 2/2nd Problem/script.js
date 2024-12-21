const crnthour = new Date().getHours();
let grtngMsg;

if (crnthour >= 5 && crnthour < 12) {
  grtngMsg = "Good Morning!";
}
else if (crnthour >= 12 && crnthour < 18) {
  grtngMsg = "Good Afternoon!";
}
else if (crnthour >= 17 && crnthour < 21) {
  grtngMsg = "Good Evening!";
}
else {
  grtngMsg = "Good Night!";
}

alert(grtngMsg);