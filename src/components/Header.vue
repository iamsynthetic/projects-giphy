<template>
  <nav class="nav text-md">
    <router-link class="logo icon-btn" to="/" :title="t('button.home')">
      GIPHY
    </router-link>
    <div class="search-bar">
      <input
        v-model="thesearchterm"
        class="search-field"
        reverse
        placeholder="search"
        onfocus="this.placeholder=''"
        onblur="this.placeholder='search'"
        filled
        rounded
        dense
        @keyup.enter="sendNewSearchTerm(thesearchterm)"
      >
    </div>

    <!-- <button class="nav-space-right-side icon-btn" @click="uploadPopUp">
      UPLOAD
    </button>
    <button class=" icon-btn" @click="createPopUp">
      CREATE
    </button>
    <button class=" icon-btn" @click="loginPopUp">
      LOGIN
    </button> -->
    <button class="nav-space-right-side-last icon-btn !outline-none" :title="t('button.toggle_dark')" @click="toggleDark()">
      <!-- <carbon-moon v-if="isDark" class="light-change-icon" />
      <carbon-sun v-else class="light-change-icon" /> -->
      <p v-if="isDark" class="showthis">
        light
      </p>
      <p v-else class="showthis">
        dark
      </p>
    </button>
  </nav>
</template>

<script setup lang="ts">

import { isDark, toggleDark } from '~/composables'
import { useUserStore } from '~/stores/user'
import { useTestStore } from '~/stores/test'

const { t } = useI18n()
const user = useUserStore()
const test = useTestStore()
const name = ref(user.savedName)
const router = useRouter()
const thesearchterm = ''
const go = () => {
  if (name.value)
    router.push(`/hi/${encodeURIComponent(name.value)}`)
}

// methods
const uploadPopUp = () => {
  alert('upload pop up')
}
const createPopUp = () => {
  alert('create pop up')
}
const loginPopUp = () => {
  alert('login pop u  p')
}
const sendNewSearchTerm = (searchterm: string) => {
  test.changeSearchTerm(searchterm)
  console.log(`header: ${test.searchTerm}`)
}
</script>

<style>
.nav{
  display: flex;
  align-items: center;
  justify-content:space-between;
  height:40px;
}
.logo{
  font-size:20px;
  padding-left:20px;
  /* padding-right:100px; */
}
.nav-space{
}
.right-side-nav{

}
.nav-space-right-side{
  padding-left:50px;
}
.nav-space-right-side-last{
  display:flex;
  padding-right:100px;
}

.search-field {
  background-color:#F7F7F7;
}
.search-bar, .search-field{
  width: 70vw;
  text-align:left;
  margin:0;
  padding:0;

}

.showthis{
    display: flex;
    top: 11px;
    right: 26px;
    position: absolute;
}

.search-bar, .search-field{
  width: 70vw;
  text-align:left;
  margin:0;
  padding:0;

}

@media (max-width: 480px) {
  .search-bar, .search-field{
    width:250px;
    margin-left:10px;
  }
}
@media (max-width: 570px) {
  .search-bar, .search-field{
    width:250px;
    margin-left:10px;
  }
}
@media (min-width: 571px && max-width: 795px) {
  .search-bar, .search-field{
    width:40vw;
    margin-left:10px;
  }
}
</style>
