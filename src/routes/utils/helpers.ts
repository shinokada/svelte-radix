import type { Component } from 'svelte';
import { type ListType, sidebarList, CogOutline, ExpandOutline } from 'runes-webkit';

const extra: ListType[] = [
  {
    name: 'Icons',
    Icon: ExpandOutline as Component,
    href: '/icons'
  },
  {
    name: 'Icon Sets',
    Icon: CogOutline as Component,
    href: 'https://svelte-svg-icons.codewithshin.com/'
  }
];

export const newSidebarList: ListType[] = [
  ...(Array.isArray(sidebarList) ? sidebarList : []),
  ...extra
];
