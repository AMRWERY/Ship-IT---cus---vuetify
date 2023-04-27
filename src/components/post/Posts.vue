<template>
  <v-container grid-list-md>
    <h1 class="text-center font-italic font-weight-light">
      Best brands for fashion
    </h1>
    <br />
    <p class="overline text-center mb-5">
      BY <b class="font-italic text-red">Amr Mohamed</b> | April 12,2023
    </p>
    <v-row>
      <v-col md="12" sm="12" xs="12">
        <v-card class="mx-auto" max-width="1300">
          <v-img
            class="align-end text-white"
            height="400px"
            src="https://justfields.com/storage/projects/7M5rV059/slider3.jpg"
            cover
          />
        </v-card>
        <h3 class="pt-3 mb-1 text-h5">Lorem ipsum</h3>
        <p class="text-body-1 pt-5">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>

        <v-list lines="one">
          <v-list-item
            >Lorem ipsum dolor sit amet, consectetuer adipiscing
            elit.</v-list-item
          >
          <v-list-item>Aliquam tincidunt mauris eu risus.</v-list-item>
        </v-list>
        <p class="text-body-1 pt-5">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </v-col>
    </v-row>
    <v-row>
      <v-col md="12" sm="12" xs="12">
        <v-card class="mx-auto" max-width="1300">
          <v-img
            class="align-end text-white"
            height="400px"
            src="https://justfields.com/storage/projects/7M5rV059/slider2.jpg"
            cover
          />
        </v-card>
        <h3 class="pt-3 mb-1 text-h5">Lorem ipsum</h3>
        <p class="text-body-1 pt-5">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>

        <v-list lines="one">
          <v-list-item
            >Lorem ipsum dolor sit amet, consectetuer adipiscing
            elit.</v-list-item
          >
          <v-list-item>Aliquam tincidunt mauris eu risus.</v-list-item>
        </v-list>
        <p class="text-body-1 pt-5">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <Comments />
      </v-col>
    </v-row>
  </v-container>
  <Footer />
</template>

<script>
import Comments from "./Comments.vue";
import Footer from "../../layouts/Footer.vue";

export default {
  name: "Post",

  components: { Comments, Footer },
};
</script>

<style scoped>
b {
  text-decoration: underline;
}
</style>
