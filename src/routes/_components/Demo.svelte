<script lang="ts">
  import { addToast } from "$lib";
</script>

<h2 id="demo">Demo</h2>

<div class="flex-rw">
  <button
    class="btn"
    on:click={() => {
      addToast("Just a simple 'info' toast", "info");
    }}>Add 'info' toast</button
  >

  <button
    class="btn"
    on:click={() => {
      addToast("Just a simple 'warn' toast", "warn");
    }}>Add 'warn' toast</button
  >

  <br />

  <button
    class="btn"
    on:click={() => {
      addToast("Just a simple 'info' toast", "info", 999999999);
    }}>Add long-lasting 'info' toast</button
  >

  <button
    class="btn"
    on:click={() => {
      addToast("Just a simple 'warn' toast", "warn", 999999999);
    }}>Add long-lasting 'warn' toast</button
  >
</div>

<style>
  button {
    margin-inline-end: 1em;
    margin-block-start: 0;
  }
</style>
