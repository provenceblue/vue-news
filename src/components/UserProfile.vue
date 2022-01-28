<template>
    <div class="user-container">
        <div>
            <i class="fas fa-user"></i>
        </div>
        <div class="user-description">
            <!-- <router-link :to="`/user/${userInfo.user}`">{{userInfo.user}}</router-link>
            <div class="time">{{userInfo.time_ago}}</div> -->
            <p>name : {{userInfo.id}}</p>
            <p>karma : {{userInfo.karma}}</p>
            <p>created : {{userInfo.created}}</p>
        </div>
        
    </div>
</template>

<script>
export default {
    computed: {
        userInfo(){
            return this.$store.state.user;
        }
    },
    
};
</script>

<style scoped>
.user-container{display:flex;align-items:center;padding:0.5rem;}
.fa-user{font-size:2.5rem;}
.user-description{padding-left:8px;}
.time{font-size:0.7rem;}
</style>