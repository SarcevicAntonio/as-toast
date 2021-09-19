<script lang="ts">
  import type { SvelteComponent } from "svelte";
  import { flip } from "svelte/animate";
  import Cancel from "./Cancel.svelte";
  import Toast from "./Toast.svelte";
  import { toasts } from "./toastStore";

  export let toastComponent = Toast;
  export let cancelIcon: typeof SvelteComponent = Cancel;
</script>

{#if $toasts.length}
  <ul>
    {#each $toasts as toast (toast.id)}
      <li animate:flip>
        <svelte:component this={toastComponent} {toast} {cancelIcon} />
      </li>
      {/each}
  </ul>
{/if}

<style>
  ul {
    list-style: none;

    display: flex;
    flex-direction: column;
    align-items: center;

    position: fixed;
    bottom: var(--as-toast-bottom, 1em);
    right: 50%;
    transform: translate(50%, 0%);

    margin: 0;
    padding: 0;

    height: auto;
    transition: height 0.4s ease-in-out;
  }
</style>
