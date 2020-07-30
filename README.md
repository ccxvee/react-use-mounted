![npm (scoped)](https://img.shields.io/npm/v/@ccxvee/react-use-mounted) ![David](https://img.shields.io/david/ccxvee/react-use-mounted)  ![NPM](https://img.shields.io/npm/l/@ccxvee/react-use-mounted) ![npm](https://img.shields.io/npm/dt/@ccxvee/react-use-mounted)
# @ccxvee/react-use-mounted
React custom hook that allows to check whether a component is mounted or not.

## Installation
```
npm install @ccxvee/react-use-mounted
```

##  Before usage
Probably you want to install this package to fix the next error: *"Can't perform a React state update on an unmounted component"*. But first, try to make sure that this solution is perfect in your case. Who knows, maybe you'll find something better?

For example: 
* if you need to control requests, note to [AbortController](https://developer.mozilla.org/en-US/docs/Web/API/AbortController) interface, which lets you cancel requests before a component's unmount instead of preventing a state update after;
* if you need to control timers or subscriptions, you can use a clean-up function inside the callback passed to [useEffect](https://reactjs.org/docs/hooks-reference.html#useeffect);
* and so on;

Try to consider alternative approaches. If they don't solve your problem or an *isMounted-pattern* is more handy for you, feel free to use this package.

## Usage
**Note:** isMounted is [ref object](https://reactjs.org/docs/hooks-reference.html#useref), so use isMounted.current to get a boolean value. Don't forget to include isMounted in a dependency array of useEffect, if you need [conditionally firing an effect](https://reactjs.org/docs/hooks-reference.html#conditionally-firing-an-effect).
```javascript
import { useState, useEffect } from 'react';
import useMounted from "@ccxvee/react-use-mounted";

function MyComponent() {

  const [state, setState] = useState();
  const isMounted = useMounted();

  useEffect(() => {
  
    async function veryAsyncFunction() {
      /* some hidden actions */
    }
  
    veryAsyncFunction().then((data) => {
      if (isMounted.current) {
        setState(data);
      }
    });
    
  }, [isMounted]);
  
  return null;
}
```

## License
[MIT License](https://github.com/ccxvee/react-use-mounted/blob/master/LICENSE)
