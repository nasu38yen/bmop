<template>
    <v-form ref="form1" @submit.prevent="submit">
        <v-text-field v-model="matter.parentId" label="親slug"></v-text-field>
        <v-text-field v-model="matter.id" label="slug" required></v-text-field>
        <v-text-field v-model="matter.author" label="投稿者名" required></v-text-field>
        <v-text-field v-model="matter.title" label="タイトル" required></v-text-field>
        <v-textarea v-model="matter.text" label="内容" required rows="20"></v-textarea>
        <div>
            <v-btn type="submit">登録</v-btn>
        </div>
    </v-form>
</template>

<script>
import moment from 'moment';
import { mapState } from "vuex";

export default ({
    name: 'MatterForm',
    props: {
        matter: {} 
    },

    computed: {
        ...mapState({userInfo: 'userInfo'}),
    },

    methods: {
      async submit () {
        this.$refs.form1.validate()
        this.matter.updatedAt = moment().format("YYYY-MM-DD HH:mm:ss");
        if (!this.matter.createdAt) {
            this.matter.createdAt = this.matter.updatedAt;
        }
        const url = '/matter'
        await this.$axios.post(url, this.matter)
        if (this.matter.id) {
            this.$router.push('/matter/' + this.matter.id)
        } else {
            this.$router.push('/')
        }
      },
    },  
})
</script>