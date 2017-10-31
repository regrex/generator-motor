import React from 'react'
import request from 'API/demo'

require('./index.less')

// request api test
request('test', {
    type: 'get',
    data: {
        activity_id: 1,
        sort: 'hot',
        last: 0,
        limit: 12
    },
    useMock: false
}).then(function(res) {
    console.log(res)
}).catch(function(err) {
    console.log(err.statusText)
});

const Demo = function() {
    return <h1>hello react</h1>
}

export default Demo