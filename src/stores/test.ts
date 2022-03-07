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
    testURL.value = newTestURL
  }

  function changeSearchTerm(newSearchTerm: string) {
    searchTerm.value = newSearchTerm
  }

  function setUserTitle(newUserTitle: string) {
    usertitle.value = newUserTitle
  }

  function setUserdata(newUserdata: object) {
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
