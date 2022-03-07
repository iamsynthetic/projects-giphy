<template>
  <Tester last-name="tomotsugu" />
  <info />
  <h3 class="text-4xl text-green-500 bg-yellow-700 rounded-lg">
    hello world {{ firstname }}
  </h3>
  <h5>{{ t("intro.desc") }}</h5>
  <br>
  <br>
  <br>
  <br>
  <div class="rectangle-5 animate-enter" />
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import info from '~/pages/bye/info.md'
const firstname = 'chris'
const { t } = useI18n()
</script>

<style>
  .rectangle-5 {
  background-color:
#000000;
  cursor: pointer;
  height: 98px;
  opacity: 0;
  transform: translate(-25px, 0);
  transition: all 0.2s ease-in-out;
  width: 406px;
}

.rectangle-5.animate-enter {
  animation: animate-enter-frames 0.50s ease-in-out 0.00s 1 normal forwards;
  opacity: 0;
  transform: translate(-25px, 0);
}

@keyframes animate-enter-frames {
  from{opacity: 0;
transform: translate(-25px, 0);
}
to{opacity: 1;
transform: translate(0,0);
}
}

.rectangle-5:hover {
  transform: scale(1.1);
}

</style>

<route lang="yaml">
meta:
  layout: top
</route>
