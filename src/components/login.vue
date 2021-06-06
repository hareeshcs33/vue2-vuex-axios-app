<template>
<div class="container">
    <div class="m-5">
        <form @submit.prevent="handleSubmit">
            <h3>Login</h3>
            <div class="form-group">
                <label>Email</label>
                <input type="email" class="form-control" v-model="email" placeholder="Email"/>
            </div>
            <div class="form-group">
                <label>Password</label>
                <input type="password" class="form-control" v-model="password" placeholder="Password"/>
            </div>
            <button class="btn btn-primary btn-block">Login</button>
        </form>
    </div>    
</div>
</template>
<script>
import axios from 'axios';

export default {
    data(){
        return {
            email: '',
            password: ''
        }
    },
    methods: {
        async handleSubmit(){
            console.log('handleSubmit');
            const response = await axios.post('https://jsonplaceholder.typicode.com/todos', {
                email: this.email,
                password: this.password
            });
            console.log(response);
        }
    }
}
</script>
