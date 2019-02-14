# The Pirate Router

A key-access based router for http client
requests. You register some keys and a route and it
gets it!

Usage:
```js
import Router from 'the-pirate-router'

router.setServer('https://example.exampleUrl')
const router = new Router({
    User: {
        register: 'user/register'
    }
})

const form = { user: 'my-user', pwd: 'password123' }
router.post('User.register', form) // Nail it!!!
    .then(result => console.log('Result: ', result))
    .catch(error => console.log('OMG an error!!', error))
    .finally(() => console.log('All done!'))

```
