// Composables
import { createRouter, createWebHistory } from "vue-router";

import Home from "@/views/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/registration",
    name: "Register",
    component: () => import("../layouts/auth/Register.vue"),
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("../layouts/auth/Login.vue"),
  },
  {
    path: "/shop",
    name: "Shop",
    component: () => import("../components/shop/Shop.vue"),
  },
  {
    path: "/product/:id",
    name: "Products",
    component: () => import("../components/products/Products.vue"),
  },
  {
    path: "/cart",
    name: "Cart",
    component: () => import("../components/cart/Cart.vue"),
  },
  {
    path: "/checkout",
    name: "Checkout",
    component: () => import("../components/cart/Checkout/Checkout.vue"),
  },
  {
    path: "/blog",
    name: "Blog",
    component: () => import("../components/Blog.vue"),
  },
  {
    path: "/posts",
    name: "Posts",
    component: () => import("../components/post/Posts.vue"),
  },
  {
    path: "/add-product",
    name: "AddProduct",
    component: () => import("../components/AddProduct.vue"),
  },
  {
    path: "/profile",
    name: "Profile",
    component: () => import("../components/profile/UserProfile.vue"),
  },
  {
    path: "/wishlist",
    name: "Wishlist",
    component: () => import("../components/Wishlist.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
