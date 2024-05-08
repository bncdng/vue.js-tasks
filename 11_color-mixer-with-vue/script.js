Vue.createApp({
  data() {
    return {
      red: "",
      green: "",
      blue: "",
    };
  },

  computed: {
    // Convert Color to Hex
    colorHex() {
      return (
        "#" +
        this.colorToHex(this.red) +
        this.colorToHex(this.green) +
        this.colorToHex(this.blue)
      );
    },
  },

  methods: {
    // Number to hexString
    colorToHex(num) {
      const hexString = num.toString(16);
      if (hexString.length == 1) {
        return "0" + hexString;
      }
      return hexString;
    },

    // Random Color Button
    randomColor() {
      fetch("https://dummy-apis.netlify.app/api/color")
        .then((response) => response.json())
        .then((data) => {
          document.body.style.backgroundColor = data.color;
        });
    },

    // Show Color in Body
    showColor() {
      const r = Number(red.value);
      const g = Number(green.value);
      const b = Number(blue.value);
      this.red = r;
      this.green = g;
      this.blue = b;
      document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
    },
  },
}).mount("#app");
