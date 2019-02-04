/*This functions is called from the onclick property from 
the HTML input element*/
function checkCard() {
  //THIS PART STORS ALL VALUES TO BE USED
  var input = document.getElementById("card").value;

  //THIS DICLEARS ALL VARIABLE USING ONE "VAR" KEYWORD
  var sum = 0,
    singleNums = [],
    doubleNums = [],
    finalArry = undefined,
    inputSplit = input.split(""),
    validCard = false,
    output = document.getElementById("tell");

  /*THIS CONDITIONS CHECK IF THERE ARE ANY ERRORS IN THE 
  USERS INPUT */

  //THIS CHECHS IF THE INPUT IS NOT A NUMBER
  if (isNaN(input)) {
    output.innerHTML = "Please enter a valid card number !";
    output.style.textAlign = "center";
    output.style.color = "red";
  }

  /*THIS CHECK IF THE INPUT IS EMPTY.  IF IT IS EMPTY IT DISPLAYS A MESSAGE.*/
  else if (input == "") {
    //THIS GETS AN ID FROM THE DOM ("TELL") AND PASSES A MESSAGE  TO IT
    output.innerHTML = "Please enter a valid card number !";
    output.style.textAlign = "center";
    output.style.color = "red";
  }
    
    /*THIS CHECKS IF INPUT IS GREATER THAN 19 DIGITS. IF 
    IT IS GREATER THAN 19 DIGITS THE FLOW PAUSES.*/
  else if (inputSplit.length > 19) {
    output.innerHTML = "Please enter a valid card number !";
    output.style.textAlign = "center";
    output.style.color = "red";
  }
    
  /*IF ALL THE ABOVE CONDITIONS EVALUATES TO TRUE, THIS 
  CONDITION WIL RUN.*/
  else if (!isNaN(input)) {
    output.style.color = "green";
  }//BASIC ERROR CONDITIONS END HERE

  /*THIS CONDITION CHECKS IF THE TOTAL NUMBERS ENTERD IS 
  UP TO 13, 14, 15, 16 or 19 DIGITS. IF THAT CONDITION IS TRUE THE FOR LOOP 
  ITTERATES THROUGH  ALL CHARACTERS IN THE  INPUT FIELD
  STARTING WITH THE SECOND DIGIT FROM THE END OF WHOLE 
  DIGIT, COLLECTS EVERY 2nd  NUMBER AND MULTIPLIES THEM 
  BY TWO  IF IT IS DIVISIBLE BY TWO*/
  else if (input.length === 13) { //visa
    for (var i = inputSplit.length - 1; i >= 0; i--) {
      if (i % 2 !== 0) {
        singleNums.push(inputSplit[i]);
      } else {
        doubleNums.push((inputSplit[i] * 2).toString());
      }
    }
  }

  /*THIS CONDITION CHECKS IF THE TOTAL NUMBERS ENTERD IS 
  UP TO 14 DIGITS*/
  if (input.length === 14) { //diners
    for (var i = inputSplit.length - 1; i >= 0; i--) {
      if (i % 2 === 0) {
        singleNums.push(inputSplit[i]);
      } else {
        doubleNums.push((inputSplit[i] * 2).toString());
      }
    }
  }

  /*THIS CONDITION CHECKS IF THE TOTAL NUMBERS ENTERD IS 
  UP TO 15 DIGITS.*/
  if (input.length === 15) { //american express 
    for (var i = inputSplit.length - 1; i >= 0; i--) {
      if (i % 2 === 0) {
        singleNums.push(inputSplit[i]);
      } else {
        doubleNums.push((inputSplit[i] * 2).toString());
      }
    }
  }

  /*THIS CONDITION CHECKS IF THE TOTAL NUMBERS ENTERD IS 
  UP TO 16 DIGITS.*/
  else if (input.length === 16) {//discover
    for (var i = inputSplit.length - 1; i >= 0; i--) {
      if (i % 2 !== 0) {
        singleNums.push(inputSplit[i]);
      } else {
        doubleNums.push((inputSplit[i] * 2).toString());
      }
    }
  }

    /*THIS CONDITION CHECKS IF THE TOTAL NUMBERS ENTERD IS 
  UP TO 19 DIGITS.*/
  else if (input.length === 19) { //verve
    for (var i = inputSplit.length - 1; i >= 0; i--) {
      if (i % 2 !== 0) {
        singleNums.push(inputSplit[i]);
      } else {
        doubleNums.push((inputSplit[i] * 2).toString());
      }
    }
  }

  /*joining makes an array to a string and I split them 
  up again*/
  /*so that every number is a single digit and convert 
  back to array*/
  doubleNums = doubleNums.join("").split("");
  finalArry = doubleNums.concat(singleNums);

  for (var j = 0; j < finalArry.length; j++) {
    sum += parseInt(finalArry[j], 10);
  }

  if (sum % 10 === 0) {
    validCard = true;
  }

  console.log(sum);
  //return validCard;

  var dict = {
    "American Express": [/^3[47][0-9]{13}$/],
    "Diners Club": [/^3(?:0[0-5]|[68][0-9])[0-9]{11}$/],
    "Discover": [/^65[4-9][0-9]{13}|64[4-9][0-9]{13}|6011[0-9]{12}|(622(?:12[6-9]|1[3-9][0-9]|[2-8][0-9][0-9]|9[01][0-9]|92[0-5])[0-9]{10})$/],
    "JCB": [/^(?:2131|1800|35\d{3})\d{11}$/],
    "MasterCard": [/^(5[1-5][0-9]{14}|2(22[1-9][0-9]{12}|2[3-9][0-9]{13}|[3-6][0-9]{14}|7[0-1][0-9]{13}|720[0-9]{12}))$/],
    "Visa": [/^4[0-9]{12}(?:[0-9]{3})?$/],
    "Visa Master": [/^4[0-9]{12}(?:[0-9]{3})?$/]
  }

  // loop over keys
  for (var key in dict) {
    // loop over key values in dict
    for (var d = 0; d < dict[key].length; d++) {
      // check if input begins with regExp
      if (dict[key][d].test(input)) {
        var output = document.getElementById("tell").innerHTML = "Your " + key + " card is valid";
        document.getElementById("tell").style.color = "green";
        document.getElementById("tell").style.textAlign = "center";
        //alert("Your "+key+" card is valid");
        if((/^3[47][0-9]{13}$/.test(input))){
          document.getElementById("amx").style.display = "block";
        }

        if((/^3(?:0[0-5]|[68][0-9])[0-9]{11}$/.test(input))){
          document.getElementById("dc").style.display = "block";
        }

        else if((/^65[4-9][0-9]{13}|64[4-9][0-9]{13}|6011[0-9]{12}|(622(?:12[6-9]|1[3-9][0-9]|[2-8][0-9][0-9]|9[01][0-9]|92[0-5])[0-9]{10})$/.test(input))){
          document.getElementById("discover").style.display = "block";
        }

        else if((/^(?:2131|1800|35\d{3})\d{11}$/.test(input))){
          document.getElementById("jcb").style.display = "block";
        }

        else if((/^(5[1-5][0-9]{14}|2(22[1-9][0-9]{12}|2[3-9][0-9]{13}|[3-6][0-9]{14}|7[0-1][0-9]{13}|720[0-9]{12}))$/.test(input))){
          document.getElementById("master").style.display = "block";
        }

        else if((/^4[0-9]{12}(?:[0-9]{3})?$/.test(input)) || (/^4[0-9]{12}(?:[0-9]{3})?$/.test(input))){
          document.getElementById("visa").style.display = "block";
        }
        return true; 
      }
    }
  }
}