function fetchData() {
    const str = 'peanut butter';
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(str);
        }, 2000)
    })
}
module.exports = fetchData;