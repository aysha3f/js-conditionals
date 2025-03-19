// 1st task
var burger = 500;
// if(burger > 500){
//     console.log('free coke');
// }
// else{
//     console.log('you have to pay 30 tk for the coke');
// }

// 2nd task
var weight = 100;
var height = 1.67;

// calculate BMI
var bmi = 'weight /( height * height)';

// if(bmi < 18.5){
//     console.log("You are underweight");
// }
// else{
//     if(bmi >= 18.5 && bmi <= 24.9){
//         console.log('You are normal');
//     }
//     else{
//         if (bmi >= 25 && bmi <= 29.9){
//                 console.log('You are overweight');
//             }
// else{
//    console.log('You are obese');}
//     }
// }



//  task 3 

var scores = 95;

// if(scores >= 90 && scores <= 100 ){
//     console.log("Grade: A");
// }
// else{
//     if(scores >= 80 && scores <= 89){
//         console.log("Grade: B");
//     }
//     else{
//         if(scores >= 70 && scores <= 79){
//             console.log("Grade: C");
//         }
   
//     else{
//         if(scores >= 60 && scores <= 69){
//             console.log("Grade: D");
//         }
//         else{
//             console.log("Grade: F")
//         }
//     }
//     }
// }
// alternative way


// if(scores >= 90 && scores <= 100 ){
//          console.log("Grade: A");
//     }
//     else if(scores >= 80 && scores <= 89){
//               console.log("Grade: B");}
//               else if
//                     (scores >= 70 && scores <= 79){
//                          console.log("Grade: C");
//                     }
//               else if
//                     (scores >= 60 && scores <= 69){
//                          console.log("Grade: D");
//                     }
//                     else {
//                         console.log("Grade: F");
//                     }
                //    task -4

    // var myScore = 80;
    // var friendScore = 45;
    // if (myScore >= 80){
    
    //     if (friendScore > 80){
    //         console.log("Go for a launch");
    //     }
    //     else if (friendScore >= 60){
    //         console.log("Good luck next time");
    //     }
    //     else if (friendScore >= 40){
    //         console.log("Keep your friend's message unseen");
    //     }
    //     else{
    //         console.log("Block your friend.");
    //     }
    // }
    // else{
    //     console.log("Go home and sleep. Act sad.");
    //  }

    // task-5


    // var num1 = 0;
    // var num2 = 5;
    // var result = (num1 > num2) ?num1 * 2 : num1 + num2
    // console.log(result);


    // last Task

/***

Ticket fare Calculator
    - Children (age < 10): free
    - Students get a 50% discount
    - Senior citizens (age >= 60) gets a 15% Discount
    - Otherwise Regular ticket fare 800 tk
*/

    var age = 20;
    var ticketFare = 800;
    var isStudent = true; 
   
    if(age < 10){
        console.log("Free")
    }
    else if (isStudent){
        
        var discountFare = ticketFare * 50 / 100
        var payAmount =  ticketFare -  discountFare
        console.log(payAmount);
    }
    else if (age >= 60){
        var discountFare = ticketFare * 15 / 100
        var payAmount =  ticketFare -  discountFare
        console.log(payAmount);
    }
    else{
        console.log(800);
    }