<template>
  <v-container grid-list-md>
    <v-row>
      <v-col cols="12">
        <h1 class="text-center font-italic font-weight-light">
          Read About Fashion
        </h1>
      </v-col>
    </v-row>
    <v-row class="mx-2">
      <v-col xs="12" sm="12" md="9" lg="4">
        <v-card class="mx-auto" max-width="400">
          <v-img
            class="align-end text-white"
            height="200"
            src="https://justfields.com/storage/projects/7M5rV059/slider3.jpg"
            cover
          >
            <v-card-title>Top 10 Fashion of the Week</v-card-title>
          </v-img>

          <v-card-subtitle class="pt-4"> Lorem ipsum </v-card-subtitle>

          <v-card-text>
            <div>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Nibh
              venenatis cras sed felis eget velit aliquet sagittis id. Enim
              praesent elementum facilisis leo vel fringilla est ullamcorper.
            </div>
          </v-card-text>

          <v-card-actions>
            <v-btn color="orange" to="/posts"> Read More </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
      <v-col xs="12" sm="12" md="9" lg="4">
        <v-card class="mx-auto" max-width="400">
          <v-img
            class="align-end text-white"
            height="200"
            src="https://justfields.com/storage/projects/7M5rV059/slider01.jpg"
            cover
          >
            <v-card-title>Best brands for fashion</v-card-title>
          </v-img>

          <v-card-subtitle class="pt-4"> Lorem ipsum </v-card-subtitle>

          <v-card-text>
            <div>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Nibh
              venenatis cras sed felis eget velit aliquet sagittis id. Enim
              praesent elementum facilisis leo vel fringilla est ullamcorper.
            </div>
          </v-card-text>

          <v-card-actions>
            <v-btn color="orange" to="/posts"> Read More </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
      <v-col xs="12" sm="12" md="9" lg="4">
        <v-card class="mx-auto" max-width="400">
          <v-img
            class="align-end text-white"
            height="200"
            src="https://justfields.com/storage/projects/7M5rV059/slider04.jpg"
            cover
          >
            <v-card-title>Fashion Tips & Tricks</v-card-title>
          </v-img>

          <v-card-subtitle class="pt-4"> Lorem ipsum </v-card-subtitle>

          <v-card-text>
            <div>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Nibh
              venenatis cras sed felis eget velit aliquet sagittis id. Enim
              praesent elementum facilisis leo vel fringilla est ullamcorper.
            </div>
          </v-card-text>

          <v-card-actions>
            <v-btn color="orange" to="/posts"> Read More </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
  <Footer />
</template>

<script>
import Footer from "@/layouts/Footer.vue";

export default {
  name: "Blog",

  components: { Footer },
};
</script>


