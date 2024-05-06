Vue.createApp({
  data() {
    return {
      isDark: false,
    };
  },
  methods: {
    toggleLight() {
      this.isDark = !this.isDark;
      if (this.isDark) {
        document.body.classList.add("dark");
        document.title = "Good Night";
      } else {
        document.body.classList.remove("dark");
        document.title = "Good Morning";
      }
    },
  },
}).mount("#app");
