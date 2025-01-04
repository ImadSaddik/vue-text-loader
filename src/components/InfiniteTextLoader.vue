<template>
  <div class="rivaldo-loader-container" :style="backdropStyle">
    <div class="rivaldo-container">
      <svg :viewBox="computedViewBox" :class="[svgClasses, textAnimationClass]">
        <defs>
          <linearGradient :id="gradientId" x1="0" x2="0" y1="1" y2="0">
            <stop :offset="fillPercentage" :stop-color="fillColor"/>
            <stop :offset="fillPercentage" :stop-color="fillColor" stop-opacity="0"/>
          </linearGradient>
        </defs>
        <text :x="textX" :y="textY" :dy="textDy" :text-anchor="textAnchor" :class="['rivaldo-text-content', textClasses]">{{ text }}</text>
        <text :x="textX" :y="textY" :dy="textDy" :text-anchor="textAnchor" :class="['rivaldo-text-fill', 'rivaldo-text-content', textClasses]">{{ text }}</text>
      </svg>
    </div>
  </div>
</template>

<script>
export default {
  name: 'InfiniteTextLoader',
  props: {
    text: { type: String, default: 'LOADER' },
    viewBox: { type: String, default: '0 0 400 100' },
    svgClasses: { type: String, default: 'rivaldo-text' },
    textClasses: { type: String, default: '' },
    textX: { type: String, default: '50%' },
    textY: { type: String, default: '50%' },
    textDy: { type: String, default: '.35em' },
    textAnchor: { type: String, default: 'middle' },
    fillColor: { type: String, default: '#0066cc' },
    outlineColor: { type: String, default: '#cbcbcb' },
    fontSize: { type: String, default: '12px' },
    fontWeight: { type: String, default: '900' },
    letterSpacing: { type: String, default: '0.1em' },
    strokeWidth: { type: String, default: '1px' },
    animationDuration: { type: String, default: '1s' },
    animationTimingFunction: { type: String, default: 'linear' },
    animationIterationCount: { type: String, default: 'infinite' },
    animationDirection: { type: String, default: 'alternate' },
    fontFamily: { type: String, default: 'Roboto' },
    backdropColor: { type: String, default: 'rgba(0, 0, 0, 0.5)' }, // Couleur par défaut
    backdropBlur: { type: String, default: '1px' }, // Flou par défaut
    textAnimation: {
      type: String,
      default: 'scale',
      validator: value => ['none', 'rotate', 'scale', 'translate', 'bounce'].includes(value),
    },
  },
  computed: {
    gradientId() {
      return `fill-gradient-${Math.random().toString(36).substr(2, 9)}`;
    },
    fillPercentage() {
      return this.animationDirection === 'alternate' ? '100%' : '100%';
    },
    fontStyle() {
      return `'${this.fontFamily}', sans-serif`;
    },
    computedViewBox() {
      const viewBoxValues = this.viewBox.split(' ').map(Number);
      const textWidth = this.text.length * (parseInt(this.fontSize) * 0.6); // Estimation approximative de la largeur du texte
      return `0 0 ${Math.max(viewBoxValues[2], textWidth)} ${viewBoxValues[3]}`;
    },
    textAnimationClass() {
      return `animation-${this.textAnimation}`;
    },
    backdropStyle() {
    return {
      backgroundColor: this.backdropColor,
      backdropFilter: `blur(${this.backdropBlur})`,
    };
  },
  },
  methods: {
    loadGoogleFont(font) {
      if (!document.querySelector(`link[href="https://fonts.googleapis.com/css?family=${font}"]`)) {
        const link = document.createElement('link');
        link.href = `https://fonts.googleapis.com/css?family=${font}`;
        link.rel = 'stylesheet';
        document.head.appendChild(link);
      }
    }
  },
  mounted() {
    this.loadGoogleFont(this.fontFamily);
  },
  watch: {
    fontFamily(newFont) {
      this.loadGoogleFont(newFont);
    }
  }
};
</script>

<style scoped>
.rivaldo-container {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  overflow: hidden;
}

.rivaldo-loader-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  pointer-events: none;
  z-index: 9999;
}

.rivaldo-text {
  max-width: 100vw;
}

.rivaldo-text .rivaldo-text-content {
  font-size: v-bind('fontSize');
  font-weight: v-bind('fontWeight');
  text-transform: uppercase;
  letter-spacing: v-bind('letterSpacing');
  fill: v-bind('outlineColor');
  stroke: v-bind('outlineColor');
  stroke-width: v-bind('strokeWidth');
  font-family: v-bind('fontStyle');
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  word-break: break-all;
  border: 10px solid black;
}

.rivaldo-text .rivaldo-text-fill {
  fill: v-bind('`url(#${gradientId})`');
  stroke:  v-bind('fillColor');
  clip-path: inset(100% 0 0 0);
  animation: fill-animation v-bind('animationDuration') v-bind('animationTimingFunction') v-bind('animationIterationCount') v-bind('animationDirection');
}

@keyframes fill-animation {
  0% {
    clip-path: inset(100% 0 0 0);
  }
  100% {
    clip-path: inset(0 0 0 0);
  }
}

.animation-rotate {
  animation: rotate-animation 2s infinite linear;
}

@keyframes rotate-animation {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

/* Animation : Échelle */
.animation-scale {
  animation: scale-animation 2s infinite ease-in-out;
}

@keyframes scale-animation {
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.2);
  }
}

/* Animation : Translation */
.animation-translate {
  animation: translate-animation 2s infinite ease-in-out;
}

@keyframes translate-animation {
  0% {
    transform: translateX(0);
    animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  }
  20% {
    transform: translateX(-10px);
    animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  }
  40% {
    transform: translateX(0);
    animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  }
  60% {
    transform: translateX(10px);
    animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  }
  80% {
    transform: translateX(0);
    animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  }
  100% {
    transform: translateX(0);
  }
}

/* Animation : Saut */
.animation-bounce {
  animation: bounce-animation 2s infinite ease-in-out;
}

@keyframes bounce-animation {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
}
</style>

