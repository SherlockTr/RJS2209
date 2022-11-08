var input = [25, 50, 43, 36, 31, 26, 24, 19, 28, 24,  4, 18, 16, 48, 47, 49, 42, 15,  3, 16];
let output = [];
input.forEach((i) => {
    if (!output.includes(i)) {
        output.push(i);
    }
});
console.log(output);