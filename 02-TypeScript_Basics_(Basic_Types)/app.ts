let userInput: unknown;
let userName: string;

userInput = 5;
userName = "darshan"

console.log(userName)

// userName = userInput; // Not Allowed
if (typeof userInput === 'string')
    userName = userInput;

function generateError(message: string, code: number) {
    throw {message: message, errorCode: code}
}

generateError('something went wrong!', 404)
