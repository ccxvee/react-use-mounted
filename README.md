# @ccxvee/react-use-mounted

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
  const isMounted = useMounted();

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
