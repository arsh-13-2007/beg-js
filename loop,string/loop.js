//                                                                       for loop 
// let n = prompt("enter number : ") ;
n= 5; 
for ( let i = 1 ; i <= n ; i++){
    console.log("hello world!");
}
console.log("loop ended!");

//                                                                      while loop 
let num = 1 ; 
while ( num <= 10 ){
    console.log(num);
    num++;
    }
    console.log("while loop ended") ; 

// most important 
//                                                                       (for - of loop )


// it is  mostly use in string and arrays 
let fruits = ["apple" , "banana" , "cherry"];
for ( let   i of fruits ){
    for ( let j of  i ){
        console.log(j);
    }
    console.log(" ") ; 
    }
//                                                                       ( for - in loop )
// it is mostly use in object
let student = {
    name :"arsh", 
    age : 18 ,
    batch:31 , 
    sgpa : 9.55, 
}
for ( let i in student ){
    console.log(i , student[i]);
}
