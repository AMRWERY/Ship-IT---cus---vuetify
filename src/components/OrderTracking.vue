<template>
  <v-container>
    <div>
      <v-row>
        <v-col cols="6" xs="12" sm="12" md="6">
          <h3 class="mt-3">Track Your Order</h3>
        </v-col>
        <v-col cols="6" xs="12" sm="12" md="6">
          <v-chip
            class="mt-3 float-right"
            variant="outlined"
            color="cyan"
            v-for="order in userOrders"
            :key="order"
            @click="showDetails(order)"
          >
            <div>Order No: {{ order.id }}</div>
            <!-- <div>{{ new Date(order.orderDate).toLocaleString() }}</div> -->
          </v-chip>
        </v-col>
      </v-row>
      <v-row>
        <v-col
          class="mt-5"
          v-for="status in orderDetails?.status"
          :key="status"
        >
          <v-timeline direction="horizontal">
            <v-timeline-item dot-color="pink"> </v-timeline-item>
            <div>
              <div class="text-h6 text-purple-lighten-2">
                {{ status.name }}
              </div>
              <p>
                status:
                <span class="text-light-green-lighten-1">{{
                  status.isActive
                }}</span>
              </p>
            </div>
          </v-timeline>
        </v-col>
      </v-row>
    </div>
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
