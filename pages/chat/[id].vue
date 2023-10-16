<template>
    <div>
        <template v-for="chat in chats">
            <!-- チャットユーザ名とログインユーザ名を比較し、自分のチャットは右に来るようにする -->
            <div class="chat" :class="{ 'chat-start': user !== chat.name, 'chat-end': user === chat.name }">
                <div class="chat-bubble">{{ chat.text }}</div>
                <div class="chat-header">
                    {{ chat.name }}
                    <span class="text-xs opacity-50">{{ chat.date }}</span>
                </div>
            </div>
        </template>
        <div class="flex space-x-4 my-2">
            <textarea v-model="text" type="text" class="textarea textarea-bordered w-full max-w-xs" />
            <div class="self-end">
                <button class="btn btn btn-primary" @click="post">投稿</button>
            </div>
        </div>
    </div>
</template>
<script setup>
const user = getUser()
const text = ref("")
const route = useRoute()
const router = useRouter()
// チャット一覧取得
const { data: chats, refresh } = useFetch('/api/model/chat/selectByRoomId', {
    method: 'post',
    body: { id: parseInt(route.params.id) }
})
// 投稿
const post = async () => {
    console.log(getUser())
    if (user === null || user === "") {
        router.push('/')
    } else {
        const { data } = await useFetch('/api/model/chat/create', {
            method: 'post',
            body: {
                text: text.value,
                roomid: parseInt(route.params.id),
                name: user,
                date: new Date().toLocaleDateString('ja-JP')
            }
        })
    }
    text.value = ""
    refresh()
}
definePageMeta({
    layout: "custom",
})
</script>