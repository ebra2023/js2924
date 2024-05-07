// let pin = 1, balance = 500, yourPin = Number(prompt('-EVCPLUS- Geli pinkaaga'));
// if(yourPin===pin){
//     let option = Number(prompt(`
//     1. Itus haraaga
//     2. Kaarka ku hadalka ku shubo
//     3. bix biil
//     4. bix biil
//     5. warbixin kooban
//     `));

//     switch(option){
//         case 1:
//             alert("haraagaagu waa"+balance)
//         break;
//         case 2:
//             let kuhadal = Number(prompt('geli lacagta'))
//             if(kuhadal<=balance){
//                 alert('waxaad ku shubatay lacag'+kuhadal)
//             } else{
//                 alert('kuguma filna haraaagaaga')
//             }
//             break;
//             case 3:
//                 let option = Number(prompt(`bixi biil
//                 1. Post Paid
//                 2. Ku iibso`));
//             if(option){
//                 let option = Number(prompt(`Post Paid
//                 1. Ogow Biilka
//                 2. Bixi Biil
//                 3. Ka Bixi Biil`))
//             }
//             let BixiBiil = Number(prompt(`fadlan Geli Lacagta`));
//             let hubin = Number(prompt(`Ma Hubtaa inaa bixisid biil lacagtiisu tahay: $${BixiBiil}
//             1. Haa
//             2. Maya`));
//             if(hubin===1){
//                 if(BixiBiil<balance){
//                     alert(`waxaad bixisay biil dhan $${BixiBiil}+kuhadal`)
//                 }else{
//                     alert(`Macalin Haraagaaga kuguma filma `)
//                 }
                
//             }    
//             let kabixiBiil = Number(prompt(`Fadlan Geli Mobile-ka`));
//             let lacagta = Number(prompt(`Fadlan Geli lacagta`));
//             let hubinta = Number(prompt(`Ma Hubtaa inaad bixisid biil lacagtiisu tahay:$${lacagta} oo laga rabo tel No  ${kabixiBiil} 
//             1. Haa
//             2. Maya`+kuhadal))                   
//     }
// }else{
//     alert('Pin-kagu waa qalad maclinow markale ku celi ')
// }if (yourPin===pin!=yourPin) {
//     let pin = 1, balance = 500, yourPin = Number(prompt('Xariifow waaa markii kugu dambaysay,is adkay'));
//     alert('Waaba kaa shakiyay, Tuug maatahayna xaytahay pinkan 3 mar aadan xasuusan')
// }









// / there are two type of functions : built-in functions and user defined functions

// function definition and calling 
//write js function that calculates sum of  any two number .

// sum(5,6)

// function sum(number1, number2){
//     console.log(number1+ number2);
// }
// sum(20,25);


// arrow function that calculates sum of

// function salaan(name) {
//     console.log(`waa ku salaamey, ${name}!`);
//   }
  
//   salaan('hassan'); 


// standar function
// function salaan(name){
//     console.log('waan ku salamay ', name);
// }
// salaan("abdullahi")


// declarative functions:

 
// var add = function(n1,n2){
//     return n1+n2;
// }
// console.log(add(6,8));



// function salaan(fname, lname) {
//     return `waa ku salamay ${fname} ${lname}`;
// }
// console.log(salaan('Mohamed', 'Ali ibrahim'));

// arrow function

// let salaan = (fname, lname) => `waa ku salamay ${fname} ${lname}`;
// console.log(salaan('Aisha', 'Abdirahman'));


// let hours =12;
// if (hours >=6 && hours < 12){
//     console.log('good morning');
// }
// else if (hours >= 12 && hours < 18 ){
//     console.log('good afternoon');


// }














// javscript clasess inheritance

// class person{
//     constructor(name){
//         this.name = name;
//     }
//     greet(){
//         console.log("hello" + this.name);
//     }
// }
// class student extends person{

// }
// const student1 = new student("peter");

// student1.greet();



// static mehod?


// class person{
//     constructor(name){
//         this.name = name;
//     }
//     static greet(y){
//         console.log("hello" + y.name);
//     }
// }
// const person1 = new person ("abdi");

// person.greet(person1);


// private methods in js 

// class person{
//     constructor (fristname,lastname){
//         this.fristname = fristname;
//         this.lastname = lastname;
//     }
//     display(){
//         console.log(this.#FullName());
//     }
//     #FullName(){
//         return this.fristname + " " + this.lastname;
//     }
// }
//  const person1 = new person("adbi","moha");

// //  console.log(person1.FullName())
// person1.display();








// class person {
//     constructor(name){
//         this.name = name;   

//     }
//     greet(){
// console.log("hello" + this.name);
//     }
// }
// class student extends person{

// }
// const person1 = new person ("John");

// person1.greet();





// class person{
//     constructor(name){
//         this.name=name;
//     }
//     greet(){
//         console.log("hello" + this.name);
//     }
// }
// class student extends person{

// }
// const student1 = new student("John");

// student1.greet();



// class person{

//     constructor(name){
//         this.name=name;
//     }
//     static greet(x){
//         console.log("hello" + x.name);
//     }
// }
// const person1 = new person("abdi");
// person.greet(person1)



// class person{
//     constructor(fristname,lastname){
//         this.fristname = fristname;
//         this.lastname = lastname;
//     }
//     display(){
//         console.log(this.#fullname());
//     }
//     #fullname(){
//         return this.fristname + " " + this.lastname;
//     }
// }
// const person1 = new person("moha","abdi");
// // console.log(person1.fulname());

// person1.display();


// var a=20;
// var b=10;
// var c=a+b;
// console.log(c);



// let names=['ibrahin','lily','cade'];


// for(let i=0; i<names.length; i++){
//     console.log(names[i]);

// }

// let  name={
//     "name": "ibraahim",
//     "phone": "155376",
//     "adress": "x/jajab",
//     "sex": "male",
// }
// for(let key in name){
// console.log(`${key}:{name[key]}`);
// }




//  let add = function(n1,n2){
//     return n1+n2;
// }
// console.log(add(6,8));


// let dob=document.querySelector("#dbo");
// let age=document.querySelector("#age");
// const year =2024;
// dob.addEventListener("keyup",function(){
// age.innerHTML=year-dbo.value;
// // console.log(dbo.value);
// });








// let opject={
// name:"ibra",
// phone:"048447363"
// }
// console.log(opject);

// for(let key in opject){
//     console.log(`${key}:${opject[key]}`);
// }



// function sum(n1,n2){
//     return n1+n2;
// }
// console.log(sum(9,8));




































































