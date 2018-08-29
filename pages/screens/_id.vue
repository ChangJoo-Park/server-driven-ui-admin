<template>
  <div class="row">
    <div class="col-4">
      <h1>
        화면
        <b-button @click="saveScreen">저장</b-button>
      </h1>
      <b-list-group style="min-height: 300px; width: 100%;">
        <draggable
          v-if="screen"
          v-model="screen.widgets"
          :options="{group:'widget', animation: 150}"
          class="dragArea"
          style="min-height: 300px; width: 100%;"
        >
          <b-list-group-item v-for="(widget, index) in screen.widgets" :key="index">
            {{widget.name}}
            <i class="js-remove" @click="removeWidgetFromScreen(index)">✖</i>
          </b-list-group-item>
        </draggable>
      </b-list-group>
    </div>
    <div class="col-8">
      <h1>위젯 목록</h1>
      <b-list-group>
        <draggable
          v-model="widgets"
          :options="{group:{ name:'widget',  pull:'clone', put:false }, sort: false, animation: 150}"
          class="dragArea"
        >
          <b-list-group-item v-for="widget in widgets" :key="widget._id">
            {{ widget.name }}
          </b-list-group-item>
        </draggable>
      </b-list-group>
    </div>
    <div class="col-12">
      <h1>UI 응답 목록</h1>
      <pre>{{ responseFormat }}</pre>
    </div>
  </div>
</template>

<script>
import draggable from 'vuedraggable'
import axios from 'axios'

export default {
  async asyncData ({ route }) {
    // TODO: Using promise all
    const widgetResponse = await axios({
      method: 'GET',
      url: 'http://localhost:3000/api/widgets'
    })
    const screenResponse = await axios({
      method: 'GET',
      url: `http://localhost:3000/api/screens/${route.params['id']}`
    })
    return {
      widgets: widgetResponse.data,
      screen: screenResponse.data
    }
  },
  components: {
    draggable
  },
  data() {
    return {
      demoStuff: []
    };
  },
  computed: {
    responseFormat () {
      if (!this.screen || !this.screen.widgets) {
        return []
      }
      const rows = this.screen.widgets.map(w => {
        return {
          ui: w.type
        }
      })
      return {
        type: this.screen.type,
        _id: this.screen._id,
        rows
      }
    }
  },
  methods: {
    async saveScreen () {
      console.log('save screen')
      const screenResponse = await axios({
        method: 'PATCH',
        url: `http://localhost:3000/api/screens/${this.$route.params['id']}`,
        data: {
          widgets: this.screen.widgets
        }
      })
    },
    removeWidgetFromScreen (index) {
      this.screen.widgets.splice(index, 1)
    }
  }
};
</script>

<style>
.dragArea {
  background-color: green;
  min-height: 300px;
  border: 1px solid black;
}

.normal {
  background-color: grey;
}

.drag {
  background-color: green;
}
</style>
