<template>
    <div class="user-container">
        <div>
            <i class="fas fa-user"></i>
        </div>
        <div class="user-description">
            <!-- <div>userName : {{info.id}}</div> -->
            <slot name="username"></slot>
            <!-- <router-link :to="`/user/${userInfo.user}`">{{userInfo.user}}</router-link>
            <div class="time">{{userInfo.time_ago}}</div> -->
            
            <div class="time">
                <!-- time : {{info.created}} -->
                <slot name="time"></slot>
            </div>
        </div>
        
    </div>
</template>

<script>
export default {
    props: {
        info : Object
    }
    
};
</script>

<style scoped>
.user-container{display:flex;align-items:center;padding:0.5rem;}
.fa-user{font-size:2.5rem;}
.user-description{padding-left:8px;}
.time{font-size:0.7rem;}
</style>