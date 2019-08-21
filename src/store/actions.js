import request from 'axios'
const config = require('../util/config')
request.defaults.baseURL = config.baseUrl

export const getList = ({ commit, state },params) => {
  return request.post('/article/get',params).then((response) => {
    if (response.data.code === 0) {
        commit('GET_LIST', {data:response.data.results})
    }
  }).catch((error) => {
    console.log(error)
  })
}

export const getArticle = ({ commit, state },params) => {
    return request.post('/article/get',params).then((response) => {
      if (response.data.code === 0) {
          commit('GET_ARTICLE', {data:response.data.results})
      }
    }).catch((error) => {
      console.log(error)
    })
  }

  export const getTopic = ({ commit, state }) => {
    return request.post('/article/getTopic').then((response) => {
      if (response.data.code === 0) {
          commit('GET_TOPIC', {data:response.data.results})
      }
    }).catch((error) => {
      console.log(error)
    })
  }