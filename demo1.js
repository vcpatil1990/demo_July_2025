// for-ofloop

let a="Pune";

let size=0;
for(let i of a){
    console.log("i=",i);
    size++;
}
console.log(size);

//for in loop
let patient = {
    Pname: "Ashok Patil",
    age: 45,
    pulse: 60,
    isFine: true
};
for(let key in patient){
    console.log(key);
}
