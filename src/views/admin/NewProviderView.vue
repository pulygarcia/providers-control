<script setup>

</script>

<template>
  <h2 class="text-center text-2xl font-bold">New provider</h2>
  <p class="text-gray-600 text-center">Here you will can register new providers</p>

  <main class="mx-auto w-6/12 mt-11">
    <FormKit
      type="form"
    >
      <FormKit
        type="text"
        name="name"
        placeholder="Antonius"
        label="Name"
        validation="required"
      />
      <FormKit
        type="text"
        name="business"
        placeholder="Antonio banderas"
        label="Business"
        validation="required"
      />
      <FormKit
        type="tel"
        label="Phone number"
        placeholder="xxx-xxx-xxxx"
        validation="matches:/^[0-9]{3}-[0-9]{3}-[0-9]{4}$/"
        :validation-messages="{
          matches: 'Phone number must be in the format xxx-xxx-xxxx',
        }"
      />
    </FormKit>
  </main>
</template>

<style scoped>

</style>