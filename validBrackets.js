// You are given a string s consisting of the following characters: '(', ')', '{', '}', '[' and ']'.

// The input string s is valid if and only if:

// Every open bracket is closed by the same type of close bracket.
// Open brackets are closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.
// Return true if s is a valid string, and false otherwise.

/* NOTE: this is a classic Stack problem
We can use a stack to store characters.
Iterate through the string by index. For an opening bracket, push it onto the stack. 
If the bracket is a closing type, check for the corresponding opening bracket at the top of the stack. 
If we don't find the corresponding opening bracket, immediately return false */

function isValid(s) {
    const stack = [];

    // map closing brackets to their matching opening brackets
    const matching = {
        ')':'(',
        '}':'{',
        ']':'[',
    };

    // iterate through each character of the input string s
    for (let char of s) {
        // if this character is a closing bracket
        if (char in matching) {
            //  take the most recent opening bracket
            const top = stack.pop();
            // check if the most recent opening bracket matches what this closing bracket expects
            if (top !== matching[char]) return false;
        } else {
            // otherwise it's an opening bracket
            stack.push(char);
        }
    }
    // if stack is empty, all brackets were matched
    return stack.length === 0;
}

// Test cases
const s = "[]";
const s1 = "([{}])";
const s2 = "[(])";
console.log(isValid(s));
console.log(isValid(s1));
console.log(isValid(s2));