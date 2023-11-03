<script setup>
  import { reactive, ref } from 'vue';
  import {useProvidersStore} from '../../stores/providersStore';

  const providersStore = useProvidersStore();

  const sended = ref(false);

  const formData = reactive({
    name: '',
    business: '',
    phone: '',
    email: '',
    adress: ''
  })

  const handleSubmit = async (data) => {
    try {
      await providersStore.addNewProvider({...data, active: true});
      sended.value = true;
      setTimeout(() => {
        sended.value = false;
      }, 3000);
      
    } catch (error) {
      console.log(error); 
    }
  }
</script>

<template>
  <h2 class="text-center text-2xl font-bold">New provider</h2>
  <p class="text-gray-600 text-center">Here you will can register new providers</p>

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

<style scoped>

</style>