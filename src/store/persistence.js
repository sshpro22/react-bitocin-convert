export default {
    entities: {
        user: window.localStorage.user ? JSON.parse(window.localStorage.user) : false,
        rates: {
            data: {}
        }
    }
}