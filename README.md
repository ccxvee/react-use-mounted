![npm (scoped)](https://img.shields.io/npm/v/@ccxvee/react-use-mounted) ![David](https://img.shields.io/david/ccxvee/react-use-mounted)  ![NPM](https://img.shields.io/npm/l/@ccxvee/react-use-mounted) ![npm](https://img.shields.io/npm/dt/@ccxvee/react-use-mounted)
# @ccxvee/react-use-mounted
React custom hook that allows to check whether a component is mounted or not.

## Installation
```
npm install @ccxvee/react-use-mounted
```

##  Advice before usage
Probably you decided to install this package to fix the next error: *Can't perform a React state update on an unmounted component*.  But actually it is not a good solution.
When you need to control requests it can be better to use [AbortController](https://developer.mozilla.org/en-US/docs/Web/API/AbortController) or [CancelToken](https://github.com/axios/axios#cancellation) interfaces which allow to cancel requests *before* unmount instead of prevent state update *after* unmount. When you need to control timers or subscriptions use clean-up function of [useEffect](https://reactjs.org/docs/hooks-reference.html#useeffect). However you still can find this package useful for other non-trivial cases. But first try to consider alternative approaches.

## Usage
**Note:** isMounted is ref, so use isMounted.current to get a boolean value
```javascript
import { useState, useEffect } from 'react';
import useMounted from "@ccxvee/react-use-mounted";

function MyComponent() {

  const [state, setState] = useState();
  const isMounted = useMounted();

  useEffect(() => {
    async function veryAsyncFunction() {
      //some hidden actions
    }
  
    veryAsyncFunction().then((data) => {
      if (isMounted.current) {
        setState(data);
      }
    });
    
  });
  
  return null;
}
```

## License
[MIT License](https://github.com/ccxvee/react-use-mounted/blob/master/LICENSE)
