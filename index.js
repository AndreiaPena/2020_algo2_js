//ex02
var unNombre = 9;
console.log(typeof unNombre);

//ex03
let isLogin = true;
if (isLogin==true){
console.log ("Connected");
} else{
    console.log ("Not Authorized");
};

//ex04 
let a = 8;
 let b = a+1;
a +=1 ;
a *= 2;
b -= 5;
b *= b;
a += 3;

if (a==1){
   console.log (a +=2);
} else {
   console.log (a +=3)
};
console.log("result :", a);

//ex05

let variable = 0;

while(variable <= 10) {
    console.log(variable);
    variable++
};

let helloWorld = "    Hello , world      ";
console.log(helloWorld);
console.log(helloWorld.trim());

helloWorld = helloWorld.split(",");
console.log(helloWorld);
