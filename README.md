![npm (scoped)](https://img.shields.io/npm/v/@ccxvee/react-use-mounted) ![David](https://img.shields.io/david/ccxvee/react-use-mounted)  ![NPM](https://img.shields.io/npm/l/@ccxvee/react-use-mounted) ![npm](https://img.shields.io/npm/dt/@ccxvee/react-use-mounted)
# @ccxvee/react-use-mounted
React custom hook that allows to check whether a component is mounted or not.

## Installation
```
npm install @ccxvee/react-use-mounted
```

## Usage
```javascript
import { useState, useEffect } from 'react';
import useMounted from "@ccxvee/react-use-mounted";

function MyComponent() {
  
  const [state, setState] = useState();
  const isMounted = useMounted(); //isMounted is ref, so use isMounted.current to get a boolean value

  useEffect(() => {
    
    //Prevent update on probably an unmounted component
    
    setTimeout(() => {
      if (isMounted.current) {
        setState("new value");
      }
    }, 1000000);  
    
  });

  return null;
}
```

## License
[MIT License](https://github.com/ccxvee/react-use-mounted/blob/master/LICENSE)
