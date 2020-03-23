# use-callbackable-state

> Use useState from hooks as setState from classes

[![NPM](https://img.shields.io/npm/v/use-callbackable-state.svg)](https://www.npmjs.com/package/use-callbackable-state) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install use-callbackable-state
```

## Usage

```tsx
import React from 'react'
import { useCallbackableState } from 'use-callbackable-state'

function App() {
  const [ name, setName ] = useCallbackableState(""); 

  function handleInputChange(event) {
    setName(evant.target.value, (state) => console.log(`wrote ${state}`))
  }
  
  return (
    <>
      <input type="text" value={name} onChange={handleInputChange} />
      <div>Hello {name}</div>
    </>
  );
}
```

## Disclaimer

The spirit of react-hooks is to handle posibble side-effects in the out-of-the-box useEffect hook, we recommend to use it as first choice. However, this snippet is useful if you want to keep your side-effect logic in the same place.

## License

MIT © [Anicar Cabrera](https://github.com/anicarrr)
