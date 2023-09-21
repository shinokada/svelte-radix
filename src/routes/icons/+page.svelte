<script>
  import Label from 'flowbite-svelte/Label.svelte';
  import Range from 'flowbite-svelte/Range.svelte';
  import Tabs from 'flowbite-svelte/Tabs.svelte';
  import TabItem from 'flowbite-svelte/TabItem.svelte';
  import TableSearch from 'flowbite-svelte/TableSearch.svelte';
  import { random_tailwind_color, random_hex_color_code } from '../utils/utils.js';

  import * as Icons from '$lib';

  const contentClass = ' rounded-lg dark:bg-slate-950 mt-4';
  let searchTerm = '';

  $: filteredEntries = Object.entries(Icons).filter(([name, component]) => {
    return name.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1;
  });
  let size = '24';
</script>

<h1>Svelte Radix: Icons</h1>
<TableSearch
  placeholder="Search by icon name"
  hoverable={true}
  bind:inputValue={searchTerm}
  divClass="relative overflow-x-auto"
>
  <div class="xl:w-1/3 lg:w-2/5 md:w-1/2 sm:w-3/4 w-full p-4">
    <Label class="text-lg py-4 ">Icon size: {size}</Label>
    <Range id="range1" min="16" max="50" bind:value={size} />
  </div>
  <Tabs style="pill" {contentClass} class="p-4">
    <TabItem open>
      <span slot="title" class="text-lg">Mono</span>
      <div
        class="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8 px-4 dark:text-white"
      >
        {#each filteredEntries as [name, component]}
          <div class="flex gap-4 items-center text-lg">
            <svelte:component this={component} class="shrink-0" bind:size />
            {name}
          </div>
        {/each}
      </div>
    </TabItem>
    <TabItem>
      <span slot="title" class="text-lg">Random Hex Colors</span>
      <div
        class="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8 px-4 dark:text-white"
      >
        {#each filteredEntries as [name, component]}
          <div class="flex gap-4 items-center text-lg">
            <svelte:component
              this={component}
              color={random_hex_color_code()}
              class="shrink-0"
              bind:size
            />
            {name}
          </div>
        {/each}
      </div>
    </TabItem>
    <TabItem>
      <span slot="title" class="text-lg">Random Tailwind CSS Colors</span>
      <div
        class="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8 px-4 dark:text-white"
      >
        {#each filteredEntries as [name, component]}
          <div class="flex gap-4 items-center text-lg">
            <svelte:component this={component} class={random_tailwind_color()} bind:size />
            {name}
          </div>
        {/each}
      </div>
    </TabItem>
  </Tabs>
</TableSearch>
