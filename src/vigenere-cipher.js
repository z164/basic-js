const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {

  constructor(type = true) {
    this.type = type
  }

  getAlphabeticalNumber(letter) {
    return letter.toUpperCase().charCodeAt(0) - 65
  }

  equalStringsLength() {
    if (this.key.length < this.str.length) {
      let keyIndex = 0;
      for (let i = this.key.length; i < this.str.length; i++) {
        this.key += this.key[keyIndex]
        keyIndex++
        if (keyIndex > this.key.length) {
          keyIndex = 0
        }
      }
    }
  }

  encrypt(str, key) {
    this.str = str.toUpperCase()
    this.key = key.toUpperCase()
    this.equalStringsLength()
    for (let i = 0; i < str.length; i++) {
      if (str.toUpperCase().charCodeAt(i) < 65 || str.toUpperCase().charCodeAt(i) > 90) {
        this.str = this.str.slice(1) + str[i]
        let result = [this.key.slice(0, i), ' ', this.key.slice(i)].join('');
        this.key = result
        continue
      }
      let index = this.key.charCodeAt(i) + this.getAlphabeticalNumber(this.str[0])
      index > 90 ? index = 65 + index - 91 : index
      let letter = String.fromCharCode(index)
      this.str = this.str.slice(1) + letter
    }
    if (this.type === false) {
      let split = this.str.split('')
      split = split.reverse()
      this.str = split.join('')
      return this.str
    }
    return this.str
  }

  decrypt(str, key) {
    this.str = str.toUpperCase()
    this.key = key.toUpperCase()
    this.equalStringsLength()
    for (let i = 0; i < str.length; i++) {
      if (str.toUpperCase().charCodeAt(i) < 65 || str.toUpperCase().charCodeAt(i) > 90) {
        this.str = this.str.slice(1) + str[i]
        let result = [this.key.slice(0, i), ' ', this.key.slice(i)].join('');
        this.key = result
        continue
      }
      let index = (this.str.charCodeAt(0) - this.key.charCodeAt(i)) + 65
      index < 65 ? index = 65 + (index - 39) : index
      let letter = String.fromCharCode(index)
      this.str = this.str.slice(1) + letter
    }
    if (this.type === false) {
      let split = this.str.split('')
      split = split.reverse()
      this.str = split.join('')
      return this.str
    }
    return this.str
  }
}

module.exports = VigenereCipheringMachine;
