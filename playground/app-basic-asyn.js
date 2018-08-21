
console.log('Start app');

setTimeout(()=>{
    console.log("Inside callback: is printed after 2s");
}, 2000);

setTimeout(()=>{
    console.log("Second printed after 0");
}, 0);


for(let i = 0; i < 100; i++){
    if(i%10==0) console.log(`i = ${i}`);
}

console.log('End app');