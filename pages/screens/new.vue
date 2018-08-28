<template>
<b-card bg-variant="light">
    <form @submit.prevent="submit">
      <b-form-group
                    breakpoint="lg"
                    label="New Screen"
                    label-size="lg"
                    label-class="font-weight-bold pt-0"
                    class="mb-0">
        <b-form-group
                      :autofocus="true"
                      label="Name:"
                      label-class="text-sm-right"
                      label-for="screen-name">
          <b-form-input id="screen-name" v-model.trim="name" required/>
        </b-form-group>
        <b-form-group
                      label="Screen Type:"
                      label-class="text-sm-right"
                      label-for="screen-type">
          <b-form-input id="screen-type" v-model.trim="type" required/>
        </b-form-group>
        <b-form-group
                      label="Published At:"
                      label-class="text-sm-right"
                      label-for="screen-published_at">
          <b-form-input id="screen-published_at" type="date" v-model="publishedAt" required/>
        </b-form-group>
        <b-button type="submit">Submit</b-button>
      </b-form-group>
    </form>
  </b-card>
</template>

<script>
import axios from 'axios'

export default {
  data () {
    return {
      name: '',
      type: '',
      publishedAt: ''
    }
  },
  methods: {
    async submit () {
      const result = await axios({
        method: 'POST',
        url: 'http://localhost:3000/api/screens',
        data: { name: this.name, type: this.type, publishedAt: this.publishedAt }
      })
      console.log('hello => ', result)
    }
  }
}
</script>

<style>

</style>
