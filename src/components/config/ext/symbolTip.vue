<template>
  <div class="cell-div">
    {{ $t('cron.common.symbolTip') }}<strong>{{ symbol }}</strong>
  </div>
</template>

<script>
export default {
  props: {
    symbol: {
      type: String,
      default: null
    }
  }
}
</script>
