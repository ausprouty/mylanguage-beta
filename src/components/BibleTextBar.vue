<template>
  <div class="bible-container">
    <!-- Toggle Button -->
    <button @click="isVisible = !isVisible" class="toggle-button">
      {{ isVisible ? '▼' : '►' }} {{ passageReference }}
    </button>

    <!-- Bible Content -->
    <div v-show="isVisible" class="bible-section">
      <div v-html="biblePassage.passageText" class="bible-text"></div>
      <a :href="biblePassage.passageUrl" class="readmore-button" target="_blank">
        {{ translation.read_more }}
      </a>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({
  passageReference: { type: String, default: 'No reference found' },
  biblePassage: { type: Object, required: true },
  translation: { type: Object, required: true }
})

const isVisible = ref(false)
</script>

<style scoped>
/* Main container */
.bible-container {
  margin-top: 20px;
  padding: 16px;
  border: 2px solid #F38B3C; /* Accent orange */
  border-radius: 8px;
  background-color: #ffffff; /* White background */
  color: #2e2e2e; /* Dark text */
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);
}

/* Toggle button */
.toggle-button {
  width: 100%;
  text-align: left;
  font-size: 18px;
  font-weight: bold;
  padding: 12px;
  border: none;
  background-color: #F38B3C; /* Accent orange */
  color: #ffffff;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.toggle-button:hover {
  background-color: #FFC700; /* Minor yellow */
  color: #2e2e2e;
}

/* Bible section when visible */
.bible-section {
  margin-top: 12px;
  background-color: #f9f9f9;
  padding: 14px;
  border-left: 4px solid #F38B3C;
  border-radius: 4px;
}

/* Bible text content */
.bible-text {
  font-size: 16px;
  line-height: 1.6;
  color: #2e2e2e;
}

/* Read more link */
.readmore-button {
  display: inline-block;
  margin-top: 10px;
  padding: 8px 12px;
  background-color: #009DA5; /* Secondary teal */
  color: white;
  text-decoration: none;
  border-radius: 4px;
  font-weight: bold;
  transition: background-color 0.3s ease;
}

.readmore-button:hover {
  background-color: #FF0033; /* Primary red */
  color: white;
}
</style>
