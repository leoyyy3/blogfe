<template>
<div class="home_wrap">
    <article class="article_item" v-for="item in category" :key="item.id">
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
            return store.dispatch('setCategory')
        },
        computed: {
            ...mapState({
                category: 'category'
            }),
            ...mapGetters({
            category: 'getCategory'
            })
        },
        data() {
            return {
                name: 'list'
            }
        },
        methods: {
            ...mapActions([
                'setCategory',
            ]),
            link(){
                this.$router.push('list')
            },
            goArticle(id){
                this.$router.push({path:`/article`,query:{page:id}})
                console.log('---',id)
            }
        },
        beforeMount() {
        }
    }
</script>

<style scoped>
    
</style>