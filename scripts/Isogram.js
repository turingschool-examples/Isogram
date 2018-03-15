export default class Isogram {
  constructor(phrase) {
    this.phrase = phrase.toLowerCase()
  }

  cleanPhrase(phrase) {
    const nonValid = ['-', ' ']
    return phrase.filter(char => nonValid.indexOf(char) > 0)
  };

  determainIso(array, key= {}, i = 0) {
    const currentLetter = array[i]
    key[currentLetter] = (key[currentLetter] || 0) + 1;

    const notIso    = truth[currentLetter] > 1
    const isFinshed = i >= array.length  - 1

     if(notIso) {
       return false
     }

     if(!isFinshed) {
       return this.determainIso(array, truth, i + 1)
     }
     return true
  }

  isIsogram() {
    return this.determainIso(this.cleanPhrase(this.phrase.split('')))
  }
}
