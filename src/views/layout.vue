<template>
<div class="main">
    <header class="head_wrap">
        <div class="home_head">
            <h1 @click="link">ReactVue</h1>
            <nav class="list">
                <router-link to="/list">文章列表</router-link>
                <router-link to="/">专区</router-link>
                <router-link to="/">TAG</router-link>
                <router-link to="/about">关于</router-link>
            </nav>
        </div>
    </header>
    <div class="container">
        <section class="article_left"></section>
        <section class="article_list">
            <router-view></router-view>
        </section>
    </div>
</div>
</template>

<script>
import { mapGetters, mapActions,mapState } from 'vuex'
export default {
    // asyncData ({ store, route}) {
    //         return store.dispatch('setCategory')
    // },
    computed: {
        // ...mapState({
        //     category: 'category'
        // }),
        // ...mapGetters({
        //     category: 'getCategory'
        // })
    },
    data(){
        return{
        name: '点我'
        }
    },
    methods: {
        ...mapActions([
            'setCategory',
        ]),
        link(){
            this.$router.push('/')
        }
    },
}
</script>

<style lang="stylus">
.head_wrap{
    border-bottom:1px solid #f2f3f3;
}
.home_head{
    color:#fff;
    line-height:100px;
    height:100px;
    color:#313436;
    max-width:1280px;
    margin:0 auto;
    h1{
        cursor: pointer;
    }
}
.home_head h1{
    padding:0 15px;
    font-size:24px
    font-weight:bold;
    color:#7a8288;
    float:left
}
.list{
    margin-left:30px;
    float:right;
    a{
        color:#7a8288;
        text-decoration:none;
        line-height:100px;
        float:left;
        margin:0 30px;
        position:relative;
    }
    a:before {
        content: "";
        position: absolute;
        left: 0;
        bottom: 20px;
        height: 4px;
        background: #7a8288;
        width: 100%;
        -webkit-transition: all 0.2s ease-in-out;
        transition: all 0.2s ease-in-out;
        -webkit-transform: scaleX(0) translate3d(0, 0, 0);
        transform: scaleX(0) translate3d(0, 0, 0)
    }
    a:hover:before {
        -webkit-transform: scaleX(1);
        -ms-transform: scaleX(1);
        transform: scaleX(1)
    }
}
.container{
    width:1200px;
    margin:0 auto;
    display:flex;
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
.article_list{
    width:100%;
}
</style>