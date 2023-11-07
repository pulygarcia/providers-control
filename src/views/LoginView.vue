<script setup>
    import {reactive} from 'vue'
    import MainHeader from '../components/MainHeader.vue';
    import {useAuthStore} from '../stores/authStore'
    import {Dialog, DialogPanel, DialogTitle, DialogDescription,} from '@headlessui/vue'

    const authStore = useAuthStore();

    const formData = reactive({
        email: '',
        password: ''
    })

    const submitHandler = (data) => {
        try {
            authStore.login(data);
        } catch (error) {
            console.log(error);
        }
    }
</script>

<template>
    <MainHeader />

    <main class="container mx-auto mt-8">
        <Dialog :open="authStore.currentError ? true : false" class="relative z-50">
            <div class="fixed top-0 flex w-screen items-center justify-end p-2">
            <DialogPanel class="w-full max-w-sm rounded-lg bg-red-200 p-5">
                <DialogTitle class="text-red-600 font-bold text-2xl">Error</DialogTitle>
                <DialogDescription class="text-gray-600">
                {{ authStore.currentError }}
                </DialogDescription>
                <button @click="authStore.currentError = ''" class="mt-4 py-1 px-8 bg-white rounded-lg text-red-600 hover:bg-gray-50 outline-none">Agree</button>
            </DialogPanel>
            </div>
        </Dialog>

        <h2 class="text-center text-2xl font-bold">Login</h2>
        <p class="text-gray-600 text-center">Start session as Admin</p>

        <div class="w-6/12 mt-11 mx-auto">
            <FormKit
                type="form"
                @submit="submitHandler"
                :value="formData"
                :actions="false"
            >
                <FormKit
                    type="text"
                    name="email"
                    label="E-mail"
                    placeholder="jane@example.com"
                    validation="required|email"
                    v-model="formData.email"
                />
                <FormKit
                    type="password"
                    name="password"
                    label="Password"
                    validation="required|length:6"
                    :validation-messages="{
                        length: 'Please write a password with 6 or more items',
                    }"
                    placeholder="Your password"
                    v-model="formData.password"
                />
                <FormKit
                    type="submit"
                    label="Start session"
                />
            </FormKit>
        </div>
    </main>
</template>