
const baseUrl = '';

const urlMap = {
    test: '/motor/ugc_activity/v1/get_detail/'
}

const request = function(urlKey, params) {
    if(!urlMap[urlKey]) {
        return Promise.reject('未找到请求地址, urlKey: ' + urlKey);
    }

    params = (!params ? {} : params);
    params.type = params.type || 'get';

    var useMock = !!params.useMock;

    if(useMock === true) {
        params.type = 'get';
        params.url = '/mock/' + urlKey + '.json';
    } else if(urlMap[urlKey].indexOf('http') > -1) {
        params.url = urlMap[urlKey];
    } else {
        params.url = baseUrl + urlMap[urlKey];
    }

    return new Promise(function(resolve, reject) {
        params.success = function(res) {
            resolve(res);
        };
        params.error = function(err) {
            reject(err);
        };

        $.ajax(params);
    });
}

export default request





