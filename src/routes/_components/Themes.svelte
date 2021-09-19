<script lang="ts">
  import { Toasts } from "$lib/index";
  let themeIndex = 0;
  let themes = [
    `/* default theme */
/* click the button above to check out some theme ideas */`,
    `/* Glassmorphism */
/* inspired by Glass UI Glassmorphism generator (https://ui.glass/generator/) */
--as-toast-border: 1px solid rgba(209, 213, 219, 0.3);
--as-toast-border-radius: 12px;
--as-toast-backdrop-filter: blur(8px);
--as-toast-shadow:
  0px 1.4px 2.2px rgba(0, 0, 0, 0.028),
  0px 4.7px 7.4px rgba(0, 0, 0, 0.042),
  0px 21px 33px rgba(0, 0, 0, 0.07);
--as-toast-btn-border-radius: 999999999px;
--as-toast-btn-padding: 0.45em;
--as-toast-btn-border: 1px solid black;
--as-toast-info-border-color: rgba(209, 213, 219, 0.3);
--as-toast-info-background: rgba(255, 255, 255, 0.7);
--as-toast-warn-border-color: hsl(0, 68%, 47%, 30%);
--as-toast-warn-background: hsla(0, 69%, 80%, 0.7);
  `,
    `/* Material */
--as-toast-padding: 14px 16px;
--as-toast-border: none;
--as-toast-border-radius: 4px;
--as-toast-shadow: 0 3px 5px -1px rgb(0 0 0 / 20%), 0 6px 10px 0 rgb(0 0 0 / 14%), 0 1px 18px 0 rgb(0 0 0 / 12%);
--as-toast-btn-border: none;
--as-toast-btn-background: transparent;
--as-toast-info-background: #333;
--as-toast-info-color: hsla(0,0%,100%,.87);
--as-toast-warn-background: hsl(0deg 40% 20%);
--as-toast-warn-color: hsla(0,0%,100%,.87);
`,
  ];
</script>

<h2 id="themes">Pre-Build Css Props Theme Ideas 🎨</h2>

<button
  class="btn"
  on:click={() => {
    themeIndex = themes[themeIndex + 1] ? themeIndex + 1 : 0;
  }}
>
  Next Theme Idea
</button>

<pre>
  <code>
{themes[themeIndex]}
  </code>
</pre>

<div style={"display:contents;" + themes[themeIndex]}>
  <Toasts />
</div>

<style>
  pre {
    height: 250px;
    overflow-y: scroll;
  }
</style>
