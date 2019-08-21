export default{
    GET_LIST: (state, {data}) => {
      state.list = data
    },
    GET_ARTICLE: (state, {data}) => {
      state.article = data
    },
    GET_TOPIC: (state, {data}) => {
      state.topicList = data
    }
}