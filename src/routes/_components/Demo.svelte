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
    box-shadow: none;
    transition: box-shadow 0.4s ease-in-out;
  }
  button:hover {
    box-shadow: 0 0.3px 1.4px rgba(0, 0, 0, 0.068), 0 0.7px 3.5px rgba(0, 0, 0, 0.098),
      0 1.4px 7.1px rgba(0, 0, 0, 0.122), 0 2.9px 14.6px rgba(0, 0, 0, 0.152),
      0 8px 40px rgba(0, 0, 0, 0.22);
  }
</style>
