export default function Request (method) {
    validateMethod(method)
    return {
        async exec () {

        }
    }
}

const availableMethods = ['get', 'post', 'patch', 'put', 'delete']
function validateMethod(method) {
    if (availableMethods.indexOf(method) === -1) {
        throw new Error('invalid http method: ' + method)
    }
}
