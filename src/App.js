import './App.css';
import { useState } from 'react';
import CopyPassword from './components/CopyPassword';
import PasswordForm from './components/passwordForm';
import {newPassword} from './components/utils/newPassword.js'


function App() {

  const [password, setPassword] = useState('')

  const saveFormDataHandler = (data) => {
    const formData = {
      ...data,
      id: Math.random().toString()
    }
    setPassword(newPassword(formData))
  }

  
  return (
    <div className="App h-screen mx-auto bg-zinc-700 relative">
      <div className='bg-emerald-700 relative top-40 w-9/12 mx-auto p-7'>
        <CopyPassword password={password}/> 
        <PasswordForm onSaveFormData={saveFormDataHandler}/>
      </div>
    </div>
  );
}

export default App;
