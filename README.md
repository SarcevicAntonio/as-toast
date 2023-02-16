# AS Toast 🍞 (for Svelte)

Simple and customizable toast notifications for Svelte

Intended as a replacement for `alert()`, though in a non-blocking fashion.

![Image to a warning and a info toast notification.](https://i.imgur.com/FCQkfSe.png)

## Links

- ✨ **Guide**: [Create a toast notification package with SvelteKit](https://www.sarcevic.dev/toasting-in-svelte)
- [Quick start in Svelte REPL](https://svelte.dev/repl/ac1ac6289ab948b488fe2f17d122aaac?version=3.42.6)
- [Demo](https://as-toast.vercel.app/#demo)
- [Docs](https://as-toast.vercel.app/#docs)
- [Theme Ideas 🎨](https://as-toast.vercel.app/#themes)
- [npm](https://www.npmjs.com/package/as-toast)
- [GitHub](https://github.com/SarcevicAntonio/as-toast)

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

## Theme Ideas 🎨

[![Toast Package that shows of the CSS customization in various themes](https://www.sarcevic.dev/files/blog/toasting-in-svelte/as-toast.png)](https://as-toast.vercel.app/#themes)
