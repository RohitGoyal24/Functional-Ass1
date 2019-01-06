function counterReducer(counter, actionType){
    if (actionType === "INC"){
        let v = counter += 1; 
        console.log(`We incremented the counter to ${v}.`);
    }
    else if (actionType === "DEC"){
        let z = counter -= 1;
        console.log(`We decremented the counter to ${z}.`);
    } 
    else {
        console.log("Nothing");
    }
}
console.log(counterReducer(10, "INC"));
console.log(counterReducer(10, "DEC"));