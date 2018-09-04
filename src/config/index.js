// export let apiRoot = 'http://127.0.0.114/wp-json/wp/v2'
// export let apiRoot = '/wp-json/wp/v2'

let apiRoot

if (process.env.NODE_ENV === 'development') {
  apiRoot = '/wp-json/wp/v2'
} else {
  apiRoot = 'https://www.wpdaxue.com/wp-json/wp/v2'
}

export {apiRoot}
