// code your solution here
// Function to express weekend activity
function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`;
}

// Function to express work activity on Monday
function mondayWork(activity = "go to the office") {
    return `This Monday, I will ${activity}.`;
}

// Function to wrap an adjective with visual flair
function wrapAdjective(wrapper = "*") {
    return function(adjective = "special") {
        return `You are ${wrapper}${adjective}${wrapper}!`;
    };
}


console.log(saturdayFun()); // "This Saturday, I want to roller-skate!"


console.log(mondayWork()); // "This Monday, I will go to the office."


const wrapWithExclamation = wrapAdjective("!!!");
console.log(wrapWithExclamation("a hard worker")); // "You are !!!a hard worker!!!"

const wrapWithPercent = wrapAdjective("%");
console.log(wrapWithPercent("a dedicated programmer")); // "You are %a dedicated programmer%!"

// Export the functions for testing (if required)
module.exports = {
    saturdayFun,
    mondayWork,
    wrapAdjective
};


