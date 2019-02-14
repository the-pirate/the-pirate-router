# The Pirate Router

*UNDER DEVELOPMENT*

This lib doesn't work. It's still being developed.
The examples below are just the way it should work
once its complete.

A key-access based router for http client
requests. You register some keys and a route and it
gets it!

Usage:
```js
import Router from 'the-pirate-router'

const router = new Router({
    User: {
        register: 'user/register'
    }
})

router.setServer('https://example.exampleUrl')

const form = { user: 'my-user', pwd: 'password123' }
router.post('User.register', form) // Nail it!!!
    .then(result => console.log('Result: ', result))
    .catch(error => console.log('OMG an error!!', error))
    .finally(() => console.log('All done!'))

```
