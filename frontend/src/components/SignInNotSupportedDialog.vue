<template>
  <!-- Google sign in not supported dialog -->
  <v-dialog :value="value" width="400" content-class="tw-m-0">
    <v-card>
      <v-card-title>Entrada do Google não é suportada</v-card-title>
      <v-card-text>
        <p>
          Isso geralmente acontece quando você abre um link Timeful do Instagram ou Messenger.
        </p>
        <p>
          Para contornar esse problema, clique nos três pontos no canto superior direito e depois "Abrir em navegador do sistema" ou "Abrir no Chrome"
        </p>
      </v-card-text>
      <v-card-actions>
        <v-spacer />
        <v-btn text class="tw-text-brand-primary" @click="$emit('input', false)">
          OK
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: "SignInNotSupportedDialog",

  props: {
    value: { type: Boolean, required: true },
  },
}
</script>
