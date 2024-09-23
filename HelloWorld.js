function CreateHelloWorld(){
    return function(){
        return "Hello World!"
    };

    }
const Hello = CreateHelloWorld()



console.log(Hello([]));
console.log(Hello({}, null, 42)); 

