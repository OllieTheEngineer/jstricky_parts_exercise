function curriedAdd(total) {
    if(total === undefined) return 0;
    return function nextAdder(num){
        if(num === undefined) return total;
        total += num;
        return nextAdder;
    };
}

module.exports = { curriedAdd };

/*

1- write a function called curriedAdd
if you pass a number to this function it will return a new function

*/