### Install

```sh
# via npm
npm install svelte-circle -D

# via pnpm
pnpm add svelte-circle -D


### Useage

```svelte
<script>
  import { Circle } from 'svelte-circle'
</script>

<Circle percent={10} />
```

### Props With Svelte 5

```typescript
size?: number; // default: 200
percent?: number; // default: 0
lineWidth?: number; // default: 30
bgColor?: string; // default: 'hsla(13, 58%, 91%, 1)'
color?: string; // default: 'hsla(8, 59%, 65%, 1)'
textColor?: string; // default: 'hsla(0, 0%, 20%, 1)'
responsive?: boolean; // default: false
rounded?: boolean; // default: false
animation?: boolean; // default: true
textStyle?: string; // default: "font: bold 5rem Helvetica, Arial, sans-serif;"
```

### Props With Svelte legacy

```typescript
width?: number; // default: 200
percent?: number; // default: 0
lineWidth?: number; // default: 30
bgColor?: string; // default: 'hsla(13, 58%, 91%, 1)'
color?: string; // default: 'hsla(8, 59%, 65%, 1)'
textColor?: string; // default: 'hsla(0, 0%, 20%, 1)'
responsive?: boolean; // default: false
rounded?: boolean; // default: false
animation?: boolean; // default: true
textStyle?: string; // default: "font: bold 5rem Helvetica, Arial, sans-serif;"
```