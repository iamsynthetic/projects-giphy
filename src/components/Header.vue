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

    <button class="nav-space-right-side-last icon-btn !outline-none" :title="t('button.toggle_dark')" @click="toggleDark()">
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

import { ref } from 'vue'
import { isDark, toggleDark } from '~/composables'
import { useTestStore } from '~/stores/test'

const { t } = useI18n()
const test = useTestStore()
const thesearchterm = ref('')

function sendNewSearchTerm(searchterm: string) {
  test.changeSearchTerm(searchterm)
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
@media (min-width: 571px) and (max-width: 795px) {
  .search-bar, .search-field{
    width:40vw;
    margin-left:10px;
  }
}
</style>
