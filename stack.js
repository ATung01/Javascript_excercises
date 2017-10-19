//Building a stack manually in Javascript even though you'd normally just use Arrays

let Stack = function() {
  this.count = 0
  this.storage = {}

  this.push = (value) => {
    this.storage[this.count] = value
    this.count++
  }

  this.pop = () => {
    if (this.count === 0) {
      return undefined;
    }
    this.count--
    let resultOfPop = this.storage[this.count]
    delete this.storage[this.count]
    return resultOfPop
  }

  this.size = () => {
    return this.count
  }

  this.peek = () => {
    return this.storage[this.count-1]
  }
  
}
