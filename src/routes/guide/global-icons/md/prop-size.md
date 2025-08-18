<script>
  import { setContext } from 'svelte';
  import { Accessibility } from 'svelte-radix';
  const iconCtx = {
    size: '30'
  };
  setContext('iconCtx', iconCtx);
</script>

<Accessibility color="#ff4488" />
