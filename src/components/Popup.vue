<template>
  <main>
    <div class="popup">
      <div class="popup-inner">
        <div class="popup-border">
          <button class="popup-close">
            X
          </button>
          <div class="name-gif-container">
            <img class="gif-img" :src="testURL" alt="alt for gif">
          </div>
          <div class="popup-content">
            <p v-if="usertitle">
              <b>Title:</b> {{ usertitle }}
            </p>
            <p v-if="userdata.username">
              <b>User Name:</b> {{ userdata.username }}
            </p>
            <p v-if="userdata.display_name">
              <b>Display Name:</b> {{ userdata.display_name }}
            </p>
            <p v-if="userdata.description">
              <b>Description:</b> {{ userdata.description }}
            </p>
            <p v-if="userdata.website_url">
              <b>Site:</b> {{ userdata.website_url }}
            </p>
            <p v-if="userdata.is_verified">
              <b>Verified:</b> {{ userdata.is_verified }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useTestStore } from '~/stores/test'

const props = defineProps<{ newTestURL: string; newSearchTerm: string; newUserTitle: string; newUserdata: object }>()
const test = useTestStore()
const { testURL, userdata, usertitle } = storeToRefs(test)
</script>

<style>
.scrollbar-hidden::-webkit-scrollbar {
  display: none;
}

.scrollbar-hidden {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
.popup{
    position:fixed;
    top:0;
    left:0;
    right:0;
    bottom:0;
    z-index:99;
    background-color:rgba(0,0,0,0.8);
    overflow-y: auto;
    display:flex;
    align-items:center;
    justify-content:center;
}

.popup .popup-inner{
    position:relative;
    top:0px;
    padding-bottom:80px;
    padding-top:100px;
    max-width:800px;
}

.popup .popup-inner .popup-border{
    background:#fff;
    padding:20px;
    padding-top:0px;
}

.name-gif-container{
  display:flex;
  align-items:center;
  justify-content:center;
  margin-bottom:20px;
}

.gif-img{
  width:600px;
  max-height:600px;
}

.popup-close{
    display:flex;
    justify-content:right;
    width:100%;
}
.popup-content{
  display:flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;
  font-size:14px;
}
</style>
