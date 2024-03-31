import React, { useState, useEffect, useCallback } from 'react';

const App = () => {
  const [passwordLength, setPasswordLength] = useState(8);
  const [allowNumbers, setAllowNumbers] = useState(true);
  const [allowSpecialChars, setAllowSpecialChars] = useState(true);
  const [password, setPassword] = useState('');

  const generatePassword = useCallback(() => {
    const charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let additionalChars = '';
    if (allowNumbers) additionalChars += '0123456789';
    if (allowSpecialChars) additionalChars += '!@#$%^&*()_+~`|}{[]\\:;?><,./-=';
    let generatedPassword = '';
    for (let i = 0; i < passwordLength; i++) {
      const charSetToUse = charset + additionalChars;
      const randomIndex = Math.floor(Math.random() * charSetToUse.length);
      generatedPassword += charSetToUse[randomIndex];
    }
    setPassword(generatedPassword);
  }, [passwordLength, allowNumbers, allowSpecialChars]);

  useEffect(() => {
    generatePassword();
  }, [generatePassword]);

  const handleLengthChange = (e) => {
    const length = parseInt(e.target.value);
    setPasswordLength(length);
  };

  const handleNumberChange = () => {
    setAllowNumbers(!allowNumbers);
  };

  const handleSpecialCharsChange = () => {
    setAllowSpecialChars(!allowSpecialChars);
  };

  const handleCopyPassword = () => {
    navigator.clipboard.writeText(password);
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md">
        <h1 className="text-3xl font-bold mb-4 text-center">Password Generator</h1>
        <div className="flex items-center justify-between mb-4">
          <label htmlFor="length" className="mr-2">Password Length:</label>
          <input 
            type="range" 
            id="length" 
            min="4" 
            max="20" 
            value={passwordLength} 
            onChange={handleLengthChange} 
            className="w-48"
          />
          <span>{passwordLength}</span>
        </div>
        <label className="flex items-center mb-2">
          <input 
            type="checkbox" 
            checked={allowNumbers} 
            onChange={handleNumberChange} 
            className="mr-2"
          />
          Include Numbers
        </label>
        <br />
        <label className="flex items-center mb-2">
          <input 
            type="checkbox" 
            checked={allowSpecialChars} 
            onChange={handleSpecialCharsChange} 
            className="mr-2"
          />
          Include Special Characters
        </label>
        <br />
        <button onClick={generatePassword} className="block w-full bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 mb-4">Generate Password</button>
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-bold">Generated Password:</h2>
          <button onClick={handleCopyPassword} className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Copy</button>
        </div>
        <textarea 
          rows="4" 
          value={password} 
          readOnly 
          className="w-full p-2 border border-gray-300 rounded"
        />
      </div>
    </div>
  );
};

export default App;


