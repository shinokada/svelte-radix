import type { SVGAttributes } from 'svelte/elements';
type TitleType = {
  id?: string;
  title?: string;
};

type DescType = {
  id?: string;
  desc?: string;
};

interface BaseProps extends SVGAttributes<SVGElement> {
  size?: string;
  role?: string;
  color?: string;
  focusable?: 'true' | 'false' | 'auto';
}

export interface CtxType extends BaseProps {}

export interface Props extends BaseProps {
  title?: TitleType;
  desc?: DescType;
  ariaLabel?: string;
}
