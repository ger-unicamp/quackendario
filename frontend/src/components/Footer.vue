<template>
  <footer class="tw-bg-brand-primary tw-p-8 tw-text-white">
    <div class="tw-mx-auto tw-max-w-7xl">
      
    </div>
  </footer>
</template>

<style scoped>
</style>

<script>
import { mapActions } from "vuex"

export default {
  name: "Footer",
  data() {
    return {
      contractAddress: "2uHvhSasjzHm4PPAWaVpuU7yKtd4yUGYx6WK2oxutQnm",
    }
  },
  computed: {
    contractAddressTruncated() {
      return (
        this.contractAddress.slice(0, 6) +
        "..." +
        this.contractAddress.slice(-4)
      )
    },
  },
  methods: {
    ...mapActions(["showInfo"]),
    copyContractAddress() {
      navigator.clipboard
        .writeText(this.contractAddress)
        .then(() => {
          this.showInfo("Contract address copied to clipboard!")
        })
        .catch((err) => {
          console.error("Failed to copy contract address: ", err)
          // Optionally, show an error message to the user
        })
    },
  },
}
</script>
