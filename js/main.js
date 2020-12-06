  const cipher = {
    "A":"N","B":"O","C":"P","D":"Q","E":"R","F":"S","G":"T","H":"U","I":"V","J":"W","K":"X","L":"Y","M":"Z","N":"A","O":"B","P":"C","Q":"D","R":"E","S":"F","T":"G","U":"H","V":"I","W":"J","X":"K","Y":"L","Z":"M"
  };

document.getElementById("btn-encode").addEventListener("click", function() {
  let rawStr = document.getElementById("caesar-text").value.toUpperCase();

  document.getElementById("caesar-desc").innerText = "Your message after encoding using ROT13 is:";
  document.getElementById("caesar-message").innerText = encode(rawStr);
});

document.getElementById("btn-decode").addEventListener("click", function() {
  let rawStr = document.getElementById("caesar-text").value.toUpperCase();

  document.getElementById("caesar-desc").innerText = "Your ROT13 decoded message is: ";
  document.getElementById("caesar-message").innerText = decode(rawStr);
});

function encode(inputStr) {
  let returnStr = "";

  for (let x = 0; x < inputStr.length; x++) {
    if (cipher[inputStr[x]] !== undefined) {
      returnStr = returnStr + cipher[inputStr[x]];
    } else {
      returnStr = returnStr + inputStr[x];
    }
  }

  return returnStr;
}

function decode(inputStr) {
  let returnStr = "";

  for (let x = 0; x < inputStr.length; x++) {
    if (cipher[inputStr[x]] !== undefined) {
      returnStr = returnStr + cipher[inputStr[x]];
    } else {
      returnStr = returnStr + inputStr[x];
    }
  }

  return returnStr;
}
