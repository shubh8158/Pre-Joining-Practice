// // // let start=['january', 'july','march','august'];
// // // start.splice(0,1);

// // // console.log(start);
// // // start.splice(1,0,'june');
// // // console.log(start);

// // let a=['c','c++','html','javascript','python','java','c#','sql'];
// // a.reverse();
// // a.indexOf('javascript');
// // console.log(a.indexOf('javascript'));

// // let a=prompt("Enter the value ");
// // let id=2;
// // if(a[id] == a[id].toLowerCase){
// //     console.log("Lower");
// // }
// // else{
// //     console.log("Not lower");
// // }

// // let n=prompt("Enter the value of number of times you want to print Number");
// // for(let i=1;i<=n;i++){
// //     console.log(i);
// // }

// // Print ODD Numbers//
// // let n=prompt("Enter the value of number of times you want to print Number");
// // n=parseInt(n);
// // for(i=n;i<=n*10;i=i+n){
// //     // if(i%2==1){
// //     //     console.log(i);
// //     // }
// //     // else{
// //     // console.log(i);
// //     // }
// //     console.log(i);
// // } 

// //Activity Guess the favourite movie from user
// // let favmovie="Jailer";
// // let guess=prompt("Guess my favourite Movie Name:");
// // while((guess!=favmovie)&&(guess!= "quit")){
// //     console.log("Wrong Answer KEEP IT UP!");
// //     guess=prompt("Enter Again");
// // }
// // console.log("YEAH YOU GOT IT!");

// //Loops in Arrays
// // let f=["apple","banana","pineapple","Orange"];
// // for(let i=0;i<f.length;i++){
// //     console.log(i,f[i]);
// // }

// // let a=[ ["Ironman","Thor","Shubham"],["Geeta","Wonder Woman","Flash"]];
// // for(let i=0;i<a.length;i++){
// //     console.log(i,a[i]);
// //     for(let j=0;j<a[i].length;j++){
// //         console.log(`j=${j} ,${a[i][j]}`);
// //     }
// // }

// //Assignment Questions
// // let arr = [1, 2, 3, 4, 5, 6, 2, 3]
// // arr.splice(1,1)
// // console.log(arr);

// // let num=prompt("Enter the Number:");
// // count=0;
// // copy=num;
// // while (copy>0) {
// //     count++;
// //     copy=Math.floor(copy/10);
// // }
// // console.log(count);

// // Object Literals
// // let twitter={
// //     username:"Shubham",
// //     content:"G20",
// //     likes:60,
// //     reposts:20,
// //     tags:10
// // };
// // console.log(twitter);

// // Guessing Game For random number
// let ask=prompt("ARe you willing to play Game?")
// if(ask=="yes"){
// let entry=prompt("Enter the Max Value :");
// let num=entry;
// let guess=Math.floor(Math.random()* num) + 1;

// while(true){
// let ans=prompt("Enter the guess:");
// if(ans=="quit"){
//     console.log("Thank You for playing this game!");
//     break;
// }
// if(ans!=guess){
//     console.log("Wrong Ans Keep it Up!");
// }
// else{
//     console.log("Your Ans is correct!");
//     break;
// }
// }
// }
// else{
//     console.log("Thank You!");
// }

// Functions 

// function poem(){
//     console.log("Twinkle Twinkle Little Star how are wonder What you are.");
// }
// poem();

//Roll a dice to get 1to6 as O/P
// function dice() {
//    let m= Math.floor(Math.random()*6)+1;
//    console.log(m);
// }
// dice();

//Average of three numbers
// function avg(a,b,c){
//     console.log(`The average of numbers ${a} ${b} ${c} is ${(a+b+c)/2}`);
// }
// avg(5,10,15);
// avg(10,20,30);

//Conacat Strings array using function
// let str=["Shubham"," ","Narendrakumar"," ","Patel"]
// function concat(str){
//     let final="";
//     for(let i=0;i<str.length;i++){
//         final+=str[i];
//     }
//     return final;
// }

//setTimeout func
// console.log("Hello");
// setTimeout( ()=>{
//     console.log("Shubham is here");
// },4000);
// console.log("Hello Dear");

// let arr= [{
//     name:"Shubham",
//     marks:50,
// },
// {
//     name:"Geeta",
//     marks:60,
    
// },
// {
//     name:"Narendra",
//     marks:80,
// }]

// arr.forEach((el)=>{
//     console.log(el.name);
// })

// let num=[10,20,3,40]
//  let ans= num.every((el)=> el%10==0
// )
// console.log(ans);

// Square and sum the array elements using the arrow function and then find the
// average of the array.

// let arr=[1,2,3,4]
// let ans=arr.forEach((el)=>{
//     return el*el;
// })
// console.log(ans);

// function dice(){
//     let guess=Math.floor((Math.random()*6)+1);
//     console.log(guess);
// }
// for(let i=1;i<=5;i++){
//     console.log(dice());
// }

// let button= document.createElement("button");
// let input=document.createElement("input");
// btn.innerText="Click ME!";

// document.querySelector("body").append(button);
// document.querySelector("body").append(input);

// JQUERY
// function func1(){
//     // $("#demo1").css('background-color','crimson');
//     // $("#demo1,#demo3").css('background-color','blue');
//     // $("#demo1,#demo3").css('color','red');
//     // $("li:even").fadeToggle();
// }

// Events
$("document").ready(function (){
    // $("#demo1").mouseenter(()=>{
    //     $("#demo1").css('width','100px');
    // });
    // $("#demo1").mouseleave(()=>{
    //     $("#demo1").css('width','400px');
    // });
    $("#demo1").hover(func1,func2);
    function func1(){
     $("#demo1").css('width','400px');
     $("#demo1").css('background-color','green');
    $("#demo1").css('transform','scale(1.5)');

    }
    function func2(){
     $("#demo1").css('width','200px');
     $("#demo1").css('background-color','red');
    }
})