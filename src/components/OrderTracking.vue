<template>
  <v-container>
    <v-row dense align="center" justify="center">
      <v-col cols="12" v-for="order in userOrders" :key="order">
        <v-card class="justify-center align-center pa-5 ma-auto mb-4" variant="outlined" max-width="800">
          <v-card-subtitle>
            <div class="my-4 text-center">
              <h4>Order <span class="text-primary font-weight-bold">#{{ order.id }}</span></h4>
            </div>
          </v-card-subtitle>
          <v-card-title>
            <div>
              <v-list>
                <v-list-item :prepend-avatar="order?.cartItems[0]?.img" :title="order?.cartItems[0]?.title"
                  :subtitle="'$' + order?.cartItems[0]?.price">
                </v-list-item>
              </v-list>

            </div>
          </v-card-title>
          <v-timeline side="end" justify="center" align="center" direction="horizontal" truncate-line="both">
            <v-timeline-item size="small" v-for="status in order?.status" :key="status"
              :dot-color="status.isActive ? 'pink' : 'blue'">
              <div class="d-flex">
                <div>
                  <strong>{{ status?.name }}</strong>
                </div>
              </div>
            </v-timeline-item>
          </v-timeline>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>



<script>
import { getDocs, query, collection } from "firebase/firestore";
import { db } from "../firebase/config";

export default {
  name: "OrderTracking",

  data() {
    return {
      orderDetails: null,
      userOrders: [],
      allOrders: [],
      userId:
        JSON.parse(sessionStorage.getItem("userCredential"))?.user?.uid || null,
      showOrderDetails: false,
    };
  },

  methods: {
    async getOrders() {
      const querySnap = await getDocs(query(collection(db, "orders")));

      querySnap.forEach((doc) => {
        let pro = {
          id: doc.id,
          ...doc.data(doc.id),
        };
        this.allOrders.push(pro);
      });

      this.userOrders = this.allOrders.filter(
        (order) => order.userId == this.userId
      );
    },
    showDetails(order) {
      this.orderDetails = order;
      this.showOrderDetails = true;
    },
  },

  mounted() {
    this.getOrders();
  },
};
</script>
