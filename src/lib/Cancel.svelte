<script lang="ts">
  import type { Toast } from "./toastStore";

  export let type: Toast["type"] = "info";

  $: cssPropPrefix = `--as-toast-${type}-color`;
</script>

<svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path
    d="M0.571429 0.571436C0.255838 0.887027 0.255838 1.3987 0.571429 1.71429L6.28571 7.42858C6.6013 7.74417 7.11298 7.74417 7.42857 7.42858C7.74416 7.11299 7.74416 6.60131 7.42857 6.28572L1.71429 0.571437C1.3987 0.255845 0.887021 0.255845 0.571429 0.571436Z"
    fill={`var(${cssPropPrefix}, var(--as-toast-color, black))`}
  />
  <path
    d="M7.42857 0.57141C7.11298 0.255819 6.60131 0.255819 6.28571 0.57141L0.571431 6.28569C0.25584 6.60128 0.255839 7.11296 0.57143 7.42855C0.887021 7.74414 1.3987 7.74414 1.71429 7.42855L7.42857 1.71427C7.74416 1.39868 7.74416 0.887002 7.42857 0.57141Z"
    fill={`var(${cssPropPrefix}, var(--as-toast-color, black))`}
  />
</svg>
