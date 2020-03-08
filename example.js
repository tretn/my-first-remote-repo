console.log('Ahoj')

let variable1 = 5;
const variable2 = 10;

const result = variable1 + variable2;

console.log(result)

const variable3 = "string"

function mojeFunkce(arg){
    console.log('zavolal jsem funkci ' + arg)

    return 5
}

const result2 = mojeFunkce('vjhkhjk');

console.log(result2)

const myFcn = function mojeFunkce2(arg){
    console.log('zavolal jsem funkci ' + arg)

    return 5
}

myFcn('test promene');


const myFcn2 = arg => {
    console.log('zavolal jsem funkci ' + arg)

    return 5
}


const helloWorld = () => console.log('Hello world')

helloWorld();

function a(){
    console.log('Print A')
}

function b(callback){
    console.log('Print B');
    callback();
}

b(a);

b(()=>{
    console.log('Test C')
})

console.log('---------------------------------------------------------------------------------------------------------------');

const print1 = (result) => {
    console.log('Result:')
    console.log(result)
    console.log('End of resultResult!')
}

const print2 = (result) => {
    console.log(result)
}


const sum2Nums = (a,b, decorator) => {
    const res = a + b
    decorator(res)
}

sum2Nums(1,1, print1)
sum2Nums(5,5, print2)
sum2Nums(3,3, res => console.log(res))



console.log('---------------------------------------------------------------------------------------------------------------');
