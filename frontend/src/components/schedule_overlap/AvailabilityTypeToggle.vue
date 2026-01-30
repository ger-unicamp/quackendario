<template>
  <SlideToggle
    :value="value"
    @input="(e) => $emit('input', e)"
    :options="options"
  />
</template>

<script>
import { availabilityTypes } from "@/constants"
import SlideToggle from "@/components/SlideToggle.vue"

export default {
  name: "AvailabilityTypeToggle",

  props: {
    value: { type: String, required: true },
  },

  components: { SlideToggle },

  data() {
    return {
      options: [
        {
          text: "Available",
          activeClass: "tw-text-brand-primary tw-bg-brand-primary/5",
          borderClass: "tw-border-brand-primary",
          borderStyle: { boxShadow: "0px 2px 8px 0px var(--color-brand-primary-dark)" },
          value: availabilityTypes.AVAILABLE,
        },
        {
          text: "If needed",
          activeClass: "tw-text-secondary-orange-dark tw-bg-secondary-yellow/5",
          borderClass: "tw-border-secondary-orange",
          borderStyle: { boxShadow: "0px 2px 8px 0px var(--color-secondary-orange)" },
          value: availabilityTypes.IF_NEEDED,
        },
      ],
    }
  },
}
</script>
