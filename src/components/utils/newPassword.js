export const newPassword = passwordLimits => {
    const formInputs = {
        upperCase: [passwordLimits.upperCase, 'abcdefghijklmnopqrstuvwxyz'.toUpperCase()],
        lowerCase: [passwordLimits.lowerCase, 'abcdefghijklmnopqrstuvwxyz'],
        includeNumbers: [passwordLimits.includeNumbers, '0123456789'],
        includeSymbols: [passwordLimits.includeSymbols, '!@#$%^&*()_+~`|}{[]\:;?></-=']
    }

    let listOfCharacters = ''

    for (let isTrue in formInputs) {
        if (formInputs[isTrue][0]) {
            listOfCharacters += formInputs[isTrue][1]        
        } 
    }

    let password = '';
    for (let i = 0; i < passwordLimits.passwordLength; i++) {
        let randomChar = listOfCharacters[Math.floor(Math.random()*listOfCharacters.length)]
        password += randomChar
    }
    return password; 
}