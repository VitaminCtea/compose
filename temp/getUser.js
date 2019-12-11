import axios from 'axios';

export function getUserInfo(url) {
    return new Promise(resolve => {
        axios.get(url).then(res => {
            resolve(res.data);
        })
    })
}