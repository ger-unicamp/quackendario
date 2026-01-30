<template>
  <v-img
    :alt="alt"
    class="shrink tw-cursor-pointer"
    contain
    :src="src"
    transition="fade-transition"
    :width="width"
  />
</template>

<script>
import { isPhone } from "@/utils"

export default {
  name: "Logo",

  props: {
    type: {
      type: "timeful",
      default: "timeful",
    },
  },

  computed: {
    isPhone() {
      return isPhone(this.$vuetify)
    },
    alt() {

      return "Timeful Logo"
    },
    src() {
      switch (this.type) {
        case "timeful":
          return require("@/assets/timeful_logo_with_text.png")
      }
    },
    width() {
      switch (this.type) {
        case "timeful":
          return this.isPhone ? 90 : 110
      }
    },
  },
}
</script>
