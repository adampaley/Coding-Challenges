/* https://www.codewars.com/kata/52685f7382004e774f0001f7/train/javascript

Human Readable Time

Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)

HH = hours, padded to 2 digits, range: 00 - 99
MM = minutes, padded to 2 digits, range: 00 - 59
SS = seconds, padded to 2 digits, range: 00 - 59
The maximum time never exceeds 359999 (99:59:59)

You can find some examples in the test fixtures.
*/

const conversion = (time, hh, mm, ss) => {
    if (!time) {
      return [hh, mm, ss].map((x) => x < 10 ? `0${x}` : x).join(':')
    }

    // if (!time) {
    //     return [hh, mm, ss].map((x) => x < 10 ? x.toString().padStart(2,"0") : x).join(':')
    //   }
        
    if (time >= 3600) { 
      time -= 3600 
      hh++ 
    } else if (time >= 60) { 
      time -= 60  
      mm++
    } else {
      time--
      ss++
    }
  
    return conversion(time, hh, mm, ss)
  }
  
  
  const humanReadable = (seconds) => {
    return conversion(seconds, 0, 0, 0)
  }