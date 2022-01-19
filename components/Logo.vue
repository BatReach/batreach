<template>
  <div class="w-auto">
    <base-img class="h-3/4" src="logo.png" :alt="orgName + ' Logo'" />
    <!-- <base-img
      class="ml-3 h-3/5 md:h-2/5"
      src="logo-text.svg"
      :alt="orgName + ' Logo Text'"
    /> -->
  </div>
</template>

<script>
export default {
  props: ['orgName'],
}
</script>
