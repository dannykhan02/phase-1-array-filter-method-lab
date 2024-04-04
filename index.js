// Code your solution here

function findMatching(drivers, name) {
    return drivers.filter(driver => driver.toLowerCase() === name.toLowerCase());
}

// Define the function fuzzyMatch
function fuzzyMatch(drivers, letters) {
    return drivers.filter(driver => driver.toLowerCase().startsWith(letters.toLowerCase()));
}

// Define the function matchName
function matchName(drivers, name) {
    return drivers.filter(driver => driver.name === name);
}

// Export the functions if you are using them in another file
module.exports = {
    findMatching,
    fuzzyMatch,
    matchName
};