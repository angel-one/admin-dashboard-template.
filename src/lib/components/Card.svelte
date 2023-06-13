<script></script>

<div class={`${$$props.class ? $$props.class : ''} card-container`}>
	<slot name="card-header" />
	<slot name="card-body" />
</div>

<style>
	.card-container {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		padding: 1.25rem 1rem;
		width: 100%;
		background: #ffffff;
		box-shadow: 0px 2px 8px rgba(138, 141, 153, 0.16);
		border-radius: 0.5rem;
	}
</style>
