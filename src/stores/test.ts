import { acceptHMRUpdate, defineStore } from 'pinia'

export const useTestStore = defineStore('test', () => {
  /**
   * Current named of the user.
   */
  const testURL = ref('sampleurl.com')
  const searchTerm = ref('')
  const userdata = ref({})
  const usertitle = ref('')

  /**
   * Changes the current name of the user and saves the one that was used
   * before.
   *
   * @param newTestURL - new name to set
   * @param newSearchTerm
   * @param newUserdata
   * @param newUserTitle
   */
  function setNewTestURL(newTestURL: string) {
    console.log(`setnewtesturl is: ${newTestURL}`)
    testURL.value = newTestURL
  }

  function changeSearchTerm(newSearchTerm: string) {
    console.log(`test changeSearchTerm is: ${newSearchTerm}`)
    searchTerm.value = newSearchTerm
  }

  function setUserTitle(newUserTitle: string) {
    console.log(`test - newUserTitle is: ${newUserTitle}`)
    usertitle.value = newUserTitle
  }

  function setUserdata(newUserdata: object) {
    console.log(`newUserdata is: ${userdata}`)
    console.log(`newUserdata.useravatar is: ${newUserdata.useravatar}`)
    console.log(`newUserdata.banner_image is: ${newUserdata.banner_image}`)
    console.log(`newUserdata.banner_url is: ${newUserdata.banner_url}`)
    console.log(`newUserdata.profile_url is: ${newUserdata.profile_url}`)
    console.log(`newUserdata.username is: ${newUserdata.username}`)
    console.log(`newUserdata.display_name is: ${newUserdata.display_name}`)
    console.log(`newUserdata.description is: ${newUserdata.description}`)
    console.log(`newUserdata.instagram_url is: ${newUserdata.instagram_url}`)
    console.log(`newUserdata.website_url is: ${newUserdata.website_url}`)
    console.log(`newUserdata.is_verified is: ${newUserdata.is_verified}`)
    userdata.value = newUserdata
  }

  return {
    setNewTestURL,
    testURL,
    changeSearchTerm,
    searchTerm,
    setUserdata,
    userdata,
    setUserTitle,
    usertitle,
  }
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useTestStore, import.meta.hot))
