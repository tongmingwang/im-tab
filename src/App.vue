<template>
  <div id="app">
    <h1>Welcome to My Vue Chrome Extension</h1>
    <button @click="handleClick">Click Me</button>
  </div>
</template>

<script setup>
function handleClick() {
  alert('Button clicked in the popup!');
}
</script>
