var query = require('samp-query')
var options = {
    host: 'jogarbmrp.com',
    port: '7777'
}

query (options, function(error, response) {
    if(error)
    {
        console.log(error)
    }
    if(response)
    {
        console.log(response)
    }
});