var direction; 
var heightThing = 0.88*screen.availHeight;
var dirSel = false;
var cipSel = false;

function switchTab(tab){
    if(tab == "vigenere"){

        var currentTab = document.getElementById('caesar');
        var otherTab = document.getElementById('vigenere');

        currentTab.setAttribute('class', 'nav-link');
        otherTab.setAttribute('class', 'nav-link active')

        otherTab.removeAttribute('onclick');
        currentTab.setAttribute('onclick', 'switchTab("caesar")')

        document.getElementById('description').innerHTML = "The vigenere cipher is, in simple terms, a series of interwoven caesar ciphers that uses a key in order to encode/decode. Each letter has its own row and column, both of these are its own unique caesar shift where it is the first letter in the alphabet. The code letter, derived from the code phrase, selects which letter in that caesar shift would be the encoded letter. To decode, you take the caesar shift for the code letter, then find the encoded letter's position in that alphabet, and then find the letter in the same position in the traditional alphabet.";
        document.getElementById('description-button').href = "https://en.wikipedia.org/wiki/Vigenère_cipher";
        document.getElementById('desPic').src = "../images/v.png";
        document.getElementById('example').innerHTML = "In this example, we'll be using the word <strong>Hello</strong>, and the code word <strong>Crazy</strong>. To encode we'd go to the column with the header of <strong>H</strong>, and then go down to the row that corresponds to the code letter, <strong>C</strong>, the letter at the intersection would be our encoded letter, <strong>J</strong>. Using this method, plaintext, and code word, inputting a whole phrase, such as <strong>problem set eight</strong> would output <strong>rioajgdsdrgzggr</strong>"

    }else if(tab == "caesar"){

        var currentTab = document.getElementById('vigenere');
        var otherTab = document.getElementById('caesar');

        currentTab.setAttribute('class', 'nav-link');
        otherTab.setAttribute('class', 'nav-link active')

        otherTab.removeAttribute('onclick');
        currentTab.setAttribute('onclick', 'switchTab("vigenere")')

        document.getElementById('description').innerHTML = 'The Caesar Cipher is a type of substitution cipher. This cipher creates its encoded text by replacing the plaintext letters with a letter a fixed number of spaces up or down the alphabet.';
        document.getElementById('description-button').href = "https://en.wikipedia.org/wiki/Caesar_cipher";
        document.getElementById('desPic').src = "../images/c.png"
        document.getElementById('example').innerHTML = "In this example, all letters have a right shift of 5. This means that plaintext <strong>A</strong> will be encoded to <strong>F</strong>, since it's 5 letters to right of A in the alphabet. Encoding a whole phrase, like <strong>Problem Set Eight</strong> using this method will output <strong>uwtgqjrxjyjnlmy.</strong>"

    }
}

function switchCipher(cipherName){
  if(cipherName == "caesar"){
    document.getElementById('runButton').setAttribute("onclick", "caesar(direction)");
    console.log("Switched to Caesar Cipher!");
    cipSel = true;
      
  }else if(cipherName == "vigenere"){
    document.getElementById('runButton').setAttribute("onclick", "vigenere(direction)");
    console.log("Switched to Vigenere Cipher!");
    cipSel = true;
      
  }
    if(dirSel == true){
      document.getElementById('runButton').disabled = false;
    }
}

function switchDirection(way){
  if(way == "encode"){
    direction = "encode";
    console.log("Switched to encoding!");
    dirSel = true;
      
  }else if(way == "decode"){
    direction = "decode";
    console.log("Switched to decoding!");
    dirSel = true;
      
  }
    if(cipSel == true){
        document.getElementById('runButton').disabled = false;
        if(direction == 'encode'){
            document.getElementById('runButton').innerHTML = "Encode!";
        }else if(direction == 'decode'){
            document.getElementById('runButton').innerHTML = "Decode!";
        }
    }
}