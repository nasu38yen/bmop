<template>
    <v-form ref="form1" @submit.prevent="submit">
        <v-text-field v-model="user.identityProvider" label="identityProvider" readonly></v-text-field>
        <v-text-field v-model="user.userDetails" label="userDetails" readonly></v-text-field>
        <v-text-field v-model="user.name" label="ユーザー名" required></v-text-field>
        <div>
            <v-btn type="submit">登録</v-btn>
        </div>
    </v-form>
</template>

<script>
export default ({
    name: 'UserForm',
    props: {
        user: {} 
    },
    methods: {
      async submit () {
        this.$refs.form1.validate()
        const url = '/userInfo'
        await this.$axios.post(url, this.user)
        this.$router.push('/')
      },
    },  
})
</script>