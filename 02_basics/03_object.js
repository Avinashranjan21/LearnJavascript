// Object literals
// Using Symbols

const testSymbol = Symbol("Nagpur")

const JsUser = {
    name : "Avinash Pandey",
    aliasName : "LittleBaua",
    "age" : 33,
    email : "avinash@pandey.com",
    isLoggedIn : true,
    lastLoginDay : ["Monday", "Sunday"],
    [testSymbol]: "NAGPUR"
}

console.log(JsUser.name);
console.log(JsUser["age"]);
console.log(JsUser["name"]); // both is correct way to get the value
console.log(JsUser[testSymbol]);

JsUser.email = "ranjan@gmail.com"

// when want to freeze any object it wont show any error on any modfication
// but wont make any changes.
//Object.freeze(JsUser)

JsUser.greeting = function(){
    console.log("Hello JS user");
}

JsUser.greetingSecond = function(){
    console.log(`Hello JS user ${this.name}`);
}

JsUser.greeting()
JsUser.greetingSecond()

