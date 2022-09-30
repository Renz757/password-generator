import { useState } from "react";

const PasswordForm = (props) => {
    let MIN = 12;
    let MAX = 24;
    const [passwordLength, setPasswordLength] = useState(12);
    
    const [upperCase, setUppercase] = useState(false);
    const [lowerCase, setLowercase] = useState(false);
    const [includeNumbers, setIncludenumbers] = useState(false);
    const [includeSymbols, setIncludesymbols] = useState(false);

    const passwordLengthHandler = event => {
        setPasswordLength(event.target.value)
    }

    const firstNameHandler = (event) => {
        upperCase ? setUppercase(false) : setUppercase(true)
    }

    const lastNameHandler = (event) => {
        lowerCase ? setLowercase(false) : setLowercase(true)
    }

    const numberHandler = (event) => {
        includeNumbers ? setIncludenumbers(false) : setIncludenumbers(true)
    }

    const symbolHandler = (event) => {
        includeSymbols ? setIncludesymbols(false) : setIncludesymbols(true)
    }

    const submitHandler = event => {
        event.preventDefault()

        const formInputs = {
            passwordLength: passwordLength,
            upperCase: upperCase,
            lowerCase: lowerCase,
            includeNumbers: includeNumbers,
            includeSymbols: includeSymbols
        }

        props.onSaveFormData(formInputs);
    }



    

    return (
        <>
            <div>
                <form 
                    className="container mx-auto w-80 relative font-mono text-lg"
                    onSubmit={submitHandler}
                    >
                    <div className="flex flex-row justify-between">
                        <input 
                            type="number"
                            id="passwordLength"
                            min={MIN}
                            max={MAX}
                            value={passwordLength}
                            onChange={passwordLengthHandler}

                        />
                        <label htmlFor="passwordLength" className="text-white">Password Length</label>
                    </div>

                    <div className="flex flex-row justify-between">
                        <input
                            type='checkbox'
                            id="upperCase"
                            onClick={firstNameHandler}    
                        />
                        <label htmlFor="upperCase" className="text-left ml-5 text-white">Include Upper Case Letters</label>
                    </div>

                    <div className="flex flex-row justify-between">
                        <input
                            type='checkbox'
                            id="lowerCase"
                            onClick={lastNameHandler}
                            
                        />
                        <label htmlFor="lowerCase" className="text-left ml-5 text-white">Include Lower Case Letters</label>
                    </div>

                    <div className="flex flex-row justify-between">
                        <input
                            type='checkbox'
                            id="numbers"
                            onClick={numberHandler}
                          
                        />
                        <label htmlFor="numbers" className="text-left ml-5 text-white">Include Numbers</label>
                    </div>

                    <div className="flex flex-row justify-between">
                        <input
                            type='checkbox'
                            id="symbols"
                            onClick={symbolHandler}
                            
                        />
                        <label htmlFor="symbols" className="text-left ml-5 text-white">Include Symbols</label>
                    </div>

                    <button className="bg-orange-400 p-3 rounded mt-5 text-white" type="submit">Generate</button>
                </form>
            </div>
        </>
    );
}

export default PasswordForm;