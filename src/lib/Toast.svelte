<script lang="ts">
  import { onMount, SvelteComponent } from "svelte";
  import { fade, fly } from "svelte/transition";
  import type { Toast } from "./toastStore";
  import { removeToast } from "./toastStore";

  export let toast: Toast;
  export let cancelIcon: typeof SvelteComponent;

  onMount(() => {
    setTimeout(() => {
      removeMyself();
    }, toast.removeAfter);
  });

  function removeMyself() {
    removeToast(toast.id);
  }
</script>

<li class={toast.type} in:fly={{ y: -600, duration: 400 }} out:fade>
  <span role="status">
    {@html toast.msg}
  </span>
  <button on:click={removeMyself} aria-label="Button Cancel">
    <svelte:component this={cancelIcon} type={toast.type} />
  </button>
</li>

<style>
  li {
    display: flex;
    width: max-content;
    justify-content: space-between;
    align-items: center;
    text-decoration: none;
    font-family: inherit;
    font-weight: 400;
    font-size: 1em;
    padding: 1em;
    margin-top: 1em;
    min-width: 300px;
    max-width: calc(100vw - 2em);
    border: var(--as-toast-border, 1px solid black);
    border-radius: var(--as-toast-border-radius, 0.5em);
    color: var(--as-toast-color, black);
    background-color: var(--as-toast-default-background-color, black);
    box-shadow: var(
      --as-toast-shadow,
      0 0.3px 1.4px rgba(0, 0, 0, 0.068),
      0 0.7px 3.5px rgba(0, 0, 0, 0.098),
      0 1.4px 7.1px rgba(0, 0, 0, 0.122),
      0 2.9px 14.6px rgba(0, 0, 0, 0.152),
      0 8px 40px rgba(0, 0, 0, 0.22)
    );
  }

  li button {
    display: flex;
    margin-left: 2em;
    border-radius: var(--as-toast-btn-border-radius, 999999999px);
    padding: var(--as-toast-btn-padding, 0.45em);
    border: var(--as-toast-btn-border, 1px solid black);
  }

  .info {
    color: var(--as-toast-info-color, var(--as-toast-color, black));
    border-color: var(--as-toast-info-border-color, #2786cb);
    background-color: var(--as-toast-info-background-color, #abd2ef);
  }

  .warn {
    color: var(--as-toast-warn-color, var(--as-toast-color, black));
    border-color: var(--as-toast-warn-border-color, #c92626);
    background-color: var(--as-toast-warn-background-color, #efa9a9);
  }
</style>
