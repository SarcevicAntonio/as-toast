<script lang="ts">
  import { addToast } from "$lib";
</script>

<h2 id="demo">Demo</h2>

<button
  on:click={() => {
    addToast("Just a simple 'info' toast", "info");
  }}>Add 'info' toast</button
>
<br />

<button
  on:click={() => {
    addToast("Just a simple 'warn' toast", "warn");
  }}>Add 'warn' toast</button
>
<br />


<button
  on:click={() => {
    addToast("Just a simple 'info' toast", "info", 999999999);
  }}>Add long-lasting 'info' toast</button
>
<br />

<button
  on:click={() => {
    addToast("Just a simple 'warn' toast", "warn", 999999999);
  }}>Add long-lasting 'warn' toast</button
>
<br />

<style>
  button {
    border-radius: 0.5em;
    border: 1px solid gray;
    background-color: white;
    padding: 0.5em 1em;
    min-height: 48px;
    margin: 1em 0;
    cursor: pointer;
  }
</style>