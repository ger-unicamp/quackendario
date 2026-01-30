<template>
  <div class="tw-flex tw-flex-col tw-gap-1">
    <div class="tw-text-sm tw-font-medium">Legend:</div>
    <div class="tw-flex tw-items-center tw-gap-2">
      <div
        class="tw-h-4 tw-w-4 tw-rounded tw-border tw-border-border-primary tw-bg-brand-primary/50"
      ></div>
      <span class="tw-text-sm">Disponível</span>
    </div>
    <div class="tw-flex tw-items-center tw-gap-2">
      <div
        class="tw-h-4 tw-w-4 tw-rounded tw-border tw-border-border-primary tw-bg-secondary-yellow"
      ></div>
      <span class="tw-text-sm">Se necessário</span>
    </div>
    <div class="tw-flex tw-items-center tw-gap-2">
      <div
        class="tw-h-4 tw-w-4 tw-rounded tw-border tw-border-border-primary tw-bg-secondary-red/20"
      ></div>
      <span class="tw-text-sm">Unavailable</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "ColorLegend",
}
</script>
