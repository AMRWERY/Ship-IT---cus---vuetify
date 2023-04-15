<template>
  <div>
    <v-toolbar color="indigo-lighten-2">
      <v-toolbar-title><v-icon icon="mdi mdi-van-utility" start></v-icon>Ship-IT</v-toolbar-title>
      <v-spacer />
      <v-btn icon>
        <v-icon icon="mdi mdi-account-circle"></v-icon>
      </v-btn>
      <v-btn icon>
        <v-badge :content="6" color="orange-lighten-1">
          <v-icon icon="mdi mdi-bell-ring"></v-icon>
        </v-badge>
      </v-btn>
      <v-btn icon to="/cart">
        <v-badge :content="2" color="green-darken-1">
          <v-icon icon="mdi mdi-cart-outline"></v-icon>
        </v-badge>
      </v-btn>
    </v-toolbar>
  </div>

  <div>
    <v-toolbar color="white">
      <v-row align="center" justify="center">
        <v-col cols="12" class="py-2 d-flex align-center justify-center">

          <v-btn-toggle v-model="text" rounded="0" group>
            <v-btn value="left" to="/">
              Home
            </v-btn>

            <v-menu open-on-hover>
              <template v-slot:activator="{ props }">
                <v-btn v-bind="props">
                  Shop
                </v-btn>
              </template>

              <v-list>
                <v-list-item style="cursor: pointer" v-for="(item, index) in items" :key="index" to="/shop">
                  <v-list-item-title>{{ item.title }}</v-list-item-title>
                </v-list-item>
              </v-list>
            </v-menu>

            <v-btn value="right" to="product">
              Product
            </v-btn>

            <v-btn value="justify" to="/blog">
              Blog
            </v-btn>
          </v-btn-toggle>
        </v-col>
      </v-row>
    </v-toolbar>
  </div>
</template>

<script>
export default {
  name: 'Toolbar',

  data: () => ({
    items: [
      { title: 'T-Shirts' },
      { title: 'Jackets' },
      { title: 'Shirts' },
      { title: 'Jeans' },
      { title: 'Shoes' },
    ],
  }),
}
</script>
