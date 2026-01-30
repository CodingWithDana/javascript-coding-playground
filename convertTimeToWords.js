// Write an function that converts time into the corresponding english words - eg. '8:30' -> 'half past eight'
// Examples
//      '0:00' > 'midnight'
//      '12:00' > 'midday'
//      '2:00' > 'two o'clock'
//      '2:03' > 'three past two'
//      '2:11' > 'eleven past two'
//      '2:15' > 'quarter past two' 
//      '2:30' > 'half past two'
//      '2:33' > 'twenty seven to three'
//      '2:40' > 'twenty to three'
//      '2:45' > 'quarter to three' 
//      '2:55' > 'five to three'

// Core algorithm
// 1. split the time string into hour and minute parts 
// 2. convert numbers into words
// 3. handle special cases
    // midnight 0:00
    // midday 
// 4. If `minute` === 0 -> "hour o clock"
// 5. If `minute` === 15 || 30 || 45 -> use special phrase (quarter, half)
// 6. If `minute` < 30 -> "minutes past hour"
// 7. If `minute` > 30 -> "minutes to the next hour"

// SOLUTION STARTS HERE
// expecting time to be a string in the format like '8:15' or '12:30'
function convertTimeToWords(time) {
    // split the input time string into hour and minute parts, e.g.: "2:45" -> ["2", "45"]
    const [hStr, mStr] = time.split(":");
    // convert string values into numbers
    const hour = Number(hStr);
    const minute = Number(mStr);

    // now create an array to convert hour numbers into words
    // note: index = hour number, value = spoken word
    // we repeat "twelve" and "one" at the end to handle "to the next hour"
    const numbers = [
        "twelve",   // 0
        "one",     // 1
        "two",     // 2
        "three",   // 3
        "four",    // 4
        "five",    // 5
        "six",     // 6
        "seven",   // 7
        "eight",   // 8
        "nine",    // 9
        "ten",    // 10
        "eleven", // 11
        "twelve", // 12
        "one",    // 13
    ]
    // next create an object to convert minute numbers into words
    // only need up to 29 because after 30, we count backwards ("to")
    const minuteWords = {
        1: "one",
        2: "two",
        3: "three",
        4: "four",
        5: "five",
        6: "six",
        7: "seven",
        8: "eight",
        9: "nine",
        10: "ten",
        11: "eleven",
        12: "twelve",
        13: "thirteen",
        14: "fourteen",
        15: "quarter", // special english rule
        16: "sixteen",
        17: "seventeen",
        18: "eighteen",
        19: "nineteen",
        20: "twenty",
        21: "twenty one",
        22: "twenty two",
        23: "twenty three",
        24: "twenty four",
        25: "twenty five",
        26: "twenty six",
        27: "twenty seven",
        28: "twenty eight",
        29: "twenty nine",
        30: "half", //another special english rule
    };

    // SPECIAL CASES FIRST
    // 0:00 midnight
    if (hour === 0 && minute === 0) {
        return "midnight";
    }

    // 12:00 midday
    if (hour === 12 && minute === 0) {
        return "midday";
    }

    // exact hour
    // if there are no minutes
    // example: 5:00 five o'clock
    if (minute === 0){
        return `${numbers[hour]} o'clock`;
    }

    // special minute phrases
    // 15 minutes -> quarter past, 30 minutes -> half past
    if (minute === 15 || minute === 30) {
        return `${minuteWords[minute]} past ${numbers[hour]}`;
    }

    // 45 minutes -> quarter to the next hour
    if (minute === 45){
        return `quarter to ${numbers[hour + 1]}`;
    }

    // GENERAL RULES NEXT
    // if minutes are less than 30
    // example: 2:11 -> "eleven past two"
    if (minute < 30) {
        return `${minuteWords[minute]} past ${numbers[hour]}`;
    }

    // if minutes are more than 30
    // count backwards to the next hour
    // example: 2:40 -> 20 to 3
    return `${minuteWords[60 - minute]} to ${numbers[hour + 1]}`;
}


// const time = "2:00"
// const time = "5:00"
// const time = "2:11"
// const time = "2:40"
// const time = "2:30"
// const time = "1:15"

console.log(convertTimeToWords(time))

module.exports = { convertTimeToWords };
