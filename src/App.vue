<template>
  <div id="app">
    <h1>Welcome to My Vue Chrome Extension</h1>
    <ImButton @click="handleClick">Click Me</ImButton>
  </div>
</template>

<script setup>
import { useImMessage } from 'im-design';
function handleClick() {
  useImMessage().info('Hello, world!');
}
</script>
