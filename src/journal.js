
export function Entry(title, date, body) {
  this.title = title;
  this.date = date;
  this.body = body;
}

Entry.prototype.countWords = function() {
  var bodyArray = this.body.split(" ");
  return bodyArray.length;
};

Entry.prototype.countVowels = function() {
  var vowelCounter = 0;
  var vowels = ["a","e","i","o","u","A","E","I","O","U"];
  var vowelBody = this.body;
  for (var i = 0; i <= vowelBody.length; i++) {
    vowels.forEach(function(vowel) {
      if(vowelBody.charAt(i) === vowel) {
        vowelCounter += 1;
      }
    });
  }
  return vowelCounter;
};

Entry.prototype.countConsonants = function() {
  var consonantCounter = 0;
  var consonants = "bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ".split("");
  var constBody = this.body;
  for (var i = 0; i <= constBody.length; i++) {
    consonants.forEach(function(consonant) {
      if(constBody.charAt(i) === consonant) {
        consonantCounter += 1;
      }
    });
  }
  return consonantCounter;
};


// Entry.prototype.getTeaser = function(body) {
//   var teaserArray = [];
//   var bodyArray = this.body.split(" ", 8);
//   for(var i = 0; i <= bodyArray.length; i++) {
//     if(i !== ".") {
//       teaserArray.push(bodyArray[i]);
//     }
//   }
//   return teaserArray.join(" ");
// }
