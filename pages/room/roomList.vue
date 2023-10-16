<template>
  <div class="join py-4">
    <input v-model="inputTitle" class="input input-bordered join-item" placeholder="タイトルで検索" />
    <button @click="search" class="btn join-item rounded-r-full">検索</button>
  </div>
  <div class="flex space-x-4">
    <div class="card w-64 bg-base-100 shadow-xl" v-for="room in rooms">
      <div class="card-body">
        <h2 class="card-title">{{ room.title }}</h2>
        <p>作成ユーザ：{{ room.name }}</p>
        <p>{{ room.description }}</p>
        <div class="card-actions justify-end">
          <NuxtLink :to="`/chat/${room.id}`">
            <button class="btn btn-primary">開く</button>
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
const inputTitle = ref("")
// 初期表示処理。すべてのチャットルームを表示する
const { data: rooms } = useFetch('/api/model/room/selectAll')
// 検索時処理。部屋タイトル名の部分一致で検索を行う
const search = async() => {
  const {data: res} = await useFetch('/api/model/room/selectByTitle', {
    method: 'post',
    body: {title: inputTitle.value}
  })
  rooms.value = res.value
}
definePageMeta({
  layout: "custom",
})
</script>