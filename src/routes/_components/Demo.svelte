<script lang="ts">
	import { addToast } from '$lib';

	let msg = 'Just a toast';
	let type: 'info' | 'warn' = 'info';
	let delay = 5000;
</script>

<h2 id="demo">Demo</h2>

<label>
	<span>Message</span>
	<input type="text" bind:value={msg} />
</label>

<label>
	<span>Type</span>
	<select bind:value={type}>
		<option value="info">info</option>
		<option value="warn">warn</option>
	</select>
</label>

<label>
	<span>Remove after</span>
	<input type="number" bind:value={delay} />
</label>

<button
	class="btn"
	on:click={() => {
		addToast(msg, type, delay);
	}}
>
	Add a toast
</button>

<style>
	label {
		display: flex;
		flex-direction: column;
		max-width: 420px;
	}
	button {
		margin-inline-end: 1em;
		margin-block-start: 0;
	}
</style>
