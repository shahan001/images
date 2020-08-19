<template>

    <div class="ui secondary pointing menu">
        <a href="#" class="item">
            Logo
        </a>

        {{isLoggedIn}}

        <div class="right menu">
            <div v-if="isLoggedIn" class="horizontal">
                <a href="#" class="item">Galleris</a>
                <a href="#" class="item">Upload</a>
                <a href="#" class="item" @click="logout">Logout</a>
            </div>
            <a v-else href="#" class="ui item" @click="login">Login</a>
        </div>
        
    </div>

</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
    name: 'AppHeader',
    computed: mapGetters(['isLoggedIn']),
    methods: mapActions(['login', 'logout'])
}
</script>

<style scoped>
.horizontal {
    display: flex;
    flex-direction: row;
}


</style>