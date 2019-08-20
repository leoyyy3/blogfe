<template>
<div class="main">
    <!-- {{article.content}} -->
    <h3 class="art_title">
        {{article.title}}
    </h3>
    <p class="time">{{article.createTime}}</p>
    <div class="art_con markdown-body" v-html="article.content"></div>
</div>
</template>

<script>
import { mapGetters, mapActions,mapState } from 'vuex'
export default {
    asyncData ({ store, route}) {
            // console.log('route',route)
            let id = route.query.page;
            return store.dispatch('getArticle',{id:id})
    },
    computed: {
        // ...mapState({
        //     article: 'article'
        // }),
        ...mapGetters({
            article: 'gArticle'
        })
    },
    data(){
        return{
            name: '点我'
        }
    },
    methods: {
        ...mapActions([
            'getArticle',
        ]),
        link(){
            this.$router.push('list')
        }
    },
}
</script>

<style lang="stylus">
.main{
    width:100%;  
}
.art_title{
    padding:10px;
    text-align:center;
    font-size:32px;
}
.time{
    text-align:center;
    color:#999;
    font-size:14px;
    padding: 20px 0;
}
</style>