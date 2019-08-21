<template>
<div class="home_wrap">
    <article class="article_item" v-for="item in topicList" :key="item.id">
        <h2 @click="goArticle(item._id)">{{item.title}}</h2>
        <p class="article_meta">
            <span v-for="tag in item.tags" :key="tag">{{tag}}</span>
        </p>
        <p class="article_des">{{item.description}}</p>
    </article>
</div>
</template>

<script>
import { mapGetters, mapActions,mapState } from 'vuex'
export default {
    asyncData ({ store, route}) {
            return store.dispatch('getTopic')
    },
    computed: {
        ...mapState({
            category: 'category'
        }),
        ...mapGetters({
            topicList: 'topicList'
        })
    },
    data(){
        return{
        name: '点我'
        }
    },
    methods: {
        ...mapActions([
            'getTopic',
        ]),
        link(){
            this.$router.push('list')
        },
        goArticle(id){
            this.$router.push({path:`/article`,query:{page:id}})
            console.log('---',id)
        }
    },
}
</script>

<style lang="stylus">
.home_wrap{

}
.article_item{
    margin-bottom: 40px;
    h2{
        cursor: pointer
    }
}
.article_left{
    width:280px;
    margin-right:20px;
    background:#efefef;
}
.article_meta{
    font-size:12px;
    margin:5px 0;
    span{
        background:#efefef;
        height:16px;
        line-height:16px;
        border-radius:8px;
        padding:0 5px;
        margin:0 2px;
    }
}
.article_des{
    font-size:14px;
    color:#666;
}
</style>