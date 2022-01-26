<template>
    <div>
        <p v-for="item in fetchedAsk" v-bind:key="item.title">
            <router-link :to="`/item/${item.id}`">{{item.title}}</router-link>
            <small>{{item.time_ago}} {{item.user}}</small>
        </p>
    </div>
</template>

<script>
import {mapState, mapGetters} from 'vuex'
export default {
    computed:{
        ...mapGetters(['fetchedAsk'])
        // ...mapState({
        //     ask: state => state.ask
        // })
    },
    created(){
        this.$store.dispatch('FETCH_ASK');
    }
};
</script>

<style scoped>

</style>