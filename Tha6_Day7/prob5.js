var cyl = {
  height: 10,
  radius: 3,
  volume: function(){
    return this.height * Math.PI * this.radius * this.radius;
  }
}
console.log('volume =', cyl.volume().toFixed(4));