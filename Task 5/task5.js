//Anonymous Function
//1.Print odd numbers in an array

var odd1=function(odd2)
{
    for(var i=0;i<=odd2.length;i++)
    {
          if(odd2[i]%2==1)
          {
             console.log(odd2[i])
          } 
     }
}
odd1([0,11,13,1,3,6,7,8,9,20]);

//2.Convert all the strings to title caps in a string array

var titleCaps=function(str) 
{
    str = str.toLowerCase().split(' ');
    for (var i=0;i<str.length;i++) 
    {
      str[i] = str[i].charAt(0).toUpperCase()+str[i].slice(1); 
    } 
    var upp=str.join(' ');
   console.log(upp)
}
titleCaps("HI AM HARISH");

//3.Sum of all numbers in an array

var sum = function(num){
    var num1 =0;
 for(var  i=0;i<num.length; i++)
 {
     num1+=num[i];
 }
 console.log(num1);
 }
 sum([1,2,3,4,5]);

//4.Return all the prime numbers in an array

var prime=function(numArray)
{
    numArray = numArray.filter((number)=>{
    for (var i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0)
         return false;
      }
      return true;
    });
    console.log(numArray);
}
prime([1,2,3,4,5,6,7,8,9,10,11]);

//5.Return all the palindromes in an array

var resultPallindromeArray1 = function (arrayNumber) {
    return (arrayNumber.filter((item) => {
         let temp = item + ""
         let revNum=temp.split('').reverse().join('')
        if (revNum === temp)
            return true
        return false
    }))
}([12321,121,10201,120]);
console.log("Pallindrome numbers in an array: " + resultPallindromeArray1)

//6.Return median of two sorted arrays of same size

var med=function(arr1, arr2) 
{
let result = []
let lenArr1 = arr1.length
let lenArr2 = arr2.length
if (lenArr1 % 2 === 0) 
{
    console.log("Median of array 1: " + arr1[lenArr1 / 2])
} 
else
{
    console.log("Median of array 1: " + arr1[(lenArr1 + 1) / 2])
}
if (lenArr2 % 2 === 0)
{
    console.log("Median of array 2: " + arr2[lenArr2 / 2])
} 
else
{
    console.log("Median of array 2: " + arr2[(lenArr2 + 1) / 2])
}
return
}([1, 2, 3, 4, 5, 8, 10], [8, 9, 10, 12, 16])

//7.Remove duplicates from an array

var dupArr=function removeDup(arr) 
{
    var resultArrayWoDup = ((arrayWithDup, index) => {
     return[...new Set(arrayWithDup)]
    })
    console.log("Array without Duplicates " +resultArrayWoDup)
}
([22, 22, 11, 10, 11, 56, 10, 1, 2, 6, 7, 56, 3, 9])

//8.Rotate an array by k times and return the rotated array




//IIFS
//1.Print odd numbers in an array

(function(odd)
{
for(var i=0;i<=odd.length;i++)
{
    if(odd[i]%2==1)
    {
        console.log(odd[i]); 
    }
}
})([0,11,13,1,3,6,7,8,9,20])

//2.Convert all the strings to title caps in a string array

(function(str) 
{
    let str1;
    str1 = str.toLowerCase().split(' ');
    //console.log(str1)
    for (var i=0;i<str1.length;i++)
     {
        str1[i] = str1[i].charAt(0).toUpperCase()+str1[i].slice(1); 
    } 
   var upp=str1.join(' ');
   console.log(upp)
})("HI AM HARISH");

//3.Sum of all numbers in an array

(function(sum)
 {
 var num =0;
 for(var  i=0;i<sum.length; i++)
 {
     num+=sum[i];
 }
 console.log(num);
}
 )([1,2,3,4,5])

//4.Return all the prime numbers in an array

(function(numArray){
       numArray = numArray.filter((number)=>{
        for (var i = 2; i <= Math.sqrt(number); i++) {
           if (number % i === 0)
            return false;
         }
         return true;
       });
       console.log(numArray);
   })([1,2,3,4,5,6,7,8,9,10,11]);

//5.Return all the palindromes in an array

let resultPallindromeArray = (function (arrayNumber) {
    return (arrayNumber.filter((item) => {
         let temp = item + ""
         let revNum=temp.split('').reverse().join('')
        if (revNum === temp)
            return true
        return false
    }))
})([12321,121,10201,120]);
console.log("Pallindrome numbers in an array: " + resultPallindromeArray);

//6.Return median of two sorted arrays of same size

(function (arr1, arr2) 
{
let result = []
let lenArr1 = arr1.length
let lenArr2 = arr2.length
if (lenArr1 % 2 === 0) 
{
    console.log("Median of array 1: " + arr1[lenArr1 / 2])
} 
else
{
    console.log("Median of array 1: " + arr1[(lenArr1 + 1) / 2])
}
if (lenArr2 % 2 === 0)
{
    console.log("Median of array 2: " + arr2[lenArr2 / 2])
} 
else
{
    console.log("Median of array 2: " + arr2[(lenArr2 + 1) / 2])
}
return
})([1, 2, 3, 4, 5, 8, 10], [8, 9, 10, 12, 16])



//7.Remove duplicates from an array

(function removeDup(arr) 
{
    var resultArrayWoDup = ((arrayWithDup, index) => {
     return[...new Set(arrayWithDup)]
    })
    console.log("Array without Duplicates " +resultArrayWoDup)
})([22, 22, 11, 10, 11, 56, 10, 1, 2, 6, 7, 56, 3, 9])

//8.Rotate an array by k times and return the rotated array


//Arrow Function
//1. Print odd numbers in an array

oddNumbers = (odd) => 
{
    for(var i=0;i<=odd.length;i++)
    {
         if(odd[i]%2==1)
         {
            console.log(odd[i])
         } 
    }
}
oddNumbers([0,11,13,1,3,6,7,8,9,20])


//2. Convert all the strings to title caps in a string array

titleCase=(str1)=> 
{
    str2 = str1.toLowerCase().split(' ');
    for (var i=0;i<str2.length; i++) 
    {
      str2[i] = str2[i].charAt(0).toUpperCase() + str2[i].slice(1); 
    } 
    var upp=str2.join(' ');
    console.log(upp)
 
}
titleCase("HI AM HARISH");

//3. Sum of all numbers in an array

var sum = (num) => {
    var num1 =0;
 for(var  i=0;i<num.length; i++)
 {
     num1+=num[i];
 }
 console.log(num1);
 }
 sum([1,2,3,4,5])

//4. Return all the prime numbers in an array

var prime=(numArray)=>
   {
    numArray = numArray.filter((number)=>{
    for (var i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0)
         return false;
      }
      return true;
    });
    console.log(numArray);
}
prime([1,2,3,4,5,6,7,8,9,10,11]);

//5. Return all the palindromes in an array

var resultPallindrome = (arrayNumber)=> {
     return(arrayNumber.filter((item) => {
         var temp = item + ""
         var revNum=temp.split('').reverse().join('')
        if (revNum === temp)
            return true
        return false
    }))
}
resultPallindrome([12321,121,10201,120]);
