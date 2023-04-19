<template>
  <v-container>
    <v-row>
      <v-col xs="12">
        <h2 class="text-red">Add New Product</h2>
      </v-col>
    </v-row>
    <v-row align="center" justify="center">
      <v-col xs="12" sm="10" md="8" offset-sm="1" offset-md="2" class="flex-column justify-center align-center">
        <v-card>
          <form @submit.prevent="addProduct">
            <v-col>
              <v-text-field label="Title" type="text" required v-model.trim="name"></v-text-field>
            </v-col>
            <v-col>
              <v-text-field label="Price" type="number" required v-model.trim="price"></v-text-field>
            </v-col>
            <v-col>
              <v-text-field label="Image Url" type="url" required v-model.trim="img"></v-text-field>
            </v-col>
            <v-col>
              <img :src="img" height="300" />
            </v-col>
            <v-col>
              <v-text-field label="Quantity" type="number" required v-model.trim="qty"></v-text-field>
            </v-col>
            <v-col>
              <v-select clearable label="Select" :items="['T-Shirt', 'Shoes', 'Shirts', 'Pant', 'Bags']"
                v-model="select"></v-select>
            </v-col>
            <v-col>
              <v-btn color="indigo-lighten-1" type="submit" :disabled="!formIsValid">Add</v-btn>
            </v-col>
          </form>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { collection, addDoc } from "firebase/firestore";
import { db } from '../firebase/config';

export default {
  name: 'AddProduct',

  data() {
    return {
      name: '',
      price: '',
      img: '',
      qty: '',
      select: null
    }
  },

  computed: {
    formIsValid() {
      return this.name !== '' && this.price !== '' && this.img !== '' && this.qty !== '' && this.select !== null
    },
  },

  methods: {
    async addProduct() {
      if (!this.formIsValid) {
        return
      }
      else {
        const colRef = collection(db, 'products')
        const dataObj = {
          name: this.name,
          price: this.price,
          img: this.img,
          qty: this.qty,
          select: this.select
        }
        const docRef = await addDoc(colRef, dataObj)
        console.log('Document was created with ID:', docRef.id)
        this.$router.push('/shop')
      }
    }
  },

  created() {
    this.addProduct()
  }
}
</script>
