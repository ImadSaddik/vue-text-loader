# Infinite Text Loader

A customizable animated text loader component for Vue.js applications. This component creates an elegant loading animation with text that can be styled and animated in various ways.

## Installation

```bash
npm install vue-text-loader
```

## Basic Usage

```vue
import InfiniteTextLoader from 'vue-text-loader';
import 'vue-text-loader/dist/infinite-text-loader.css'; 

<InfiniteTextLoader text="Loading..." />
```

## Props

| Prop Name | Type | Default | Description |
|-----------|------|---------|-------------|
| text | String | 'LOADER' | The text to display in the loader |
| viewBox | String | '0 0 400 100' | SVG viewBox dimensions |
| fillColor | String | '#0066cc' | Color of the filling animation |
| outlineColor | String | '#cbcbcb' | Color of the text outline |
| fontSize | String | '12px' | Font size of the text |
| fontWeight | String | '900' | Font weight of the text |
| letterSpacing | String | '0.1em' | Spacing between letters |
| fontFamily | String | 'Roboto' | Font family (automatically loaded from Google Fonts) |
| animationDuration | String | '1s' | Duration of the fill animation |
| animationTimingFunction | String | 'linear' | Timing function for the animation |
| animationIterationCount | String | 'infinite' | Number of times to repeat the animation |
| animationDirection | String | 'alternate' | Direction of the animation |
| backdropColor | String | 'rgba(0, 0, 0, 0.5)' | Color of the backdrop |
| backdropBlur | String | '1px' | Blur effect for the backdrop |
| textAnimation | String | 'scale' | Type of text animation ('none', 'rotate', 'scale', 'translate', 'bounce') |

## Text Animation Types

The component supports five different text animation types:

- `none`: No additional animation
- `rotate`: Rotates the text 360 degrees
- `scale`: Scales the text up and down
- `translate`: Moves the text horizontally
- `bounce`: Bounces the text vertically

## Text Positioning Props

| Prop Name | Type | Default | Description |
|-----------|------|---------|-------------|
| textX | String | '50%' | X position of the text |
| textY | String | '50%' | Y position of the text |
| textDy | String | '.35em' | Text baseline adjustment |
| textAnchor | String | 'middle' | Text anchor position |

## Examples

### Basic Loading Text
```vue
<InfiniteTextLoader 
  text="LOADING" 
  fillColor="#ff0000"
  fontSize="24px"
/>
```

### Custom Animation with Backdrop
```vue
<InfiniteTextLoader 
  text="PLEASE WAIT"
  textAnimation="bounce"
  backdropColor="rgba(0, 0, 0, 0.7)"
  backdropBlur="3px"
  animationDuration="1.5s"
/>
```

### Styled Text with Custom Font
```vue
<InfiniteTextLoader 
  text="PROCESSING"
  fontFamily="Montserrat"
  fontSize="32px"
  letterSpacing="0.2em"
  fillColor="#4a90e2"
  outlineColor="#2c3e50"
/>
```

## CSS Customization

The component uses scoped CSS classes that you can target for additional customization:

- `.rivaldo-loader-container`: The outer container that covers the entire viewport
- `.rivaldo-container`: The centered container for the SVG
- `.rivaldo-text`: The main SVG element
- `.rivaldo-text-content`: The text content styling
- `.rivaldo-text-fill`: The animated fill effect

## Notes

- The component automatically loads Google Fonts when specifying a custom `fontFamily`
- The loader is positioned fixed and covers the entire viewport
- All animations are CSS-based for optimal performance
- The component is responsive and will adjust to different screen sizes
- Text will automatically adjust to prevent overflow

## Browser Support

This component works in all modern browsers that support SVG animations and CSS transforms. For optimal performance, use the latest versions of Chrome, Firefox, Safari, or Edge.

## License

MIT
