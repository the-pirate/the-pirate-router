import axios from 'axios/index'

export default function Router (routeMap) {
    this.server = ''
}

Router.prototype.setServer = (serverUrl) => {
    this.serverUrl = serverUrl
}

const methods = ['get', 'post', 'put', 'patch', 'delete']

for (const method of methods) {
    Router.prototype[method] = () => {
        return axios({
            method,
            dataType: 'json',
            url: this.serverUrl
        })
    }
}
