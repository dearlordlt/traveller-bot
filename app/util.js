const SI_POSTFIXES = ["", "Thousand", "Million", "Billion", "Trillion", "Quadrillion", "Quintillion"];

// copied from interwebs so must work .. right ?
const bigNumber = (number) => {

    // what tier? (determines SI prefix)
    const tier = Math.log10(Math.abs(number)) / 3 | 0;

    // if zero, we don't need a prefix
    if (tier == 0) return number;

    // get postfix and determine scale
    const postfix = SI_POSTFIXES[tier];
    const scale = Math.pow(10, tier * 3);

    // scale the number
    const scaled = number / scale;

    // format number and add postfix as suffix
    let formatted = scaled.toFixed(1) + '';

    // remove '.0' case
    if (/\.0$/.test(formatted))
        formatted = formatted.substr(0, formatted.length - 2);

    return formatted + postfix;
}

module.exports = {
    bigNumber,
}
