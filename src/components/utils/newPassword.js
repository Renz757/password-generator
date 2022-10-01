export const newPassword = passwordLimits => {
    const formInputs = {
        upperCase: [passwordLimits.upperCase, 'abcdefghijklmnopqrstuvwxyz'.toUpperCase()],
        lowerCase: [passwordLimits.lowerCase, 'abcdefghijklmnopqrstuvwxyz'],
        includeNumbers: [passwordLimits.includeNumbers, '0123456789'],
        includeSymbols: [passwordLimits.includeSymbols, '!@#$%^&*()_+~`|}{[]:;?></-=']
    }
    
    let listOfCharacters = ''

    //if selected, add string of characters to list 
    for (let isTrue in formInputs) {
        if (formInputs[isTrue][0]) {
            listOfCharacters += formInputs[isTrue][1]        
        } 
    }

    let password = '';
    //select random index from list of characters 
    for (let i = 0; i < passwordLimits.passwordLength; i++) {
        let randomChar = listOfCharacters[Math.floor(Math.random()*listOfCharacters.length)]
        //add random character to password string 
        password += randomChar
    }

    //if no option is selected 
    if (listOfCharacters === '') {
        return (
        <>
            <p className="text-rose-700">Invalid Selection</p> 
        </>); 
    }

    return password; 
}