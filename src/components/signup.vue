<template>
<div class="container">
    <div class="m-5">
        <form @submit.prevent="handleSubmit">
            <h3>signup</h3>
            <div class="form-group">
                <label>First Name</label>
                <input type="text" class="form-control" v-model="first_name" placeholder="First name"/>
            </div>
            <div class="form-group">
                <label>Last Name</label>
                <input type="text" class="form-control" v-model="last_name" placeholder="Last name"/>
            </div>
            <div class="form-group">
                <label>Email</label>
                <input type="email" class="form-control" v-model="email" placeholder="Email"/>
            </div>
            <div class="form-group">
                <label>Password</label>
                <input type="password" class="form-control" v-model="password" placeholder="Password"/>
            </div>
            <div class="form-group">
                <label>Password Confirm</label>
                <input type="password_confirm" class="form-control" v-model="password_confirm" placeholder="Password confirm"/>
            </div>
            <button class="btn btn-primary btn-block">Signup</button>
        </form>
    </div>    
</div>
</template>
<script>
import axios from 'axios';

export default {
    data(){
        return {
            first_name: '',
            last_name: '',
            email: '',
            password: '',
            password_confirm: ''
        }
    },
    methods: {
        async handleSubmit(){
            console.log('handleSubmit');
            const response = await axios.post('https://jsonplaceholder.typicode.com/todos', {
                first_name: this.first_name,
                last_name: this.last_name,
                email: this.email,
                password: this.password,
                password_confirm: this.password_confirm
            })
            // .then(res => console.log(res))
            // .catch(err => console.log(err));
            
            console.log(response);
        }
    }
}
</script>
