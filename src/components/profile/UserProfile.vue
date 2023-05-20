<template>
  <v-container>
    <v-row>
      <v-col cols="12" sm="12" md="10" lg="8">
        <v-card>
          <Form />
        </v-card>
      </v-col>

      <v-col cols="12" sm="12" md="10" lg="4">
        <v-card class="mx-auto" max-width="368">
          <v-card-text class="py-0">
            <v-row align="center" no-gutters>
              <v-col class="text-h4" cols="6">Profile</v-col>

              <v-col cols="6" class="text-right">
                <v-avatar
                  image="https://justfields.com/storage/projects/7M5rV059/photo_2023-05-14_16-32-00.jpg"
                  size="80"
                ></v-avatar>
              </v-col>
            </v-row>
          </v-card-text>

          <v-row align="center" class="mt-3" no-gutters>
            <v-col cols="6">
              <v-chip class="ma-2" color="green">Online</v-chip>
            </v-col>

            <v-col cols="6">
              <v-btn
                size="small"
                color="surface-variant"
                variant="text"
                icon="mdi-heart"
              ></v-btn>

              <v-btn
                size="small"
                color="surface-variant"
                variant="text"
                icon="mdi-bookmark"
              ></v-btn>

              <v-btn
                size="small"
                color="surface-variant"
                variant="text"
                icon="mdi-share-variant"
              ></v-btn>
            </v-col>
          </v-row>

          <v-expand-transition>
            <div v-if="expand">
              <div class="py-2">
                <v-divider :thickness="3"></v-divider>
              </div>

              <v-list>
                <v-list-item
                  v-for="(item, i) in items"
                  :key="i"
                  :value="item"
                  rounded="shaped"
                >
                  <template v-slot:append>
                    <v-icon :icon="item.icon" size="x-large"></v-icon>
                  </template>
                  <v-list-item-title v-text="item.text"></v-list-item-title>
                </v-list-item>
              </v-list>
            </div>
          </v-expand-transition>
          <v-divider />
          <v-card-actions>
            <v-btn @click="expand = !expand">
              {{ !expand ? "Full Report" : "Hide Report" }}
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
  <Footer />
</template>

<script>
import Form from "./Form.vue";

export default {
  name: "Profile",

  components: { Form },

  data() {
    return {
      expand: false,
      selectedItem: 1,
      items: [
        { text: "Amr Mohamed", icon: "mdi mdi-account-circle-outline" },
        { text: "Platinum Client", icon: "mdi mdi-apple-keyboard-command" },
        { text: "Change Language", icon: "mdi mdi-web" },
      ],
    };
  },
};
</script>
