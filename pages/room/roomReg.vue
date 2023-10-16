<template>
    <div class="flex justify-center">
        <div class="w-full max-w-xs">
            <label class="label">
                <span class="label-text">タイトル</span>
            </label>
            <input v-model="inputForm.title" type="text" class="input input-bordered w-full max-w-xs" />
            <label class="label">
                <span class="label-text">説明文</span>
            </label>
            <textarea v-model="inputForm.description" type="text" class="textarea textarea-bordered w-full max-w-xs" />
            <div class="flex justify-end">
                <button class="btn btn btn-primary" @click="create">作成</button>
            </div>
        </div>
    </div>
</template>
<script setup>
const router = useRouter()
const inputForm = ref({})
const user = getUser()
const create = () => {
    if (user === null || user === "") {
        router.push('/')
    } else {
        inputForm.value.name = user
        inputForm.value.date = new Date().toLocaleDateString('ja-JP')
        const { data } = useFetch('/api/model/room/create', {
            method: 'post',
            body: inputForm.value
        })
        router.push({ path: "/room/roomList" })
    }
    inputForm.value = []
}
definePageMeta({
    layout: "custom",
})  
</script>