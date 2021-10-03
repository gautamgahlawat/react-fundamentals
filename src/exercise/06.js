// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'

function UsernameForm({onSubmitUsername}) {
  const usernameInputRef = React.useRef()
  const [userName, setUserName] = React.useState('')


  const handleSubmit = (event) => {
    event.preventDefault()
    // const value = event.target.elements.usernameInput.value;
    // const value = usernameInputRef.current.value;
    onSubmitUsername(userName)
  }


  const handleChange = (event) => {
    const {value} = event.target
    setUserName(value.toLowerCase())
    // serError(isLowerCase ? null : 'username must be lower case')
  }
  

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="usernameInput">Username:</label>
        <input onChange={handleChange} value={userName}
          ref={usernameInputRef}
          id="usernameInput"
          name='username' type="text" />
      </div>
      <button type="submit">Submit</button>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
