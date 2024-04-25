function randPositiveOddNos(n) {
    return Math.floor(Math.random() * n) + 1;
}
const n = ['14'];
console.log(n); //14 so far

const randomNum = randPositiveOddNos(n);
console.log(randomNum);
