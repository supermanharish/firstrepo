
//Part 2 : Find the culprits and nail them — debugging javascript loops
// Write a code to print the numbers in the array
// Output: 1234567891011

var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var new_string = "";
 for (var i = 0; i < numsArr.length; i++) {
new_string += numsArr[i] 
}
console.log(new_string);


// Write a code to print the numbers in the array
// Output: 1,2,3,4,5,6,7,8,9,10,11

var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var new_string = new String(numsArr[0]);
for (var i = 1; i <11; i++) 
{
 new_string +=','+ numsArr[i] 
}
console.log(new_string);

// Write a code to print from last to first with spaces (Make sure there is no space after the last element 1)
// Output: 11 10 9 8 7 6 5 4 3 2 1

var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var new_string = "";
for (var i = 10; i >=0; i--)
{
 new_string += numsArr[i] + " " 
}
console.log(new_string);


// Write a code to replace the array value — If the number is even, replace it with ‘even’.

var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
for (var i = 0; i <=10; i++) {
 if(numsArr[i] %2 == 0 )
 {
 numsArr[i] = "even"
 }
}
console.log(numsArr);

// Write a code to replace the array value — If the index is even, replace it with ‘even’.

var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
for (var i = 0; i <=10; i++) {
 if(numsArr[i] %2 !== 0 )
 {
 numsArr[i] = "even"
 }
}
console.log(numsArr);

// Write a code to add all the numbers in the array

var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
 var sum=0
for (var i = 0; i <=10; i++) 
{
 sum += numsArr[i]
}
 console.log(sum);
 
// Write a code to add the even numbers only
var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var sum=0;
for (var i = 1; i <10; i=i+2)
{
 sum += numsArr[i]
}
console.log(sum);

// Write a code to add the even numbers and subract the odd numbers
// Output: 94

var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var sum=100;
for (var i = 0; i <=10; i++) {
 if(numsArr[i]%2==0)
 {
 sum += numsArr[i]
 }
 else
 {
 sum -= numsArr[i]
 }
}
console.log(sum);

// Write a code to print inner arrays
var numsArr = [[1, 2, 3, 4, 5],[ 6, 7, 8, 9, 10, 11]]
for (var i = 0; i <=numsArr.length; i++) {
 console.log( numsArr[i]);
}

// Write a code to print elements in the inner arrays
var numsArr = [[1, 2, 3, 4, 5],[ 6, 7, 8, 9, 10, 11]];
var str_all="";
for (var i = 0; i < numsArr.length; i++) {
 var inner_array = numsArr[i];
 for(var j = 0 ; j < inner_array.length;j++ )
     str_all +=inner_array[j]
}
console.log(str_all);


// Write a code to replace the array value — If the index is even, replace it with ‘even’.
var numsArr = [[1, 2, 3, 4, 5],[ 6, 7, 8, 9, 10, 11]];
for (var i = 0; i < numsArr.length; i++) {
 var inner_array = numsArr[i];
for(var j = 0 ; j < inner_array.length;j++ )
      if(inner_array[j] %2!= 0 )
      {
         inner_array[j] = "even"
      }
}
console.log(numsArr);

// Write a code to print elements in the inner arrays in reverse
// Output: 11 10 9 8 7 6 5 4 3 2 1

var numsArr = [[1, 2, 3, 4, 5],[ 6, 7, 8, 9, 10, 11]];
var str_all=' ';
for (var i = 0; i < numsArr.length; i++) 
{
 var inner_array = numsArr[i];
 console.log(inner_array)
 for(var j =inner_array.length; j>=0;  j-- )
     str_all +=inner_array[j]
}
console.log(str_all);


// Write a code to add elements in the inner arrays based on odd or even values
var numsArr = [[1, 2, 3, 4, 5],[ 6, 7, 8, 9, 10, 11]];
var sum_odd=0;
var sum_even=0;
for (var i = 0; i < numsArr.length; i++) {
 var inner_array = numsArr[i];
 for(var j = 0 ; j < inner_array.length;j++ ){
 if(inner_array[j]%2!=0)
 {
 sum_odd += inner_array[j]
 }
 else
 {
 sum_even += inner_array[j]
 }
}
}
console.log(sum_odd);
console.log(sum_even);

