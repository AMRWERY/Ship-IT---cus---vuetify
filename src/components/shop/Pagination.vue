<template>
  <v-container class="max-width mt-12">
    <v-pagination v-model="page" class="my-4" :length="15"></v-pagination>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      page: 1,
    }
  }
}
</script>
