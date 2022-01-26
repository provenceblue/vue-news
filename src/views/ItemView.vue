<template>
    <div>
        <p>{{itemInfo.title}}</p>
        <p>{{itemInfo.user}}</p>
        <p>{{itemInfo.time_ago}}</p>
    </div>
</template>

<script>
export default {
    computed:{
        itemInfo(){
            return this.$store.state.item;
        }
    },
    created() {
        const itemNo = this.$route.query.id;
        this.$store.dispatch('FETCH_ITEM',itemNo);

    },
};
</script>

<style scoped>

</style>