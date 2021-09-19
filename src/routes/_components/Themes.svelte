<script lang="ts">
  import { Toasts } from "$lib/index";
  let themeIndex = 0;
  let themes = [
    `/* default theme */
/* click the button above to check out some theme ideas */`,
    `/* Glassmorphism */
/* inspired by Glass UI Glassmorphism generator (https://ui.glass/generator/) */
--as-toast-border: 1px solid rgba(209, 213, 219, 0.3);
--as-toast-backdrop-filter: blur(8px);
--as-toast-shadow:
  0px 1.4px 2.2px rgba(0, 0, 0, 0.028),
  0px 4.7px 7.4px rgba(0, 0, 0, 0.042),
  0px 21px 33px rgba(0, 0, 0, 0.07);
--as-toast-btn-border: none;
--as-toast-info-border-color: rgba(209, 213, 219, 0.3);
--as-toast-info-background: rgba(255, 255, 255, 0.7);
--as-toast-warn-border-color: hsl(0, 68%, 47%, 30%);
--as-toast-warn-background: hsla(0, 69%, 80%, 0.7);
  `,
    `/* compact */
--as-toast-padding: 0.25em 0.5em;
`,
    `/* Material */
/* from https://material-components.github.io/material-components-web-catalog/#/component/snackbar */
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
    `/* Flat */
--as-toast-border: none;
--as-toast-shadow: 4px 4px 0px rgba(0, 0, 0, 0.07);
--as-toast-border-radius: 0px;
--as-toast-info-background: #F8EFBA;
--as-toast-warn-background: #F97F51;
`,
    `/* Neumorphism */
/* inspired by Neumorphism.io generator (https://neumorphism.io/) */
--as-toast-border: none;
--as-toast-border-radius: 50px;
--as-toast-box-shadow: 20px 20px 60px #bebebe, -20px -20px 60px #ffffff;
--as-toast-btn-border: none;
--as-toast-btn-background: transparent;
--as-toast-info-background: linear-gradient(145deg, #cacaca, #f0f0f0);
--as-toast-warn-background: linear-gradient(145deg, #d79898, #ffb5b5);
`,
    `/* Terminal */
--as-toast-color: lime;
--as-toast-shadow: none;
--as-toast-btn-border: 1px solid lime;
--as-toast-btn-background: transparent;
--as-toast-info-background: black;
--as-toast-info-border-color: lime;
--as-toast-warn-background: #561010;
--as-toast-warn-border-color: lime;
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

<pre class="language-css">
  <code class="language-css">
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
