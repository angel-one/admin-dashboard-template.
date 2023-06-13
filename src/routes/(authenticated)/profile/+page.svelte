<script lang="ts">
	import { tokenStore } from '$lib/stores/TokenStore';
	type User = {
		name?: string;
		email?: string;
		picture?: string;
	};
	let user: User | null = {};
	tokenStore.subscribe((v) => {
		user = v.userToken;
	});
</script>

<div class="tw-pt-4 tw-pb-4">
	<div class="tw-h-100 tw-pt-4 tw-pb-4">
		<div class="tw-card tw-bg-base-100 tw-shadow-xl">
			<div class="tw-card-body tw-items-center">
				<div class="tw-avatar">
					<div
						class="tw-w-24 tw-rounded-full tw-ring tw-ring-primary tw-ring-offset-2 tw-ring-offset-base-100"
					>
						<img alt="user profile" src={user?.picture} />
					</div>
				</div>
				<div class="tw-mt-4 tw-text-center">
					<div>{user?.name}</div>
					<div>{user?.email}</div>
				</div>
			</div>
		</div>
	</div>
</div>
