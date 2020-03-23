## Advance Example Case

```tsx
import React, { useState } from 'react';

import { useCallbackableState } from 'use-callbackable-state';

function App() {
  const [isLoading, setLoading] = useCallbackableState(false);
  const [data, setData] = useState([]);

  function handleButtonClick() {
    setLoading(true, () => {
      // simulate 1 second fetching
      setTimeout(() => {
        setData([
          { description: "Item 1"},
          { description: "Item 2"},
        ]);
        setLoading(false);
      }, 1000);
    });
  }

  return (
    <div>
      <button onClick={handleButtonClick}>Fetch from API</button>
      {isLoading && <p>Loading...</p>}
      {!isLoading && data.length > 0 && <p>{JSON.stringify(data, null, 1)}</p>}
    </div>
  )
}

export default App;
```