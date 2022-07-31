function treatAsUTC(date) {
    var result = new Date(date);
    result.setMinutes(result.getMinutes() - result.getTimezoneOffset());
    return result;
}

// Compute the amount of days between 2 days
function daysBetween(startDate, endDate) {
    var millisecondsPerDay = 24 * 60 * 60 * 1000;
    return (treatAsUTC(endDate) - treatAsUTC(startDate)) / millisecondsPerDay;
}

//Creates a string from an array
function stringifyDate(date) {
    var string = [...date]
    string = string.map(item => item.toLocaleString('en-US', {
        minimumIntegerDigits: 2,
        useGrouping: false
    }))
    string = string.join("-")
    return string;
}

export {daysBetween, stringifyDate};