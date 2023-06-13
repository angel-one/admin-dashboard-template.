<div class="sb-item-con"><slot /></div>

<style>
	.sb-item-con {
	}
	.sb-item-con:hover {
		font-weight: 500;
		background: #fff;
	}
	:global(.sb-icon-con) {
		min-height: 1rem;
		width: 2.5rem;

		margin: 0 0.375rem;
		padding: 0.5rem;
	}
	/* :global(.expanded .iconPresent) {
		border: 2px solid #003aff;
		border-radius: 3px;
	} */
	:global(.active .iconPresent) {
		border: 0.125rem solid #003aff;
		border-radius: 3px;
	}
</style>
