// ========================= Fundamental 1 ====================================
// var promise = new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         // once you resolve or reject. It likes a return a signal for callback function in then
//         // ---> only first signal has effect
//         resolve("First of all");
//         resolve('Able to print');
//         reject("Unable to print");
//     }, 2000);
    
// });

// promise.then((message)=>{
//     console.log(message);
// }, (errorMessage)=>{
//     console.log(errorMessage);
// });



// ========================= Fundamental 2 ======================================

// var asynAdd = (a, b)=>{
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             if(typeof a === 'number' && typeof b === 'number'){
//                 resolve(a+b);
//             }else{
//                 reject('Arguments is invalid');
//             }
//         }, 2000);
//     });
// };


// asynAdd(5, 7).then((result)=>{
//     console.log('Sum is: ', result);
// }, (errorMessage)=>{
//     console.log(errorMessage);
// });


// //========================= Fundamental 3 ======================================

// var asynAdd = (a, b)=>{
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             if(typeof a === 'number' && typeof b === 'number'){
//                 resolve(a+b);
//             }else{
//                 reject('Arguments is invalid');
//             }
//         }, 2000);
//     });
// };


// asynAdd('5', 7).then((result)=>{
//     console.log('Sum1 is: ', result);
//     return asynAdd(result, 33);
// }, (errorMessage)=>{
//     console.log(errorMessage);
// }).then((result)=>{
//     console.log('Sum2 is: ', result);
// }, (errorMessage)=>{
//     console.log(errorMessage);
// });


// //========================= Fundamental 4 ======================================

// var asynAdd = (a, b)=>{
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             if(typeof a === 'number' && typeof b === 'number'){
//                 resolve(a+b);
//             }else{
//                 reject('Arguments is invalid');
//             }
//         }, 2000);
//     });
// };


// asynAdd('5', 7).then((result)=>{
//     console.log('Sum1 is: ', result);
//     return asynAdd(result, 33);
// }).then((result)=>{
//     console.log('Sum2 is: ', result);
// }).catch((errorMessage)=>{
//     console.log(errorMessage);
// });




