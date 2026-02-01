<template>
  <v-dialog
    :value="value"
    @input="(e) => $emit('input', e)"
    width="400"
    content-class="tw-m-0"
  >
    <v-card>
      <v-card-title class="tw-flex">
        <div>Ingressar em um slot <span v-if="!authUser">como</span></div>
        <v-spacer />
        <v-btn icon @click="$emit('input', false)">
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </v-card-title>
      <v-card-text>
        <div class="mb-2">
          <SignUpBlock :signUpBlock="signUpBlock" infoOnly></SignUpBlock>
        </div>

        <v-form
          ref="form"
          v-model="formValid"
          lazy-validation
          class="tw-flex tw-flex-col tw-gap-y-4"
          onsubmit="return false;"
        >
          <div v-if="!authUser" class="tw-flex tw-flex-col tw-gap-y-4">
            <v-text-field
              v-model="name"
              @keyup.enter="submit"
              :rules="nameRules"
              placeholder="Digite seu nome..."
              autofocus
              hide-details="auto"
              autocomplete="off"
              solo
            ></v-text-field>
            <v-text-field
              v-if="event.collectEmails"
              v-model="email"
              @keyup.enter="submit"
              :rules="emailRules"
              placeholder="Digite seu e-mail..."
              hint="O criador do evento está coletando e-mails. Nunca compartilharemos seu e-mail com ninguém ou o contataremos de forma alguma."
              persistent-hint
              solo
            ></v-text-field>
          </div>

          <div>
            OBSERVAÇÃO: Depois de ingressar em um slot,
            <span class="tw-font-bold"
              >você precisará entrar em contato com o criador da inscrição para editar seu slot.</span
            >
          </div>

          <div v-if="event.blindAvailabilityEnabled">
            O criador da inscrição ocultou os participantes uns dos outros.
            <span class="tw-font-bold"
              >Seu nome será visível apenas para você.</span
            >
          </div>

          <div class="tw-flex">
            <v-spacer />
            <v-btn
              @click="submit"
              class="tw-bg-brand-primary"
              :dark="formValid"
              :disabled="!formValid"
            >
              Ingressar no slot
            </v-btn>
          </div>
        </v-form>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
import { isPhone, validateEmail } from "@/utils"
import { mapState } from "vuex"

import SignUpBlock from "./SignUpBlock.vue"

export default {
  name: "SignUpForSlotDialog",

  emits: ["input", "submit"],

  components: { SignUpBlock },

  props: {
    value: { type: Boolean, required: true },
    event: { type: Object, required: true },
    signUpBlock: { type: Object, required: true },
  },

  data() {
    return {
      formValid: false,
      name: "",
      email: "",
      nameRules: [],
      emailRules: [],
    }
  },

  computed: {
    ...mapState(["authUser"]),
    isPhone() {
      return isPhone(this.$vuetify)
    },
  },

  methods: {
    submit() {
      console.log(this.signUpBlock)
      // Set rules only on submit
      this.nameRules = [
        (name) => !!name || "Nome é obrigatório",
        // (name) =>
        //   !this.signUpBlock.respondents.includes(name) || "Name already taken",
      ]
      this.emailRules = [
        (email) => !!email || "E-mail é obrigatório",
        (email) => !!validateEmail(email) || "E-mail inválido",
      ]

      this.$nextTick(() => {
        if (!this.$refs.form.validate()) return

        this.$emit("submit", { name: this.name, email: this.email })
      })
    },
  },

  watch: {
    value() {
      if (this.value) {
        this.name = ""
        this.email = ""
        this.nameRules = []
        this.emailRules = []

        this.$refs.form?.resetValidation()
      }
    },
    name() {
      // Default rules before submitting
      this.nameRules = [
        // (name) => !this.respondents.includes(name) || "Name already taken",
      ]
    },
    email() {
      // Default rules before submitting
      this.emailRules = []
    },
  },
}
</script>
