<template>
    <div>
        <button @click="loginUser">login</button>
        <h1>List</h1>
        <ul>
            <li v-for="item in items" :key="item.id">{{item}}</li>
        </ul>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    data() {
        return {
            items:[],
        }
    },
    methods: {
        loginUser() {
            axios.get('https://jsonplaceholder.typicode.com/users/1')
            .then(response => {
                if(response.data.id ===1){
                    console.log("사용자가 인증되었습니다.")
                    axios.get('https://jsonplaceholder.typicode.com/todos')
                    .then(response => {
                        this.items = response.data;
                    })
                    .catch();
                }
            })
            .catch(error => console.log(error));
        }
    },
};
</script>

<style lang="scss" scoped>

</style>