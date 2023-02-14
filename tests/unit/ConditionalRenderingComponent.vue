<template>
  <nav>
    <a id="profile" href="/profile">My Profile</a>
    <a v-if="admin" id="admin" href="/admin">My Profile</a>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      admin: false
    }
  }
}
</script>