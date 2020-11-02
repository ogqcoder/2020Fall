<template>
  <div class="all-container">
    <div id="message-container"></div>
    <form id="send-container" action="">
      <input type="text" id="messageInput" />
      <button type="submit">Send</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "Chat",
  props: {
    be: String,
  },
  methods: {},
};
</script>

<style scoped>
</style>>
