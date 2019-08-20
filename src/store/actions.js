import request from 'axios'

// request.defaults.baseURL = 'https://gxx.leanapp.cn/'
// request.defaults.baseURL = 'http://localhost:8090'
request.defaults.baseURL = 'http://144.34.136.236:3000'

export const setCategory = ({ commit, state },params) => {
    console.log('params')
  return request.post('/article/get').then((response) => {
    if (response.data.code === 0) {
        commit('SET_CATEGORY', {category:response.data.results})
    }
  }).catch((error) => {
    console.log(error)
  })
}

export const getArticle = ({ commit, state },params) => {
    return request.post('/article/get',params).then((response) => {
        // console.log('res',response.data)
      if (response.data.code === 0) {
          commit('GET_ARTICLE', {article:response.data.results})
      }
    }).catch((error) => {
      console.log(error)
    })
  }