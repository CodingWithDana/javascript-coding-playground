// A palindrome is a string that reads the same forward and backward. It is also case-insensitive and ignores all non-alphanumeric characters.
//  Note: Alphanumeric characters consist of letters (A-Z, a-z) and numbers (0-9).

// Q: Given a string s, return true if it is a palindrome, otherwise return false.

// Example
// Input: s = "Was it a car or a cat I saw?"
// Output: true, bc  after considering only alphanumerical characters we have "wasitacaroracatisaw", which is a palindrome


// Solution
// Helper function: Check if a character is alphanumeric (means only letters and digits, everthing else is ignored)
function isAlphanumeric(char) {
    return (
        (char >= 'a' && char <= 'z') || (char >= 'A' && char <= 'Z') || (char >= '0' && char <= '9') 
    );
}

function isPalindrome(s) {
    // create an empty string
    let newStr = "";
    // loop through each character c in the input string to check if c is alphanumeric, convert to lowercase then add to newStr
    for (let c of s) {
        if (isAlphanumeric(c)) {
            newStr += c.toLowerCase();
        }
    }
    return newStr === newStr.split("").reverse().join("");
}

// Time Complexity: O(n)
// Space Complexity: O(n)
// where n is he length of the input string.

// Test cases
const s = "Was it a car or a cat I saw?"
const s1 = "tab a cat"
console.log(isPalindrome(s));
console.log(isPalindrome(s1));
