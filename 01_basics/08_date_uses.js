let mydate = new Date()
console.log(mydate); // print current date and time
console.log(mydate.toString()); // This gives more readable result to human and using current time zone if the system
console.log(mydate.toDateString()); // Fri Oct 13 2023 -- Gives date
console.log(mydate.toLocaleString()); // 10/13/2023, 12:04:54 AM -- Give time based on local

let myCreatedDate = new Date(2020,6,8)
console.log(myCreatedDate.toString()); //Wed Jul 08 2020 00:00:00 GMT+0530 (India Standard Time)

let anotherCreatedDate = new Date("2020-07-08")
console.log(anotherCreatedDate.toDateString()); // Wed Jul 08 2020

let myTimeStamp = Date.now()
console.log(myTimeStamp);
console.log(anotherCreatedDate.getTime()); // return the timestamp of the given date and time