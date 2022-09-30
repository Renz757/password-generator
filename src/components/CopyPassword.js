import { useState } from "react"

const CopyPassword = (props) => {
    const [buttonState, setButtonstate] = useState('Copy')

    const copyHandler = () => {
        navigator.clipboard.writeText(props.password)
        buttonState === 'Copy' ? setButtonstate('Copied') : setButtonstate('Copy')
    }

    return (
        <>
            <div className="container mx-auto text-center font-mono">
                <h1 className="text-5xl mb-7 text-white">Password Generator</h1>
                <div className="container mx-auto w-80 flex justify-between m-3 p-3 bg-slate-400">
                    <p>{props.password}</p>
                    <button className="text-white" onClick={copyHandler}>{buttonState}</button>
                </div>
            </div>
        </>
    );
}

export default CopyPassword;