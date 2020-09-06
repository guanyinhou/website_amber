import Vue from "vue";
import VueRouter from "vue-router";
// import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    name: "Home",
    path: "/",
    component: () => import("../views/front/Home.vue")
  },
  {
    path: "/front",
    name: "Home",
    component: () => import("../views/front/layout/Navbar.vue"),
    children: [
      {
        name: "About",
        path: "/about",
        component: () => import("../views/front/About.vue")
      },
      {
        name: "Works",
        path: "/works",
        component: () => import("../views/front/Works.vue")
      },
      {
        name: "Work",
        path: "/product/:id",
        component: () => import("../views/front/Work.vue")
      },
      {
        name: "Contact",
        path: "/contact",
        component: () => import("../views/front/Contact.vue")
      },
      {
        name: "Cart",
        path: "/cart",
        component: () => import("../views/front/Cart.vue")
      },
      {
        name: "Checkout",
        path: "/checkout",
        component: () => import("../views/front/Checkout.vue")
      },
      {
        name: "CheckoutFinish",
        path: "/checkout_finish",
        component: () => import("../views/front/CheckoutFinish.vue")
      },
      {
        name: "Order",
        path: "/order",
        component: () => import("../views/front/Order.vue")
      }
    ]
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("../views/back/Login.vue")
  },
  {
    path: "/admin",
    name: "Back",
    component: () => import("../views/back/layout/Nav.vue"),
    children: [
      {
        name: "Dashboard",
        path: "",
        component: () => import("../views/back/Dashboard.vue"),
        meta: { requiresAuth: true }
      },
      {
        name: "Products",
        path: "products",
        component: () => import("../views/back/Products.vue"),
        meta: { requiresAuth: true }
      },
      {
        name: "Coupon",
        path: "coupon",
        component: () => import("../views/back/Coupon.vue"),
        meta: { requiresAuth: true }
      },
      {
        name: "Pictures",
        path: "pictures",
        component: () => import("../views/back/Pictures.vue"),
        meta: { requiresAuth: true }
      },
      {
        name: "Orders",
        path: "Orders",
        component: () => import("../views/back/Orders.vue"),
        meta: { requiresAuth: true }
      },
      {
        name: "Animate",
        path: "animate",
        component: () => import("../views/back/Animate.vue"),
        meta: { requiresAuth: true }
      }
    ]
  }
];

const router = new VueRouter({
  routes
});

export default router;
