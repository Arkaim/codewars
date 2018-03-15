// function WhatIsTheTime(timeInMirror)
// { 
//   var time = timeInMirror.split(":");
//   var hour = Math.abs(12 - time[0]);
//   var minute = Math.abs(60 - time[1]);
//   if (time[1] > 0) {
//     hour -=1;
//   } else {
//     minute = '00';
//   }

//   if (hour < 10) {
//     hour = '0'+ (hour);
//   }
//   return `${hour}:${minute}`;
// }



console.log(WhatIsTheTime("06:35"));