<template>
  <a
    href="#"
    id="back-to-top"
    title="Back to top"
    :class="{ '`show`': show }"
    @click.prevent="scrollTop"
  >
    <i class="fa fa-angle-up"></i>
  </a>
</template>

<script>
/* global $ */
export default {
  data() {
    return {
      show: false
    };
  },
  mounted() {
    $(window).scroll(function() {
      if ($(this).scrollTop() > 400) {
        $("#back-to-top").addClass("show");
      } else {
        $("#back-to-top").removeClass("show");
      }
    });
  },
  methods: {
    scrollTop() {
      $("html, body").animate({ scrollTop: 0 }, 1000);
    }
  }
};
</script>
