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
* if you need to control requests, note to [AbortController](https://developer.mozilla.org/en-US/docs/Web/API/AbortController) interface, which lets you cancel requests before a component unmounts instead of preventing the component state update after an unmount;
* if you need to control timers or subscriptions, you can use a clean-up function inside the callback passed to [useEffect](https://reactjs.org/docs/hooks-reference.html#useeffect);
* and so on;

However, if alternative approaches don't solve your problem or an *isMounted-pattern* is more handy for you, feel free to use this package.

## Usage
**Note:** isMounted is a [ref object](https://reactjs.org/docs/hooks-reference.html#useref), so use isMounted.current to get a boolean value. Don't forget to include isMounted in a dependency array passed to useEffect if you need [conditionally firing an effect](https://reactjs.org/docs/hooks-reference.html#conditionally-firing-an-effect).
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

## Comparison with similar packages
There are many packages in npm that implement isMounted-pattern. However, the most popular of them have significant disadvantages.
* [react-is-mounted-hook](https://www.npmjs.com/package/react-is-mounted-hook) has thousands weekly downloads and one crucial issue. The hook returns a function that recreates on every render and breaks your [conditionally firing effect](https://reactjs.org/docs/hooks-reference.html#conditionally-firing-an-effect).
* [react-use-mounted](https://www.npmjs.com/package/react-use-mounted) has hundreds weekly downloads and one weighty dependency. The package takes too much memory space for such a tiny hook. To be exact, [about 2 megabytes](https://packagephobia.com/result?p=react-use-mounted).

Unlike these, **@ccxvee/react-use-mounted** have no dependencies at all and isMounted ref, returned by useMounted hook, do not affect your [useEffect](https://reactjs.org/docs/hooks-reference.html#useeffect).

## License
[MIT License](https://github.com/ccxvee/react-use-mounted/blob/master/LICENSE)
