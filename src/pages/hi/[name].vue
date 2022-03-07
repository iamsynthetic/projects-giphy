<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useUserStore } from '~/stores/user'
import { useTestStore } from '~/stores/test'

const props = defineProps<{ newTestURL: string; newSearchTerm: string; name: string }>()
const router = useRouter()
const user = useUserStore()
const test = useTestStore()
const { t } = useI18n()
const { testURL, searchTerm } = storeToRefs(test)

onMounted(() => {
})

watchEffect(() => {
  user.setNewName(props.name)
})
</script>

<template>
  <div>
    <p class="text-4xl">
      <carbon-pedestrian class="inline-block" />
    </p>
    <p>
      {{ t('intro.hi', { name: props.name }) }}
    </p>
    <div>
      {{ testURL }}
    </div>
    <div>
      what is the searchterm: {{ searchTerm }}
    </div>
    <p class="text-sm opacity-50">
      <em>{{ t('intro.dynamic-route') }}</em>
    </p>

    <template v-if="user.otherNames.length">
      <p class="text-sm mt-4">
        <span class="opacity-75">{{ t('intro.aka') }}:</span>
        <ul>
          <li v-for="otherName in user.otherNames" :key="otherName">
            <router-link :to="`/hi/${otherName}`" replace>
              {{ otherName }}
            </router-link>
          </li>
        </ul>
      </p>
    </template>

    <div>
      <button
        class="btn m-3 text-sm mt-6"
        @click="router.back()"
      >
        {{ t('button.back') }}
      </button>
    </div>

    <div class="name-gif-container">
      <img class="gif-img" :src="testURL" alt="alt for gif">
    </div>
  </div>
</template>

<style>

.name-gif-container{
  display:flex;
  align-items:center;
  justify-content:center;
  width:100%;
  height: 300px;
}

.gif-img{
  width:300px;
  height:200px;
}

</style>
