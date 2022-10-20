function setTime(h) {
    return function setMinutes(m = 0) {
      return function setSeconds(s = 0) {
        return `${h}:${m}:${s}`
      }
    }
  }
  
  var time = setTime(22)()(16);
  console.log(time);