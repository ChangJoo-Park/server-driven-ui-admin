<template>
<b-card bg-variant="light">
    <form @submit.prevent="submit">
      <b-form-group
                    breakpoint="lg"
                    label="New Wdiget"
                    label-size="lg"
                    label-class="font-weight-bold pt-0"
                    class="mb-0">
        <b-form-group
                      :autofocus="true"
                      label="Name:"
                      label-class="text-sm-right"
                      label-for="widget-name">
          <b-form-input id="widget-name" v-model.trim="name" required/>
        </b-form-group>
        <b-form-group
                      :autofocus="true"
                      label="Description:"
                      label-class="text-sm-right"
                      label-for="widget-description">
          <b-form-input id="widget-description" v-model.trim="description" required/>
        </b-form-group>
        <b-form-group
                      label="Widget Type:"
                      label-class="text-sm-right"
                      label-for="widget-type">
          <b-form-input id="widget-type" v-model.trim="type" required/>
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
      description: '',
      type: '',
    }
  },
  methods: {
    async submit () {
      const result = await axios({
        method: 'POST',
        url: 'http://localhost:3000/api/widgets',
        data: { name: this.name, type: this.type, description: this.description }
      })
      console.log('result => ', result)
    }
  }
}
</script>

<style>

</style>
