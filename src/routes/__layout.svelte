<script lang="ts">
  import { Toasts } from "$lib/index";
</script>

<main>
  <slot />
</main>

<Toasts />

<style>
  main {
    max-width: 75ch;
    margin: auto;
  }
</style>
