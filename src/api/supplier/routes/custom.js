module.exports = {
    routes: [
        {
            method: 'GET',
            path: '/suppliers/:slug',
            handler: 'supplier.findOne',
            config: {
                auth: false
            }
        }
    ]
}