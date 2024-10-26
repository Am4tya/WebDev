let msg = "ILoveCoding";

// Give index of exist 
msg.indexOf("Love"); // 1 
msg.indexOf("love"); // -1 not found. because small L doesnt exist in string.
msg.indexOf("o"); // 2 

// Method chaining
let message = "   hello   ";
// let newMessage = message.trim();
// console.log("after trim: ", newMessage);
// newMessage = newMessage.toUpperCase();
// console.log("after uppercase: ", newMessage);
let newMessage = message.trim().toUpperCase();  // yeslai nai vanxa method chaining
console.log(newMessage);
