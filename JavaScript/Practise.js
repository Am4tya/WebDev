let str = "apple";

if((str ==='a') && (str.length > 3)){
    console.log("good string");
} else {
    console.log("not a good string");
}

// 
let num = 12;
        //T                F                      T             
if((num % 3 == 0) && ((num + 1 == 15) || (num - 1 === 11))) {
    console.log("safe");  // ans.True
} else {
    console.log("unsafe");
}