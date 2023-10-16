<template>
    <div>
        <div class="grid place-content-center h-48">
            <div class="flex space-x-4">
                <input type="text" v-model="name" class="input input-bordered" placeholder="お名前を入力してください" />
                <button class="btn btn-primary" @click="login">入力</button>
            </div>
        </div>
    </div>
</template>
<script setup>
const name = ref("")
const router = useRouter();
const login = () => {
    user(name)
    router.push({ path: "/room/roomList" })
}
</script>