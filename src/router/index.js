import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    name: "Index",
    path: "/",
    component: () => import("../views/front/Index.vue")
  },
  {
    path: "/front",
    component: () => import("../views/front/layout/Navbar.vue"),
    children: [
      {
        name: "Home",
        path: "/home",
        component: () => import("../views/front/Home.vue")
      },
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
        name: "Favorite",
        path: "/favorite",
        component: () => import("../views/front/Favorite.vue")
      },
      {
        name: "Checkout",
        path: "/checkout",
        component: () => import("../views/front/Checkout.vue")
      },
      {
        name: "CheckoutResult",
        path: "/checkout_result/:orderId",
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
    path: "*",
    name: "Error",
    component: () => import("../views/Error.vue")
  },
  {
    path: "/admin",
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
