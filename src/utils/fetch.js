import 'es6-promise';
import fetch from 'isomorphic-fetch';

const checkStatus = (response) => {
    switch (response.status) {
        case 200:
            return response;
        case 409:
            return response;
        case 400:
            return response;
        case 302:
            window.location.href = '/';
            return {};
        default:
            return response;
    }
}

const addPrefixUrl = (url) => {
    const prefix = `${__PREFIX__}` || '/';
    if (url.indexOf("/") != 0) {
        return prefix + url;
    } else {
        return prefix.substring(0, prefix.length - 1) + url;
    }
}

const parseJSON = (response) => {
    return response.json();
}

const getCsrfToken = () => {
    if (document.querySelector('meta[name="csrf-token"]') || document.querySelector('meta[name="csrf-token"]').getAttribute('content')) {
        return document.querySelector('meta[name="csrf-token"]').getAttribute('content')
    } else {
        return '';
    }
}

const get = (url, options, serviceCatalog = '') => {
    const defaultOpt = {
        method: 'get',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Service-Catalog': serviceCatalog,
            'CSRF-Token': getCsrfToken()
        },
        credentials: 'same-origin',
        timeout: 1000 * 300
    }
    let encodeUrl = url;
    if (url && url.indexOf('hhr_type') > 0) {
        encodeUrl = encodeURI(url);
    }
    return fetch(addPrefixUrl(encodeUrl), defaultOpt).then(checkStatus).then(parseJSON);
};

const post = (url, data = {}, options, serviceCatalog = '') => {
    const defaultOpt = {
        method: 'post',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Service-Catalog': serviceCatalog,
            'CSRF-Token': getCsrfToken()
        },
        credentials: 'same-origin',
        timeout: 1000 * 600,
        body: JSON.stringify(data)
    }
    return fetch(addPrefixUrl(url), defaultOpt).then(checkStatus).then(parseJSON);
};

const postFile = (url, data = {}, options, serviceCatalog = '') => {
    const defaultOpt = {
        method: 'post',
        headers: {
            'Accept': 'application/json',
            'Service-Catalog': serviceCatalog,
            'CSRF-Token': getCsrfToken()
        },
        credentials: 'same-origin',
        timeout: 1000 * 300,
        body: data
    }
    return fetch(addPrefixUrl(url), defaultOpt).then(checkStatus).then(parseJSON);
};

const put = (url, data = {}, options, serviceCatalog = '') => {
    const defaultOpt = {
        method: 'put',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Service-Catalog': serviceCatalog,
            'CSRF-Token': getCsrfToken()
        },
        credentials: 'same-origin',
        timeout: 1000 * 300,
        body: JSON.stringify(data)
    }
    return fetch(addPrefixUrl(url), defaultOpt).then(checkStatus).then(parseJSON);
};

const del = (url, data = {}, custHeader, serviceCatalog = '') => {
    const head = Object.assign({
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Service-Catalog': serviceCatalog,
        'CSRF-Token': getCsrfToken()
    }, custHeader)
    const defaultOpt = {
        method: 'delete',
        headers: head,
        credentials: 'same-origin',
        timeout: 1000 * 300,
        body: JSON.stringify(data)
    }
    return fetch(addPrefixUrl(url), defaultOpt).then(checkStatus).then(parseJSON);
};

const head = (url, data = {}, options, serviceCatalog = '') => {
    const defaultOpt = {
        method: 'head',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Service-Catalog': serviceCatalog,
            'CSRF-Token': getCsrfToken()
        },
        credentials: 'same-origin',
        timeout: 1000 * 300,
        body: JSON.stringify(data)
    }
    return fetch(addPrefixUrl(url), defaultOpt).then(checkStatus).then(parseJSON);
};

const patch = (url, data = {}, options, serviceCatalog = '') => {
    const defaultOpt = {
        method: 'patch',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/x-www-form-urlencoded',
            'Service-Catalog': serviceCatalog,
            'CSRF-Token': getCsrfToken()
        },
        credentials: 'same-origin',
        timeout: 1000 * 300,
        body: JSON.stringify(data)
    }
    return fetch(addPrefixUrl(url), defaultOpt).then(checkStatus).then(parseJSON);
};

const json = (url, options, serviceCatalog = '') => {
    const defaultOpt = {
        method: 'get',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Service-Catalog': serviceCatalog,
            'CSRF-Token': getCsrfToken()
        },
        credentials: 'same-origin',
        timeout: 1000 * 300
    }
    return fetch(addPrefixUrl(url), defaultOpt).then(checkStatus).then(parseJSON);
};

const postJson = (url, data = {}, options, serviceCatalog = '') => {
    const defaultOpt = {
        method: 'post',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Service-Catalog': serviceCatalog,
            'CSRF-Token': getCsrfToken()
        },
        credentials: 'same-origin',
        timeout: 1000 * 600,
        body: JSON.stringify(data)
    }
    return fetch(addPrefixUrl(url), defaultOpt).then(checkStatus).then(parseJSON);
};

const putJson = (url, data = {}, options, serviceCatalog = '') => {
    const defaultOpt = {
        method: 'put',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Service-Catalog': serviceCatalog,
            'CSRF-Token': getCsrfToken()
        },
        credentials: 'same-origin',
        timeout: 1000 * 300,
        body: JSON.stringify(data)
    }
    return fetch(addPrefixUrl(url), defaultOpt).then(checkStatus).then(parseJSON);
};

const patchJson = (url, data = {}, options, serviceCatalog = '') => {
    const defaultOpt = {
        method: 'patch',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Service-Catalog': serviceCatalog,
            'CSRF-Token': getCsrfToken()
        },
        credentials: 'same-origin',
        timeout: 1000 * 300,
        body: JSON.stringify(data)
    }
    return fetch(addPrefixUrl(url), defaultOpt).then(checkStatus).then(parseJSON);
};

export default {
    get,
    post,
    put,
    del,
    head,
    patch,
    json,
    postJson,
    putJson,
    patchJson,
    postFile,
};
