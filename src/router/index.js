import Vue from "vue";
import VueRouter from "vue-router";
// import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    name: "Index",
    path: "/",
    component: () => import("../views/front/Index.vue")
  },
  {
    path: "/front",
    name: "Front",
    component: () => import("../views/front/layout/Navbar.vue"),
    children: [
      {
        name: "Front",
        path: "/home",
        component: () => import("../views/front/Home.vue")
      },
      {
        name: "Front",
        path: "/about",
        component: () => import("../views/front/About.vue")
      },
      {
        name: "Front",
        path: "/works",
        component: () => import("../views/front/Works.vue")
      },
      {
        name: "Front",
        path: "/product/:id",
        component: () => import("../views/front/Work.vue")
      },
      {
        name: "Front",
        path: "/contact",
        component: () => import("../views/front/Contact.vue")
      },
      {
        name: "Front",
        path: "/cart",
        component: () => import("../views/front/Cart.vue")
      },
      {
        name: "Front",
        path: "/favorite",
        component: () => import("../views/front/Favorite.vue")
      },
      {
        name: "Front",
        path: "/checkout",
        component: () => import("../views/front/Checkout.vue")
      },
      {
        name: "Front",
        path: "/checkout_result/:orderId",
        component: () => import("../views/front/CheckoutFinish.vue")
      },
      {
        name: "Front",
        path: "/order",
        component: () => import("../views/front/Order.vue")
      }
    ]
  },
  {
    path: "/login",
    name: "Front",
    component: () => import("../views/back/Login.vue")
  },
  {
    path: "*",
    name: "404",
    component: () => import("../views/Error.vue")
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
