<template>
  <div class="tw-flex tw-flex-col tw-gap-6">
    <div
      class="tw-text-md tw-flex tw-flex-col tw-items-center tw-gap-2 tw-font-normal"
    >
      Create a Timeful account to link your
      <div class="tw-flex tw-items-center tw-gap-1">
        <v-img
          class="-tw-mt-1 tw-flex-initial"
          width="15"
          height="15"
          src="@/assets/apple_logo.svg"
        />
        <span class="tw-font-medium">Apple Calendar</span>
      </div>
    </div>
    <div v-if="!authUser">
      <SignInGoogleBtn
        @click="$emit('signInLinkApple')"
        class="tw-mb-3 tw-w-full"
      />
      
    </div>
    <div v-else>
      <div
        class="tw-flex tw-items-center tw-justify-center tw-text-sm tw-text-dark-gray"
      >
        <v-icon class="tw-mx-2 tw-text-brand-primary" size="16"
          >mdi-check-circle</v-icon
        >
        Timeful account created
      </div>
    </div>
    <div class="tw-flex tw-items-center tw-gap-2">
      <v-btn text class="tw-grow" @click="$emit('back')">Voltar</v-btn>
      <v-btn
        color="primary"
        class="tw-grow"
        :disabled="!authUser"
        @click="$emit('continue')"
        >Continuar</v-btn
      >
    </div>
  </div>
</template>

<script>
import SignInGoogleBtn from "../SignInGoogleBtn.vue"
import { mapState } from "vuex"

export default {
  name: "CreateAccount",

  components: {
    SignInGoogleBtn,
  },

  computed: {
    ...mapState(["authUser"]),
  },
}
</script>
