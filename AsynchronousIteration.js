async function* load(){
    yield await Promise.resolve(1000);
    yield await Promise.resolve(2000);
    yield await Promise.resolve(3000);
 }
 
 let l = load();
 l.next().then(r=>console.log(r))
 l.next().then(r=>console.log(r))
 l.next().then(r=>console.log(r))
 l.next().then(r=>console.log(r))