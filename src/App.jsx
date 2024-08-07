import React, { useState } from 'react'

const App = () => {
  const tree = "";
  const [newX, setNewX] = useState(true);

  return (
    <div>
      <div className="ClassBox">
        <p>is It rendering {newX ? "Crow" : "Mouse"}</p>
        <h2>Hello there</h2>
      </div>
    </div>
  )
}

export default App