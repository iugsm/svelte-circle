### Install

```sh
# via npm
npm install svelte-circle -D

# via pnpm
pnpm add svelte-circle -D

# via yarn
yarn add svelte-circle -D
```

### Useage

```svelte
<script>
  import { Circle } from 'svelte-circle'
</script>

<Circle percent={10} />
```

### Props

```typescript
percent: number;
width: number;
lineWidth: number;
bgColor: string;
color: string;
textColor: string;
responsive: boolean;
rounded: boolean;
animation: boolean;
textStyle: string;
```
