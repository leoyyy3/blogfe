export default{
    SET_CATEGORY: (state, {category}) => {
        // console.log('-------',category)
      state.category = category
    },
    GET_ARTICLE: (state, {article}) => {
        console.log('-------article',article)
      state.article = article[0]
    }
}