// 作业一：
var str="hello world";
var str1=str.split(" ");
let str2=[];
for(var i=0;i<str1.length;i++){
    str2.push(str1[i][0].toUpperCase()+str1[i].substr(1))
}
console.log(str2)



// 作业二
var a= ["3","5","4","2"];
console.log(a.sort());


// 作业三
var arr=[[1,2],3,[4,[5,[6]]]];
function even (arr){
    console.info(arr.toString().split(','))
} 
even (arr)
console.log(arr)
