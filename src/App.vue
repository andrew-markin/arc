<template>
  <div class="container column no-wrap" :class="{ 'q-pa-sm': !mobileScreen }">
    <q-card class="col column no-wrap shadow-5" :flat="mobileScreen" :square="mobileScreen">
      <router-view />
    </q-card>
  </div>
</template>

<script>
import { useQuasar } from 'quasar'
import { defineComponent } from 'vue'

export default defineComponent({
  computed: {
    quasar() {
      return useQuasar()
    },
    mobileScreen() {
      return this.quasar.screen.width < 800
    }
  }
})
</script>

<style lang="scss">
body {
  background-color: #e0e0e0;
}
body.body--dark {
  background: #18191d;
}
</style>

<style scoped lang="scss">
.container {
  margin: 0;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  min-height: 100vh;
}

@media (min-width: 550px) {
  .container {
    width: 500px;
  }
}
</style>
