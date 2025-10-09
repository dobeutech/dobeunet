# [Component Name]

## Metadata
- **Component Name:** [ComponentName]
- **Version:** [X.X.X]
- **Last Updated:** [YYYY-MM-DD]
- **Status:** [Stable | Beta | Deprecated]
- **Category:** [UI Element | Layout | Form | Navigation | Feedback | etc.]

---

## Overview

### Purpose
[Brief 1-2 sentence description of what the component does and why it exists]

### When to Use
- [Use case 1]
- [Use case 2]
- [Use case 3]

### When NOT to Use
- [Anti-pattern 1]
- [Anti-pattern 2]

---

## Installation & Import

### Import Statement
```typescript
import { ComponentName } from "@/components/ui/component-name";
```

### Dependencies
- **Required:** [List required peer dependencies]
- **Optional:** [List optional dependencies]
- **Internal:** [List internal component dependencies]

---

## API Reference

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `propName` | `PropType` | `defaultValue` | Detailed description of what this prop does |
| `className` | `string` | `undefined` | Additional CSS classes to apply |
| `children` | `ReactNode` | - | Content to render inside the component |
| ... | ... | ... | ... |

### Variants (if applicable)

| Variant | Values | Description |
|---------|--------|-------------|
| `variant` | `default` \| `secondary` \| `destructive` | Visual style variant |
| `size` | `sm` \| `md` \| `lg` | Size variant |
| ... | ... | ... |

### Type Definitions
```typescript
interface ComponentNameProps extends React.HTMLAttributes<HTMLElement> {
  // Type definition details
}

type VariantType = "variant1" | "variant2" | "variant3";
```

---

## Usage Examples

### Basic Usage
```tsx
import { ComponentName } from "@/components/ui/component-name";

export function BasicExample() {
  return (
    <ComponentName>
      Basic content
    </ComponentName>
  );
}
```

### With Props
```tsx
export function PropsExample() {
  return (
    <ComponentName
      variant="secondary"
      size="lg"
      className="custom-class"
    >
      Content with props
    </ComponentName>
  );
}
```

### Advanced Usage
```tsx
export function AdvancedExample() {
  const [state, setState] = useState(initialState);

  return (
    <ComponentName
      onAction={handleAction}
      controlled={true}
    >
      Advanced implementation
    </ComponentName>
  );
}
```

### Common Patterns

#### Pattern 1: [Pattern Name]
```tsx
// Code example
```
**When to use:** [Explanation]

#### Pattern 2: [Pattern Name]
```tsx
// Code example
```
**When to use:** [Explanation]

---

## Composition

### Sub-components
If this component has sub-components, list them here:

#### SubComponentName
- **Purpose:** [What this sub-component does]
- **Required:** [Yes/No]
- **Props:** [Brief overview or link to details]

### Parent Components
Components that commonly contain this component:
- [ParentComponent1] - [Context]
- [ParentComponent2] - [Context]

### Child Components
Components commonly used inside this component:
- [ChildComponent1] - [Context]
- [ChildComponent2] - [Context]

---

## Accessibility

### ARIA Attributes
- `role`: [role value and explanation]
- `aria-label`: [When to use]
- `aria-describedby`: [When to use]
- [Other ARIA attributes]

### Keyboard Navigation
| Key | Action |
|-----|--------|
| `Enter` / `Space` | [Action description] |
| `Escape` | [Action description] |
| `Tab` | [Action description] |
| `Arrow Keys` | [Action description] |

### Screen Reader Support
- [What screen readers will announce]
- [Important considerations for screen reader users]
- [Testing recommendations]

### Focus Management
- [How focus is managed]
- [Focus trap behavior (if applicable)]
- [Focus restoration behavior]

### Color Contrast
- [Contrast ratio requirements met]
- [Theme support details]
- [High contrast mode behavior]

---

## Behavior & State

### State Management
- **Internal State:** [What state is managed internally]
- **External State:** [What state should be managed by parent]
- **Controlled vs Uncontrolled:** [Explanation if applicable]

