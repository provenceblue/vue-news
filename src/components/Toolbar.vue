<template>
    <div class="header">
        <router-link to="/news">News</router-link> | 
        <router-link to="/ask">Ask</router-link> | 
        <router-link to="/jobs">Jobs</router-link>
    </div>
</template>


<style scoped>
.header {display:flex;padding:8px;color:#fff;background-color:#42b883;}
.header .router-link-exact-active{color:#35495e;}
.header a{color:#fff;}
</style>