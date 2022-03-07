<template>
  <div>
    <thepopup v-if="popupTriggers.buttonTrigger" @click="() => togglePopup('buttonTrigger', 'sample', 'sample', 'sample', ['sample'])">
      <h1>testing</h1>
    </thepopup>
    <div class="flex-container">
      <div v-for="(index) in boxes" :key="index">
        <div class="box">
          <div v-if="fullaxiosData">
            <div>
              <div class="content-group2-overlay" @click="() => togglePopup('buttonTrigger', fullaxiosData.data.data[index-1].id, fullaxiosData.data.data[index-1].images.original.url, fullaxiosData.data.data[index-1].title, fullaxiosData.data.data[index-1].user)">
                <div class="thetitle">
                  {{ fullaxiosData.data.data[index-1].title }}
                </div>
                <div class="theuser">
                  {{ fullaxiosData.data.data[index-1].username }}
                </div>
              </div>
              <img :id="'image'+[index-1]" class="gif-images" :src="fullaxiosData.data.data[index-1].images.downsized_still.url" :alt="fullaxiosData.data.data[index-1].title">
            </div>
            <div class="content-container">
              <div class="content-group1">
                <div class="thedate">
                  {{ fullaxiosData.data.data[index-1].import_datetime }}
                </div>
                <div class="thecategory">
                  {{ thecategory }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useAxios } from '@vueuse/integrations/useAxios'
import { reactive, ref, watch } from 'vue'
import Popup from '/src/components/Popup.vue'
import { useTestStore } from '~/stores/test'

const router = useRouter()
const test = useTestStore()
const boxes = 50
const thecategory = 'gaming'
const fullaxiosURL = ref('baseball')
const fullaxiosData = ref('')
const thepopup = Popup
const popupTriggers = ref ({ buttonTrigger: false, timedTrigger: false })
const bool = reactive({
  istrue: 'true',
  active: 'overflow: show',
})
const allData = reactive({
  thevaluethatchanges: 'baseball',
  thebaseurl: 'https://api.giphy.com/v1/gifs/search?api_key=k9Sla2CsxOdurUwbfkebubfaVJqKJ3HS&q=',
  therestoftheurl: '=&limit=50&offset=0&rating=g&lang=en',
})

const allAxios = () => {
  const axiosURL = allData.thebaseurl + allData.thevaluethatchanges + allData.therestoftheurl
  fullaxiosURL.value = axiosURL
  const axiosData = useAxios(axiosURL)
  fullaxiosData.value = axiosData
}

onMounted(() => {
  test.setNewTestURL('good day sir!')
})

watch(test, () => {
  console.log(`searchTerm!!!! is: ${test.searchTerm}`)

  if (test.searchTerm !== '')
    allData.thevaluethatchanges = test.searchTerm

  else
    allData.thevaluethatchanges = 'baseball'

  allAxios()
})

watch(allData, () => {
  allAxios()
})

watch(bool, () => {
  console.log('gogogoignoingeoinogiengoi')
  document.body.style = bool.active
  console.log(`watch - bool.active is: ${bool.active}`)
})

const go = (thepageurl: string, thegifurl: string) => {
  router.push(`/hi/${thepageurl}`)
  test.setNewTestURL(thegifurl)
  test.changeSearchTerm(allData.thevaluethatchanges)
}

const togglePopup = (trigger, thepageurl: 'sample', thegifurl: 'sample', title: 'sample', userdata: [something]) => {
  popupTriggers.value[trigger] = !popupTriggers.value[trigger]

  if (bool.active == 'overflow: hidden') {
    console.log(`1 togglepopup - bool.active is: ${bool.active}`)
    bool.active = 'overflow: show'
    console.log(`2 togglepopup - bool.active is: ${bool.active}`)
  }
  else if (bool.active == 'overflow: show') {
    console.log(`2 togglepopup - bool.active is: ${bool.active}`)
    bool.active = 'overflow: hidden'
  }

  test.setNewTestURL(thegifurl)
  test.changeSearchTerm(allData.thevaluethatchanges)
  test.setUserTitle(title)
  test.setUserdata(userdata)
}

</script>

<style>

.flex-container {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: row;
    flex-wrap: wrap;
    align-content: flex-start;
}

.box {
  display:flex;
  width:250px;
  margin:20px 5px 0px 5px;
  overflow-x:hidden;
}

.gif-images{
  width:250px;
  height:150px;
  margin:auto;
}

.content-group1{
  display:flex;
  flex-direction:row;
  font-size:10px;
  margin-bottom:5px;
}

.content-group1 .thecategory{
  margin-left:auto;
}

.content-group2-overlay:hover {
  opacity:1;
  cursor: pointer;
}

.content-group2-overlay{
  display: flex;
  align-items: flex-end;
  flex-direction: column;
  position: absolute;
  width: 250px;
  height: 150px;
  opacity:0;
  margin-top: auto;
  margin-top: auto;
  margin-bottom: 10px;
  background: linear-gradient(rgba(0, 0, 0, 0), black);
  transition: 0.3s;
}

.content-group2-overlay .thetitle{
  display: flex;
  color: white;
  font-size: 14px;
  width: 250px;
  align-items: left;
  text-align: left;
  margin-top: auto;
  padding-left:8px;
}
.content-group2-overlay .theuser{
  display: flex;
  color: white;
  font-size: 10px;
  width: 250px;
  align-items: left;
  text-align: left;
  padding-left:8px;
  padding-bottom:10px;
}

.content-group2-overlay .thebutton{
  width: 80px;
  margin-bottom: 8px;
  margin-right: 8px;
}

.content-group2{
  display:flex;
  flex-direction:column;
  flex:1;
}

.content-group2 .thetitle{
  font-size:14px;
}

.content-group2 .theuser{
  font-size:10px;
}

.content-group2 .theuseravatar{
  width:20px;
  height:20px;
}

.content-group2 .thebutton{
  margin-top: auto;
  margin-bottom:10px;
}

.list-item-search-bar{
    list-style:none;
    margin-top:20px;
    flex-grow: 6;
}

</style>

<!-- <route lang="yaml">
meta:
  layout: home
</route> -->
