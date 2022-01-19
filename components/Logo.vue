<template>
  <div class="w-auto">
    <base-img class="h-3/4" src="logo.png" :alt="orgName + ' Logo'" />
  </div>
</template>

<script>
export default {
  props: ['orgName'],
}
</script>
