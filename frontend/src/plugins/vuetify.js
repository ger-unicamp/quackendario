import Vue from "vue"
import Vuetify from "vuetify/lib"
import ptBR from "date-fns/locale/pt-BR"
import DateFnsUtils from "@date-io/date-fns"

Vue.use(Vuetify)

export default new Vuetify({
  date: {
    adapter: DateFnsUtils,
    locale: {
      pt: ptBR,
    },
  },
  theme: {
    themes: {
      light: {
        primary: "#ce0000",
        error: "#e61e1e",
      },
      dark: {
        primary: "#ce0000",
        error: "#FF4D4D",
      },
    },
  },
  breakpoint: {
    thresholds: {
      xs: 640,
      sm: 768,
      md: 1024,
      lg: 1280,
    },
    scrollBarWidth: 0,
  },
})
