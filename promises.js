function createPromise(input) {
    try {
    const promise = new Promise(resolve, reject) => {
        
        if (input ==="success") {
            resolve('the promise has resolved!');
;
        } else {
            reject ('the promise has been rejected: (');
        }
    }};

    return promise;

    } catch (error) {
    console.log(error);
}

try {
    const result  = await createPromise('success!')
   console.log(results);
} catch(error) {
    console.error(error);
}