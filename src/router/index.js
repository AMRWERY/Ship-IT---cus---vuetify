// Composables
import { createRouter, createWebHistory } from "vue-router";
import Register from "../layouts/auth/Register.vue";

const routes = [
  {
    path: "/",
    name: "Register",
    component: Register,
    meta: { requiresAuth: false },
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("../layouts/auth/Login.vue"),
    meta: { requiresAuth: false },
  },
  {
    path: "/home",
    name: "Home",
    component: () => import("../views/Home.vue"),
    meta: { requiresAuth: true },
  },
  {
    path: "/shop",
    name: "Shop",
    component: () => import("../components/shop/Shop.vue"),
    meta: { requiresAuth: true },
  },
  {
    path: "/product/:id",
    name: "Products",
    component: () => import("../components/products/Products.vue"),
    meta: { requiresAuth: true },
  },
  {
    path: "/cart",
    name: "Cart",
    component: () => import("../components/cart/Cart.vue"),
    meta: { requiresAuth: true },
  },
  {
    path: "/checkout",
    name: "Checkout",
    component: () => import("../components/cart/Checkout/Checkout.vue"),
    meta: { requiresAuth: true },
  },
  {
    path: "/blog",
    name: "Blog",
    component: () => import("../components/Blog.vue"),
    meta: { requiresAuth: true },
  },
  {
    path: "/posts",
    name: "Posts",
    component: () => import("../components/post/Posts.vue"),
    meta: { requiresAuth: true },
  },
  {
    path: "/profile",
    name: "Profile",
    component: () => import("../components/profile/UserProfile.vue"),
    meta: { requiresAuth: true },
  },
  {
    path: "/order-tracking",
    name: "OrderTracking",
    component: () => import("../components/OrderTracking.vue"),
    meta: { requiresAuth: true },
  },
  {
    path: "/wishlist",
    name: "Wishlist",
    component: () => import("../components/Wishlist.vue"),
    meta: { requiresAuth: true },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth && !sessionStorage.getItem('userCredential')) {
    next({ name: "Login" });
  } else {
    next();
  }
});

export default router;
