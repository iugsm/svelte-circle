import type { SVGAttributes } from 'svelte/elements';

type SvgAttrs = SVGAttributes<SVGElement>;

export interface CircleProps extends Omit<SvgAttrs, 'width' | 'height'> {
  lineWidth?: number;
  bgColor?: string;
  color?: string;
  textColor?: string;
  percent?: number;
  rounded?: boolean;
  responsive?: boolean;
  animation?: boolean;
  textStyle?: string;
  size?: number;
}
