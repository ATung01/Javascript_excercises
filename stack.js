//Building a stack manually in Javascript even though you'd normally just use Arrays

let Stack = function() {
  this.count = 0
  this.storage = {}

  this.push = (value) => {
    this.storage[this.count] = value
    this.count++
  }

}
