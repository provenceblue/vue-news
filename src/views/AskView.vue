<template>
    <div>
        <div v-for="item in fetchedAsk" v-bind:key="item.title">{{item.title}}</div>
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