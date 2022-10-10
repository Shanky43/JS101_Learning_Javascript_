//Problem 4: Given stored username and password and input username and password, Print if the user can login or not.

let reg_userName = "xyz@gmail.com";
let reg_userPass = "!@#$%^";

let entered_userName ="xyz@gmail.com";
let entered_userPass = "!@#$%^*";

if(reg_userName==entered_userName){
  console.log("Valid Email-ID")
  if(reg_userPass==entered_userPass){
    console.log("\n")
    console.log("Logged In")
     console.log("\n")
  }else{
     console.log("\n")
    console.log("!!!!! Wrong Password !!!!!","\n","Enter the correct password.....")
  }
}else{
   console.log("\n")
  console.log("!!!!! Wrong Email !!!!!","\n", "Please check the email and try agian....")
}
