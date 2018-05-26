function shout(string) {
<<<<<<< HEAD
  return string.toUpperCase();
}

function whisper(string) {
  return string.toLowerCase();
}

function logShout(string) {
  console.log(string.toUpperCase());
}

function logWhisper(string) {
  console.log(string.toLowerCase());
}

function sayHiToGrandma(string) {
  var lowercase = 'hello!'
  var uppercase = "HELLO!"
  if (string.toLowerCase() === string) {
    return "I can\'t hear you!";
  } 
    else if (string.toUpperCase() === string) {
      return "YES INDEED!";
    }
      else if(string === "I love you, Grandma.") {
        return "I love you, too."
      }
=======
  return string.toUpperCase()
<<<<<<< HEAD
}

function whipser(string) {
  return string.toLowerCase()
=======
>>>>>>> f7237cbb2279eaaeae4f356985e0bad26ea5d527
>>>>>>> a153b996d1147db87aec63ebd13d9698851aadb0
}