### Event Handlers
| Event | Handler | Parameters | Description |
|-------|---------|------------|-------------|
| `onClick` | `onClick` | `(event: MouseEvent) => void` | [Description] |
| `onChange` | `onChange` | `(value: T) => void` | [Description] |
| ... | ... | ... | ... |

### Side Effects
- [Any side effects the component produces]
- [Cleanup behavior]
- [External system interactions]

---

## Styling

### Default Styles
```typescript
// Base classes applied by default
```

### Customization
```tsx
// Example of customizing styles
<ComponentName
  className="custom-styles"
  style={{ customProperty: "value" }}
/>
```

### Theme Variables
| CSS Variable | Default | Description |
|--------------|---------|-------------|
| `--variable-name` | `value` | [What this controls] |
| ... | ... | ... |

### Responsive Behavior
- [Mobile behavior]
- [Tablet behavior]
- [Desktop behavior]
- [Breakpoint details]

---

## Edge Cases & Limitations

### Known Issues
1. **Issue 1:** [Description and workaround]
2. **Issue 2:** [Description and workaround]

### Browser Compatibility
- **Supported:** [List supported browsers and versions]
- **Known Issues:** [Browser-specific issues]
- **Fallback Behavior:** [What happens in unsupported browsers]

### Performance Considerations
- [Rendering performance notes]
- [Memory usage considerations]
- [Optimization tips]
- [When to avoid this component]

### Limitations
1. **Limitation 1:** [Description and why it exists]
2. **Limitation 2:** [Description and why it exists]

### Error Handling
```tsx
// Example of proper error handling
try {
  // Component usage
} catch (error) {
  // Error handling
}
```

---

## Testing

### Unit Testing
```typescript
import { render, screen } from "@testing-library/react";
import { ComponentName } from "./component-name";

describe("ComponentName", () => {
  it("renders correctly", () => {
    render(<ComponentName>Test</ComponentName>);
    expect(screen.getByText("Test")).toBeInTheDocument();
  });

  // More test cases
});
```

### Integration Testing
```typescript
// Example of integration test
```

### Accessibility Testing
```typescript
import { axe } from "jest-axe";

it("has no accessibility violations", async () => {
  const { container } = render(<ComponentName />);
  const results = await axe(container);
  expect(results).toHaveNoViolations();
});
```

### Test Scenarios
- [ ] Renders with default props
- [ ] Handles all variant combinations
- [ ] Responds to user interactions
- [ ] Manages focus correctly
- [ ] Works with keyboard navigation
- [ ] Displays error states appropriately
- [ ] Handles edge cases gracefully
- [ ] Meets accessibility standards

---

## Related Components

### Similar Components
- **[ComponentA]** - [When to use this instead]
- **[ComponentB]** - [Key differences]

### Frequently Used Together
- **[ComponentC]** - [Typical usage pattern]
- **[ComponentD]** - [Typical usage pattern]

### Migration Guide
If replacing another component:
```tsx
// Old component
<OldComponent prop="value" />

// New component (this one)
<ComponentName newProp="value" />
```

---

## Resources

### Design References
- [Link to design system]
- [Link to Figma/design files]
- [Link to design tokens]

### External Documentation
- [Radix UI Documentation] (if applicable)
- [MDN Web Docs] (for HTML elements used)
- [WAI-ARIA Authoring Practices]

### Examples in Production
- [Link to Storybook]
- [Link to live examples]
- [Link to code sandbox]

---

## Changelog

### Version X.X.X (YYYY-MM-DD)
- Added [feature]
- Fixed [bug]
- Changed [behavior]
- Deprecated [prop/feature]
- Removed [prop/feature]

### Version X.X.X (YYYY-MM-DD)
- Initial release

---

## Contributing

### How to Contribute
[Brief guidelines for contributing to this component]

### Reporting Issues
[Where and how to report issues]

### Feature Requests
[How to request new features]

---

## License & Credits

- **License:** [License type]
- **Credits:** [Original authors, inspirations, dependencies]
- **Maintained by:** [Team/individual]