//Part 3: Find the culprits and nail them — debugging javascript
//Fix the code to get the largest of three.
aa = (f,s,t) => {
    //let f,s,t;
    //console.log(f,s,t);
    if(f>s &&f>t)
    {
    console.log(f)
        
    }
    else if(s>f && s>t)
    {
    console.log(s)
        
    }
    else
    {
    console.log(t)
        
    }
   }
   aa(1,2,3);

//Fix the code to Sum of the digits present in the number
let n = "123";
console.log(add(n));
function add(n)
{
let sum = 10;
for(var i=0;i<n.length;i++)
{
 sum+=+n[i]
 }
 return sum;
}

//Fix the code to Sum of all numbers using IIFE function
const arr = [9,8,5,6,4,3,2,1];
(function() {
 let sum = 0;
 for (var i = 0; i < arr.length; i++)
 {
 sum +=arr[i];
 }
 console.log(sum);
 return sum;
})();

//Fix the code to gen Title caps.

var arr1 = ["guvi", "geek", "zen", "fullstack"];
var ano = function(arro)
 {
 for (var i = 0; i < arr1.length; i++) {
 console.log(arr1[i][0].toUpperCase() + arr1[i].substr(1));
 }
}
ano();

//Fix the code to return the Prime numbers
const newArray=[1,3,2,5,10];
const myPrime=newArray.filter(num=>{
 for(let i=2;i<num;i++){
 if(num%i===0)
 {
 return false;
 }
 }
 return num!==1;
});
console.log(myPrime);

//Fix the code to sum the number in that array
const num = [10, 20, 30, 40,50,60,70,80,90,100] 
const sum1 = (a, b) =>
 a + b
const sum2 = num.reduce(sum1)
console.log(sum2);

//Fix the code to rotate an array by k times and return rotated array using IIFE function
// var arr2 = [1, 2, 3, 6, 8, 6, 1, 9, 10, 12, 13];
// var k = 3;
// k = arr2.length % k;
// (function() {
//  arr =[];
//  out = arr.slice(k + 1, arr.length);
//  var count = out.length;
//  for (var i = 0; i < k + 1; i++) 
//  {
//  out[count] = arr[i];
//  count += 1;
//  }
//  console.log(out);
// })();

//Fix the code to gen Title caps.

var arr5 = ["guvi", "geek", "zen", "fullstack"];
(function() {
 for (var i = 0; i < arr5.length; i++) {
 console.log(arr5[i][0].toUpperCase() + arr5[i].substr(1));
 }
})();

//print all odd numbers in an array using IIFE function

var arr6 = [1, 2, 3, 5, 7, 79, 7, 2, 6, 9, 4];
(function() {
 for (var i = 0; i < arr6.length; i++) {
 if (arr6[i] % 2 !== 0) {
 console.log(arr6[i]);
 }}
})();

//Fix the code to reverse.
(function(str){
    str1 = str.split("").reverse().join("");
    console.log(str1); 
})("abcd")

//Fix the code to remove duplicates.
var res = function(arr){
for(var i=0; i <arr.length; i++)
{
newArr1 = [];
if(newArr1.indexOf(arr[i])==-1) {
newArr1.push(arr[i]);
} 
}
console.log(newArr1)
}
res(["guvi","geek","guvi","duplicate","geeK"])

//Fix the code to give the below output:
   
// var array =[[["firstname","vasanth"],
// ["lastname","Raje"],["age",24],
// ["role","JSWizard"]],[["firstname","Sri"],
// ["lastname","Devi"],["age",28],["role", "Coder"]]];
// var final=[]
// while(array.length!=0)
// {
//  var outer_remove = array.shift();
//   while(outer_remove.length!=0)
//  {
//  var inner_remove = outer_remove.shift()
//  var key = inner_remove[0]
//  var value =inner_remove[1]
//  new_object[key]=value
//  }
//  final.push(new_object)
//  console.log(final)
// }

//Fix the code to give the below output:
//Sum of odd numbers in an array
var as=[12,34,5,6,2,56,6,2,1];
var s=as.reduce(function(a,c){
 if(c%2!=0)
 {
 return a-c;
 }
 return a;});
console.log(s);

// Fix the code to give the below output:
// Swap the odd and even digits
aa = data=>{
    var a=data;
   for(i=0;i<a.length-1;i++){
    var l='';
    var s=a[i+1]
    var b=a[i]
    l+=s
    l+=b
    i=i+1
   }
   if((a.length%2)!=0){
    l+=a[a.length-1]
   }
   console.log(l);
   }
   aa("1234");


