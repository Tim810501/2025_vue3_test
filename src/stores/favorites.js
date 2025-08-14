import { ref } from 'vue'
import { defineStore } from 'pinia'
// 可以不用做到local storage

export const useFavoriteStore = defineStore('favoriteStore', () => {
  const list = ref([])

  // 任務8. 加入我的最愛
  const addFav = (target) => {
    if (!target || !target.id) return
    
    const exists = list.value.some(item => item.id === target.id)
    if (!exists) {
      list.value.push(target)
    }
  }

  // 移除我的最愛
  const removeFav = (target) => {
    const targetID = target && target.id? target.id : null
    if (!targetID) return

    const idx = list.value.findIndex(fav => fav.id == targetID)
    if (idx >= 0){
      list.value.splice(idx, 1)
    }
  }

  const isFavorite = (target) => {
    return list.value.some(item => item.id === target.id)
  }

  return { list, addFav, removeFav, isFavorite }
})
