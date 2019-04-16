// code for ROT13 Cipher
function cipher() {
  var user_text = document.getElementById("message").value;
  var cipher_text = [];
  var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

  for (var idx = 0; idx < user_text.length; idx++) {
    enteredData = alphabet.indexOf(user_text[idx]);
    if (enteredData == -1) {
      cipher_text.push(user_text[idx]);
    } else {
      var Data = (enteredData + 13) % 26;
      var Character = alphabet[Data];
      cipher_text.push(Character);
    }

  }
  document.getElementById("output").innerHTML = cipher_text.join("");
  document.getElementById("ciphermsg").value = cipher_text.join("");
}


// code to decipher ROT13

function decipher() {
  var user_text = document.getElementById("ciphermsg").value;
  var cipher_text = [];
  var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

  for (var idx = 0; idx < user_text.length; idx++) {
    enteredData = alphabet.indexOf(user_text[idx]);
    if (enteredData == -1) {
      cipher_text.push(user_text[idx]);
    } else {
      var Data = (enteredData + 13) % 26;
      var Character = alphabet[Data];
      cipher_text.push(Character);
    }

  }
  document.getElementById("output1").innerHTML = cipher_text.join("");
}

// code to caesar Cipher
function caesar_cipher() {
  var cipher_text = [];

  var z = document.getElementById("message").value;

  for (var x = 0, new_characters = z.length; x < new_characters; x++) {
     if (z[x] == z[x].toLowerCase()) {
      var y = z[x].charCodeAt(0);
      var a = ((y - 97 + 3) % 26) + 97;
      var b = String.fromCharCode(a);
      cipher_text.push(b);

    }
  }
  document.getElementById("output").innerHTML = cipher_text.join("");
  document.getElementById("ciphermsg").value = cipher_text.join("");

}

// code to dicipher caesar Cipher
function caesar_decipher() {
  var cipher_text = [];

  var z = document.getElementById("ciphermsg").value;

  for (var x = 0, new_characters = z.length; x < new_characters; x++) {
    if (z[x] == z[x].toLowerCase()) {
      var y = z[x].charCodeAt(0);
      var a = ((y - 97 - 3) % 26) + 97;
      var b = String.fromCharCode(a);
      cipher_text.push(b);

    }
  }
  document.getElementById("output1").innerHTML = cipher_text.join("");

}