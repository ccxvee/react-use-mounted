![npm (scoped)](https://img.shields.io/npm/v/@ccxvee/react-use-mounted) ![David](https://img.shields.io/david/ccxvee/react-use-mounted)  ![NPM](https://img.shields.io/npm/l/@ccxvee/react-use-mounted) ![npm](https://img.shields.io/npm/dt/@ccxvee/react-use-mounted)
# @ccxvee/react-use-mounted
React custom hook that allows to check whether a component is mounted or not.

## Note
Probably you should not use this package.

I use this hook for requests to avoid error *"Can't perform a React state update on an unmounted component"*. But actually it is not a good solution. I find more predicteble to use [AbortController](https://developer.mozilla.org/en-US/docs/Web/API/AbortController) or [CancelToken](https://github.com/axios/axios#cancellation) interfaces which allow to cancel requests directly. If you need to control timers or subscriptions use clean-up function of [useEffect](https://reactjs.org/docs/hooks-reference.html#useeffect). Possibly you find this package useful for other cases. But first try to consider alternative approaches.

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
