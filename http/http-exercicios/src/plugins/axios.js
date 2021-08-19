import Vue from 'vue'
import axios from 'axios'

// axios.defaults.baseURL = 'https://course-vue-d8bd1-default-rtdb.firebaseio.com/'
// axios.defaults.headers.common['Authorization'] = 'abc123'
// axios.default.headers.get['Accepts'] = 'application/json'

Vue.use({
  install(Vue) {
    // Vue.prototype.$http = axios
    Vue.prototype.$http = axios.create({
      baseURL: 'https://course-vue-d8bd1-default-rtdb.firebaseio.com/',
      headers: {
        // get: {
        //   Authorization: 'abc123'
        // }
      //   post: {
      //     Authorization: 'abc123'
      //   },
      //   Authorization: 'abc123'
      }
    })

    Vue.prototype.$http.interceptors.request.use(config => {
      // eslint-disable-next-line no-console
      console.log(config.method)
      // if (config.method == 'post') {
      //   config.method = 'put'
      // }
      return config
    }, error => Promise.reject(error))

    Vue.prototype.$http.interceptors.response.use(response => {
      // const array = []

      // for (let key in response.data) {
      //   array.push({ id: key, ...response.data[key] })
      // }

      // response.data = array
      return response
    }, error => Promise.reject(error))
  }
})
