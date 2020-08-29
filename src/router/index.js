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
        name: "ORder",
        path: "/order",
        component: () => import("../views/front/Order.vue")
      }
    ]
  }
];

const router = new VueRouter({
  routes
});

export default router;
