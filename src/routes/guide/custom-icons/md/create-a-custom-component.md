<script lang="ts">
  import type { ComponentType } from 'svelte';
  const config = {
    size: '30',
    color: '#FF5733'
  };
  import { Icon } from 'svelte-radix';
  export let icon: ComponentType;
</script>

<Icon {...config} {icon} />