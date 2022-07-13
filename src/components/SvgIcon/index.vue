<template>
  <div :style="styleExternalIcon" class="svg-external-icon svg-icon" v-on="$listeners" />
</template>

<script>
export default {
  name: 'SvgIcon',
  props: {
    iconClass: {
      type: String,
      required: true,
    },
  },
  beforeDestroy() {},
  computed: {
    styleExternalIcon() {
      return {
        mask: `url(${require(`@/icons/svg/${this.iconClass}.svg`)}) no-repeat 50% 50%`,
        '-webkit-mask': `url(${require(`@/icons/svg/${this.iconClass}.svg`)}) no-repeat 50% 50%`,
      }
    },
  },
}
</script>

<style scoped>
.svg-icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}

.svg-external-icon {
  background-color: currentColor;
  mask-size: cover !important;
  display: inline-block;
}
</style>
