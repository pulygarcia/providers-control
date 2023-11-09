<script setup>
    import { reactive, watch } from 'vue';
    import { useRouter, useRoute } from 'vue-router';
    import {useDocument} from 'vuefire';
    import { doc } from "firebase/firestore";
    import {useProvidersStore} from '../../stores/providersStore';
    import {Dialog, DialogPanel, DialogTitle, DialogDescription,} from '@headlessui/vue'

    const providersStore = useProvidersStore();
    const router = useRouter();
    const route = useRoute();

    const formData = reactive({
        name: '',
        business: '',
        phone: '',
        email: '',
        adress: ''
    })

    const db = providersStore.db;
    const providerRef = doc(db, 'providers', route.params.id);
    const selectedProvider = useDocument(providerRef);

    watch(selectedProvider, (selectedProvider) => {
        //If there isnt product, return user to products view
        if(!selectedProvider){
            router.push({name: 'admin-providers'});

            return;
        }
        
        //Fill the form
        Object.assign(formData, selectedProvider);
    })

    const handleSubmit = async (data) => {
        try {
        await providersStore.modifyProvider(providerRef, data);
        
        setTimeout(() => {
            router.push({name: 'admin-providers'});
        }, 3000);

        } catch (error) {
        console.log(error); 
        }
  }
</script>

<template>
  <h2 class="text-center text-2xl font-bold">Modify provider</h2>
  <p class="text-gray-600 text-center">Here you will can modify the selected provider fields</p>

  <Dialog :open="providersStore.successMessage ? true : false" class="relative z-50">
    <div class="fixed top-0 flex w-screen items-center justify-end p-2">
      <DialogPanel class="w-full max-w-sm rounded-lg bg-green-100 p-5">
        <DialogTitle class="text-green-600 font-bold text-2xl">Success</DialogTitle>
        <DialogDescription class="text-gray-600">
          {{providersStore.successMessage}}
        </DialogDescription>
        <button @click="providersStore.successMessage = ''" class="mt-4 py-1 px-8 bg-white rounded-lg text-green-600 hover:bg-gray-50 outline-none">Agree</button>
      </DialogPanel>
    </div>
  </Dialog>

  <main class="mx-auto w-6/12 mt-11">
    <FormKit
      type="form"
      :actions="false"
      @submit="handleSubmit"
      :value="formData"
    >
      <FormKit
        type="text"
        name="name"
        placeholder="Antonius"
        label="Name"
        validation="required|length:3"
        :validation-messages="{
          length: 'Name is too short',
          required: 'Please put a name'
        }"
        v-model="formData.name"
      />
      <FormKit
        type="text"
        name="business"
        placeholder="Antonio banderas"
        label="Business"
        validation="required|length:3"
        :validation-messages="{
          length: 'Business name is too short',
          required: 'Please put a business'
        }"
        v-model="formData.business"
      />
      <FormKit
        type="tel"
        name="phone"
        label="Phone number"
        placeholder="xxx-xxx-xxxx"
        validation="required|matches:/^[0-9]{3}-[0-9]{3}-[0-9]{4}$/"
        :validation-messages="{
          matches: 'Phone number must be in the format xxx-xxx-xxxx',
          required: 'Please put a number'
        }"
        v-model="formData.phone"
      />
      <FormKit
        type="email"
        label="E-mail"
        name = "email"
        placeholder="business@business.com"
        validation="required|email"
        :validation-messages="{
          email: 'Invalid email',
          required: 'Please put an email'
        }"
        v-model="formData.email"
      />
      <FormKit
        type="text"
        label="Adress"
        name = "adress"
        placeholder="Avellaneda 362"
        validation="required|length:5"
        :validation-messages="{
          length: 'Adress is too short',
          required: 'Please put an adress'
        }"
        v-model="formData.adress"
      />
      <FormKit
        type="submit"
        label="Add provider"
      />
    </FormKit>
  </main>
</template>