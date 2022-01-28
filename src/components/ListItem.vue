<template>
    <div>
        <ul class="news-list">
            <li v-for="item in listItems" :key="item.title" class="post">
                <div class="points">
                    {{item.points || 0}}
                </div>
                <div>
                    <p class="news-title">
                        <template v-if="item.domain">
                            <a :href="item.url">{{item.title}}</a>
                        </template>
                        <template v-else>
                            <router-link :to="`/item/${item.id}`">{{item.title}}</router-link>
                        </template>
                    </p>
                    <small class="link-text"> 
                        {{item.time_ago}} by 
                            <router-link v-if="item.user" :to="`/user/${item.user}`" class="link-text">{{item.user}}</router-link>
                            <a v-else :href="item.url" class="link-text">{{item.domain}}</a>
                    </small>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>

export default { 
    created(){
        //this.$store.dispatch('FETCH_NEWS');
        //console.log(this.$route);
        const name = this.$route.name;
        let actionName;
        if(name === 'news'){
            actionName='FETCH_NEWS';
        }else if(name === 'ask'){
            actionName='FETCH_ASK';
        }else if(name === 'jobs'){
            actionName='FETCH_JOBS';
        }
        this.$store.dispatch(actionName);
    },
    computed:{
        // eslint-disable-next-line vue/return-in-computed-property
        listItems() {
            //console.log(this.$route.name);
            const name = this.$route.name;
            if(name === 'news'){
                return this.$store.state.news;
            }else if(name === 'ask'){
                return this.$store.state.ask;
            }else if(name === 'jobs'){
                return this.$store.state.jobs;
            }
        }
    }
};
</script>

<style scoped>
.news-list{margin:0;padding:0;}
.news-list .post{display:flex;align-items:center;list-style:none;border-bottom:1px solid #eee;}
.points{width:80px;height:60px;display:flex;align-items:center;justify-content: center;color:#42b883;}
.news-title{margin:0;}
.link-text{color:#828282;}
</style>