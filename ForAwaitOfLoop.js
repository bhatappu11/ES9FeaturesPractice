async function* load(){
    yield await Promise.resolve(1000);
    yield await Promise.resolve(2000);
    yield await Promise.resolve(3000);
 }

 async function test(){
    for await (const val of load()){
       console.log(val)
    }
 }
 test();
 console.log('end')