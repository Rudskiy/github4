function incomeTaxCalculator(income) {
    income = rl.question(income, callback)
    const procent = 0.15;
    return(income * procent);
}
console.log(incomeTaxCalculator(1000));
