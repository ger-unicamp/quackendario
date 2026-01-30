<template>
  <div class="tw-bg-light-gray tw-flex tw-flex-col tw-justify-between tw-h-full">
    <div
      class="tw-relative tw-h-full tw-m-auto tw-mb-12 tw-flex tw-max-w-6xl tw-flex-col tw-px-4 sm:tw-mb-20"
    >
      <!-- Header -->
      <div class="tw-mb-16 sm:tw-mb-28">
        <div class="tw-flex tw-items-center tw-pt-5">
          <Logo type="timeful" />

          <v-spacer />

          <LandingPageHeader>
            <div v-if="authUser" class="tw-ml-2">
              <AuthUserMenu />
            </div>
            <v-btn v-else text @click="signIn">Entrar</v-btn>
          </LandingPageHeader>
        </div>
      </div>

      <div class="tw-flex tw-flex-col tw-items-center tw-mt-32 ">
        <div
          class="tw-mb-6 tw-flex tw-max-w-[26rem] tw-flex-col  tw-items-center sm:tw-w-[35rem] sm:tw-max-w-none"
        >
          
          <div
            id="header"
            class="tw-mb-4 tw-text-center tw-text-2xl tw-font-medium sm:tw-text-4xl lg:tw-text-4xl xl:tw-text-5xl"
          >
            <h1>Encontre um horário para reunir</h1>
          </div>

          <div
            class="lg:tw-text-md tw-text-center tw-text-sm tw-text-very-dark-gray sm:tw-text-lg md:tw-text-lg xl:tw-text-lg"
          >
            Coordene reuniões em grupo sem idas e vindas.
            <br class="tw-hidden sm:tw-block" />
            Integra com o seu
            <v-tooltip
              top
              content-class="tw-bg-very-dark-gray tw-shadow-lg tw-opacity-100"
            >
              <template v-slot:activator="{ on, attrs }">
                <span
                  class="tw-cursor-pointer tw-border-b tw-border-dashed tw-border-dark-gray"
                  v-bind="attrs"
                  v-on="on"
                  >calendar</span
                >
              </template>
              <span
                >Timeful allows you to autofill your availability from Google
                Calendar,<br class="tw-hidden sm:tw-block" />
                Outlook, and Apple Calendar</span
              > </v-tooltip
            >.
          </div>
        </div>

        <div class="tw-mb-12 tw-space-y-2">
          <v-btn
            class="tw-block tw-self-center tw-rounded-lg tw-bg-brand-primary tw-px-10 tw-text-base sm:tw-px-10 lg:tw-px-12"
            dark
            @click="authUser ? openDashboard() : (newDialog = true)"
            large
            :x-large="$vuetify.breakpoint.mdAndUp"
          >
            {{ authUser ? "Abrir painel" : "Criar evento" }}
          </v-btn>
          <div
            v-if="!authUser"
            class="tw-text-center tw-text-xs tw-text-dark-gray sm:tw-text-sm"
          >
            É grátis! Não precisa de login.
          </div>
        </div>
        <div class="tw-relative tw-w-full">
          <!-- Green background -->
          <div
            class="tw-absolute -tw-bottom-12 tw-left-1/2 tw-h-[85%] tw-w-screen -tw-translate-x-1/2 tw-bg-brand-primary sm:-tw-bottom-20"
          ></div>
        </div>
      </div>
    </div>

    <Footer />

    <!-- Sign in dialog -->
    <SignInDialog v-model="signInDialog" @signIn="_signIn" />

    <!-- New event dialog -->
    <NewDialog v-model="newDialog" no-tabs @signIn="signIn" />
  </div>
</template>

<style scoped>
@media screen and (min-width: 375px) and (max-width: 640px) {
  #header {
    font-size: 1.875rem !important; /* 30px */
    line-height: 2.25rem !important; /* 36px */
  }
}
</style>
<style>
.rdt-h {
  @apply tw-rounded tw-bg-green tw-px-px tw-text-black;
}
</style>

<script>
import LandingPageCalendar from "@/components/landing/LandingPageCalendar.vue"
import { isPhone, signInGoogle, signInOutlook } from "@/utils"
import Header from "@/components/Header.vue"
import NumberBullet from "@/components/NumberBullet.vue"
import NewEvent from "@/components/NewEvent.vue"
import NewDialog from "@/components/NewDialog.vue"
import LandingPageHeader from "@/components/landing/LandingPageHeader.vue"
import Logo from "@/components/Logo.vue"
import GithubButton from "vue-github-button"
import SignInDialog from "@/components/SignInDialog.vue"
import { calendarTypes } from "@/constants"
import { vueVimeoPlayer } from "vue-vimeo-player"
import Footer from "@/components/Footer.vue"
import PronunciationMenu from "@/components/PronunciationMenu.vue"
import { mapState } from "vuex"
import AuthUserMenu from "@/components/AuthUserMenu.vue"

export default {
  name: "Landing",

  metaInfo: {
    title: "Timeful (formerly Schej) - Encontre um horário para reunir",
  },

  components: {
    LandingPageCalendar,
    Header,
    NumberBullet,
    NewEvent,
    NewDialog,
    LandingPageHeader,
    GithubButton,
    Logo,
    SignInDialog,
    vueVimeoPlayer,
    Footer,
    PronunciationMenu,
    AuthUserMenu,
  },

  data: () => ({
    signInDialog: false,
    newDialog: false,
    githubSnackbar: true,
    rive: null,
    showSchejy: false,
    isVideoPlaying: false,
  }),

  computed: {
    ...mapState(["authUser"]),
    isPhone() {
      return isPhone(this.$vuetify)
    },
  },

  methods: {
    loadRiveAnimation() {
      // if (!this.rive) {
      //   this.rive = new Rive({
      //     src: "/rive/schej.riv",
      //     canvas: document.querySelector("canvas"),
      //     autoplay: false,
      //     stateMachines: "wave",
      //     onLoad: () => {
      //       // r.resizeDrawingSurfaceToCanvas()
      //     },
      //   })
      //   setTimeout(() => {
      //     this.showSchejy = true
      //     setTimeout(() => {
      //       this.rive.play("wave")
      //     }, 1000)
      //   }, 4000)
      // } else {
      //   this.rive.play("wave")
      // }
    },
    _signIn(calendarTypes) {
      if (calendarTypes === calendarTypes.GOOGLE) {
        signInGoogle({ state: null, selectAccount: true })
      } else if (calendarTypes === calendarTypes.OUTLOOK) {
        // NOTE: selectAccount is not supported implemented yet for Outlook, maybe add it later
        signInOutlook({ state: null, selectAccount: true })
      }
    },
    signIn() {
      this.signInDialog = true
    },
    onPlay() {
      setTimeout(() => {
        this.isVideoPlaying = true
      }, 1000)
    },
    openDashboard() {
      this.$router.push({ name: "home" })
    },
  },

  beforeDestroy() {
    this.rive?.cleanup()
  },

  watch: {
    [`$vuetify.breakpoint.name`]: {
      immediate: true,
      handler() {
        if (this.$vuetify.breakpoint.mdAndUp) {
          setTimeout(() => {
            this.loadRiveAnimation()
          }, 0)
        }
      },
    },
  },
}
</script>
