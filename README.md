# AS Toast 🍞 (for Svelte)

Simple and customizable toast notifications for Svelte

Intended as a replacement for `alert()`, though in a non-blocking fashion.

![Image to a warning and a info toast notification.](https://i.imgur.com/FCQkfSe.png)

## Links

- [Open quick start in Svelte REPL](https://svelte.dev/repl/ac1ac6289ab948b488fe2f17d122aaac?version=3.42.6)
- [View a demo](https://as-toast.vercel.app/#demo)
- [View the docs](https://as-toast.vercel.app/#docs)
- [View Theme Ideas 🎨](https://as-toast.vercel.app/#themes)
- [Vist package on npm](https://www.npmjs.com/package/as-toast)
- [Visit project repo on GitHub](https://github.com/SarcevicAntonio/as-toast).

## Quick Start

```
npm i -D as-toast
```

```html
<!-- App.svelte -->
<script>
  import { Toasts, addToast } from "as-toast";
</script>

<Toasts />

<button on:click={() => {addToast("Hello World")}}>
  add toast
</button>
```

**--> [Open quick start in Svelte REPL](https://svelte.dev/repl/ac1ac6289ab948b488fe2f17d122aaac?version=3.42.6)**
