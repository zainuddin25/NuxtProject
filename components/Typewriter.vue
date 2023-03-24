<style>
.typewriter {
  animation: typing 3.5s steps(40, end), blink-caret .75s step-end infinite;
}

@keyframes typing {
  from { width: 0 }
  to { width: 100% }
}

@keyframes blink-caret {
  from, to { border-color: transparent }
  50% { border-color: orange }
}
</style>

<template>
    <div>
      <span class="text-6xl" id="extrabold">Hello We Are <br> <span class=" text-[#f34539] underline-offset-8 underline typewriter" ref="typewriterText">{{ currentText }}</span></span>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        currentText: '',
        texts: ['Designer', 'Branding', 'Marketing'],
        textIndex: 0
      }
    },
    methods: {
      animateText() {
        let i = 0;
        const speed = 100; // milliseconds
        const textLength = this.texts[this.textIndex].length;
        const typingInterval = setInterval(() => {
          if (i < textLength) {
            const text = this.texts[this.textIndex].slice(0, ++i);
            this.currentText = text;
          } else {
            clearInterval(typingInterval);
            setTimeout(() => {
              this.textIndex = (this.textIndex + 1) % this.texts.length;
              this.animateText();
            }, 1500); // set delay before next text
          }
        }, speed);
      }
    },
    mounted() {
      this.animateText();
    }
  }
  </script>