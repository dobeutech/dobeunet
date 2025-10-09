# Button

## Metadata
- **Component Name:** Button
- **Version:** 1.0.0
- **Last Updated:** 2025-10-09
- **Status:** Stable
- **Category:** UI Element / Interactive

---

## Overview

### Purpose
A flexible, accessible button component that serves as the primary action trigger throughout the application. Built on native HTML button elements with enhanced styling variants and composition patterns.

### When to Use
- Triggering actions like form submissions, dialog opens, or navigation
- Creating call-to-action elements in marketing sections
- Building toolbar and navigation controls
- Implementing custom interactive elements while maintaining semantic HTML

### When NOT to Use
- For pure navigation (use Link component instead)
- For toggling states (use Switch or Checkbox instead)
- For selecting from options (use Select or RadioGroup instead)
- When a less prominent action indicator is needed (consider using a Link with link variant)

---

## Installation & Import

### Import Statement
```typescript
import { Button } from "@/components/ui/button";
```

### Dependencies
- **Required:**
  - `react` (^18.3.1)
  - `@radix-ui/react-slot` (^1.2.3)
  - `class-variance-authority` (^0.7.1)
- **Internal:**
  - `@/lib/utils` (cn utility)

---

## API Reference

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `"default"` \| `"destructive"` \| `"outline"` \| `"secondary"` \| `"ghost"` \| `"link"` | `"default"` | Visual style variant of the button |
| `size` | `"default"` \| `"sm"` \| `"lg"` \| `"icon"` | `"default"` | Size variant affecting height and padding |
| `asChild` | `boolean` | `false` | Enables composition by rendering child element as button |
| `className` | `string` | `undefined` | Additional CSS classes to merge with button styles |
| `disabled` | `boolean` | `false` | Disables the button and prevents interactions |
| `type` | `"button"` \| `"submit"` \| `"reset"` | `"button"` | HTML button type attribute |
| `onClick` | `(e: MouseEvent) => void` | `undefined` | Click event handler |
| `children` | `ReactNode` | - | Content to render inside the button |
| ...props | `ButtonHTMLAttributes` | - | All standard HTML button attributes supported |

### Variants

#### Visual Variants (`variant`)

| Variant | Appearance | Use Case |
|---------|------------|----------|
| `default` | Solid primary color background | Primary actions, main CTAs |
| `destructive` | Red/destructive color scheme | Dangerous or irreversible actions (delete, remove) |
| `outline` | Border only, transparent background | Secondary actions, less emphasis |
| `secondary` | Muted background color | Alternative actions, supporting CTAs |
| `ghost` | No background until hover | Tertiary actions, toolbar buttons |
| `link` | Styled like hyperlink | Inline actions, minimal emphasis |

#### Size Variants (`size`)

| Size | Dimensions | Use Case |
|------|------------|----------|
| `sm` | h-9, rounded-md, px-3 | Compact spaces, dense UIs, table actions |
| `default` | h-10, px-4, py-2 | Standard use case, forms |
| `lg` | h-11, rounded-md, px-8 | Hero sections, prominent CTAs |
| `icon` | h-10, w-10 | Icon-only buttons, toolbar actions |

### Type Definitions
```typescript
interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: { variant: {...}, size: {...} },
    defaultVariants: { variant: "default", size: "default" }
  }
);
```

---

## Usage Examples

### Basic Usage
```tsx
import { Button } from "@/components/ui/button";

export function BasicExample() {
  return (
    <Button>Click me</Button>
  );
}
```

### With Variants
```tsx
export function VariantsExample() {
  return (
    <div className="flex gap-4">
      <Button variant="default">Default</Button>
      <Button variant="destructive">Delete</Button>
      <Button variant="outline">Cancel</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="link">Link Style</Button>
    </div>
  );
}
```

### With Sizes
```tsx
export function SizesExample() {
  return (
    <div className="flex items-center gap-4">
      <Button size="sm">Small</Button>
      <Button size="default">Default</Button>
      <Button size="lg">Large</Button>
    </div>
  );
}
```

### With Icons
```tsx
import { Mail, ChevronRight, Trash2 } from "lucide-react";

export function IconExample() {
  return (
    <div className="flex gap-4">
      <Button>
        <Mail />
        Send Email
      </Button>

      <Button variant="outline">
        Continue
        <ChevronRight />
      </Button>

      <Button size="icon" variant="ghost">
        <Trash2 />
      </Button>
    </div>
  );
}
```

### Advanced Usage

#### Loading State
```tsx
import { Loader2 } from "lucide-react";

export function LoadingButton() {
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async () => {
    setIsLoading(true);
    try {
      await submitForm();
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Button onClick={handleSubmit} disabled={isLoading}>
      {isLoading && <Loader2 className="animate-spin" />}
      {isLoading ? "Submitting..." : "Submit"}
    </Button>
  );
}
```

#### With Form
```tsx
export function FormExample() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="email" />
      <Button type="submit">Subscribe</Button>
    </form>
  );
}
```

#### AsChild Composition Pattern
```tsx
import { Link } from "react-router-dom";

export function CompositionExample() {
  return (
    <Button asChild>
      <Link to="/dashboard">Go to Dashboard</Link>
    </Button>
  );
}
```

### Common Patterns

#### Pattern 1: Confirmation Dialog Trigger
```tsx
import { Button } from "@/components/ui/button";
import { AlertDialog, AlertDialogTrigger } from "@/components/ui/alert-dialog";

export function ConfirmDeleteButton() {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="destructive">Delete Account</Button>
      </AlertDialogTrigger>
      {/* Dialog content */}
    </AlertDialog>
  );
}
```
**When to use:** Dangerous actions that require user confirmation

#### Pattern 2: Button Group
```tsx
export function ButtonGroup() {
  return (
    <div className="inline-flex rounded-lg shadow-sm" role="group">
      <Button variant="outline" className="rounded-r-none">
        Left
      </Button>
      <Button variant="outline" className="rounded-none border-x-0">
        Middle
      </Button>
      <Button variant="outline" className="rounded-l-none">
        Right
      </Button>
    </div>
  );
}
```
**When to use:** Related actions that should be visually grouped together

#### Pattern 3: Async Action with Toast
```tsx
import { toast } from "sonner";

export function AsyncActionButton() {
  const handleAction = async () => {
    try {
      await performAction();
      toast.success("Action completed successfully");
    } catch (error) {
      toast.error("Action failed");
    }
  };

  return (
    <Button onClick={handleAction}>
      Perform Action
    </Button>
  );
}
```
**When to use:** Actions that need user feedback upon completion

---

## Composition

### Sub-components
This component does not have sub-components, but uses composition via the `asChild` prop.

### Parent Components
Components that commonly contain Button:
- **Form** - Submit and reset buttons
- **Dialog / AlertDialog** - Action buttons in footers
- **Card** - Actions in card footers
- **Toolbar** - Action buttons in application toolbars
- **Popover / DropdownMenu** - Trigger buttons

### Child Components
Components commonly used inside Button:
- **Lucide Icons** - Visual indicators and affordances
- **Loader2 (spinning)** - Loading states
- **Badge** - Notification indicators

---

## Accessibility

### ARIA Attributes
- `role`: Automatically set to `button` by native HTML element
- `aria-label`: Use when button only contains an icon or when text is not descriptive enough
- `aria-describedby`: Use to associate additional descriptive text
- `aria-pressed`: Should be added manually for toggle buttons (not default behavior)
- `aria-disabled`: Automatically set when `disabled` prop is true

### Keyboard Navigation
| Key | Action |
|-----|--------|
| `Enter` | Activates the button |
| `Space` | Activates the button |
| `Tab` | Moves focus to the button |
| `Shift + Tab` | Moves focus away from the button |

### Screen Reader Support
- Screen readers announce the button text as the accessible name
- Disabled state is announced automatically
- Icon-only buttons MUST have `aria-label` for screen reader users
- The button type (button, submit, reset) is announced

**Testing Recommendations:**
```tsx
<Button aria-label="Close dialog" size="icon">
  <X />
</Button>
```

### Focus Management
- Focus ring is visible via `focus-visible:ring-2` class
- Focus ring uses theme-aware ring color
- Focus is not lost when button becomes disabled during action
- Tab order is natural (document flow order)

### Color Contrast
- All variants meet WCAG AA standards (4.5:1 minimum)
- Destructive variant maintains contrast in error states
- Ghost variant provides adequate hover contrast
- Link variant uses underline for additional visual indicator
- Disabled state reduces opacity while maintaining minimum contrast

---

## Behavior & State

### State Management
- **Internal State:** None (stateless component)
- **External State:** Button state (loading, disabled) should be managed by parent component
- **Controlled vs Uncontrolled:** N/A (not applicable for buttons)

### Event Handlers
| Event | Handler | Parameters | Description |
|-------|---------|------------|-------------|
| `onClick` | `onClick` | `(event: MouseEvent<HTMLButtonElement>) => void` | Fired when button is clicked |
| `onFocus` | `onFocus` | `(event: FocusEvent<HTMLButtonElement>) => void` | Fired when button receives focus |
| `onBlur` | `onBlur` | `(event: FocusEvent<HTMLButtonElement>) => void` | Fired when button loses focus |
| `onMouseEnter` | `onMouseEnter` | `(event: MouseEvent<HTMLButtonElement>) => void` | Fired when mouse enters button |
| `onMouseLeave` | `onMouseLeave` | `(event: MouseEvent<HTMLButtonElement>) => void` | Fired when mouse leaves button |

### Side Effects
- Button component itself produces no side effects
- Side effects from click handlers are responsibility of parent component
- Form submission buttons trigger form's `onSubmit` event
- Disabled buttons with `disabled:pointer-events-none` class prevent all pointer events

---

## Styling

### Default Styles
```typescript
const baseClasses = "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0";
```

### Customization
```tsx
<Button
  className="w-full justify-between"
  style={{ minWidth: "200px" }}
>
  Custom Button
</Button>
```

### Theme Variables
| CSS Variable | Default | Description |
|--------------|---------|-------------|
| `--primary` | Theme-defined | Primary button background |
| `--primary-foreground` | Theme-defined | Primary button text color |
| `--destructive` | Theme-defined | Destructive button background |
| `--secondary` | Theme-defined | Secondary button background |
| `--ring` | Theme-defined | Focus ring color |
| `--ring-offset-background` | Theme-defined | Focus ring offset color |

### Responsive Behavior
- Buttons are inline-flex by default, allowing natural wrapping
- Use `w-full` class for full-width buttons on mobile
- Size variants can be changed at breakpoints using responsive Tailwind classes:
```tsx
<Button className="size-sm md:size-default lg:size-lg">
  Responsive Size
</Button>
```

---

## Edge Cases & Limitations

### Known Issues
1. **Double-Click Prevention:** Button does not prevent double-clicks by default. Implement debouncing or disable button during async operations.
   ```tsx
   const [isSubmitting, setIsSubmitting] = useState(false);

   const handleSubmit = async () => {
     if (isSubmitting) return;
     setIsSubmitting(true);
     try {
       await submitData();
     } finally {
       setIsSubmitting(false);
     }
   };
   ```

2. **Long Text Overflow:** Very long button text may cause layout issues. Use appropriate container widths or text truncation:
   ```tsx
   <Button className="max-w-xs truncate">
     Very long button text that might overflow
   </Button>
   ```

### Browser Compatibility
- **Supported:** All modern browsers (Chrome 90+, Firefox 88+, Safari 14+, Edge 90+)
- **Known Issues:** None
- **Fallback Behavior:** Gracefully degrades to standard button in very old browsers

### Performance Considerations
- Component is lightweight with minimal re-renders
- SVG icons are optimized and tree-shaken by lucide-react
- Use `React.memo()` wrapper if button is in frequently re-rendering parent
- Avoid inline functions in `onClick` when performance is critical:
  ```tsx
  // Less optimal
  <Button onClick={() => handleClick(id)}>Click</Button>

  // More optimal
  const handleClickWithId = useCallback(() => handleClick(id), [id]);
  <Button onClick={handleClickWithId}>Click</Button>
  ```

### Limitations
1. **No Built-in Loading State:** Must be implemented by parent component
2. **No Built-in Tooltip:** Wrap with Tooltip component if needed
3. **No Toggle State:** Use Toggle component for toggle functionality
4. **Fixed Color Schemes:** Variants use theme colors; custom colors require className override

### Error Handling
```tsx
export function SafeButton({ onClick, ...props }: ButtonProps) {
  const handleClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
    try {
      await onClick?.(e);
    } catch (error) {
      console.error("Button action failed:", error);
      toast.error("An error occurred");
    }
  };

  return <Button onClick={handleClick} {...props} />;
}
```

---

## Testing

### Unit Testing
```typescript
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Button } from "./button";

describe("Button", () => {
  it("renders correctly with default props", () => {
    render(<Button>Click me</Button>);
    expect(screen.getByRole("button", { name: /click me/i })).toBeInTheDocument();
  });

  it("applies variant classes correctly", () => {
    render(<Button variant="destructive">Delete</Button>);
    const button = screen.getByRole("button");
    expect(button).toHaveClass("bg-destructive");
  });

  it("handles click events", async () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Click</Button>);

    await userEvent.click(screen.getByRole("button"));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it("is disabled when disabled prop is true", () => {
    render(<Button disabled>Disabled</Button>);
    expect(screen.getByRole("button")).toBeDisabled();
  });

  it("renders with icon", () => {
    render(<Button><span data-testid="icon">Icon</span>Text</Button>);
    expect(screen.getByTestId("icon")).toBeInTheDocument();
  });
});
```

### Integration Testing
```typescript
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("Button Integration", () => {
  it("submits form when type is submit", async () => {
    const handleSubmit = jest.fn((e) => e.preventDefault());

    render(
      <form onSubmit={handleSubmit}>
        <input name="email" />
        <Button type="submit">Submit</Button>
      </form>
    );

    await userEvent.click(screen.getByRole("button", { name: /submit/i }));
    expect(handleSubmit).toHaveBeenCalled();
  });

  it("works with asChild composition", () => {
    render(
      <Button asChild>
        <a href="/test">Link Button</a>
      </Button>
    );

    const link = screen.getByRole("link", { name: /link button/i });
    expect(link).toHaveAttribute("href", "/test");
    expect(link).toHaveClass("inline-flex");
  });
});
```

### Accessibility Testing
```typescript
import { render } from "@testing-library/react";
import { axe, toHaveNoViolations } from "jest-axe";
import { Button } from "./button";

expect.extend(toHaveNoViolations);

describe("Button Accessibility", () => {
  it("has no accessibility violations", async () => {
    const { container } = render(<Button>Accessible Button</Button>);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it("icon-only button has aria-label", async () => {
    const { container } = render(
      <Button size="icon" aria-label="Close">
        <span>×</span>
      </Button>
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
```

### Test Scenarios
- [x] Renders with default props
- [x] Handles all variant combinations (6 variants)
- [x] Handles all size combinations (4 sizes)
- [x] Responds to click events
- [x] Responds to keyboard events (Enter, Space)
- [x] Works with keyboard navigation (Tab, Shift+Tab)
- [x] Displays disabled state appropriately
- [x] Prevents interaction when disabled
- [x] Handles edge cases (no onClick, no children)
- [x] Meets accessibility standards (WCAG AA)
- [x] Works with asChild composition
- [x] Renders with icons correctly
- [x] Applies custom className correctly
- [x] Form submission with type="submit"

---

## Related Components

### Similar Components
- **Toggle** - Use when button needs to maintain pressed/unpressed state
- **Link** - Use for pure navigation without button styling
- **DropdownMenuTrigger** - Use when button opens a menu

### Frequently Used Together
- **Dialog / AlertDialog** - Button as trigger and action buttons
- **Popover** - Button as trigger
- **Form** - Submit and reset buttons
- **Tooltip** - Providing additional context for icon buttons
- **Loader2** - Showing loading state

### Migration Guide
If you're using a different button component:
```tsx
// Old button (example)
<OldButton color="primary" onClick={handleClick}>
  Click Me
</OldButton>

// New Button
<Button variant="default" onClick={handleClick}>
  Click Me
</Button>
```

**Prop mapping:**
- `color="primary"` → `variant="default"`
- `color="danger"` → `variant="destructive"`
- `outlined` → `variant="outline"`
- `text` → `variant="ghost"` or `variant="link"`

---

## Resources

### Design References
- [shadcn/ui Button Documentation](https://ui.shadcn.com/docs/components/button)
- [Radix UI Slot Documentation](https://www.radix-ui.com/docs/primitives/utilities/slot)

### External Documentation
- [MDN: Button Element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button)
- [WAI-ARIA: Button Pattern](https://www.w3.org/WAI/ARIA/apg/patterns/button/)
- [Class Variance Authority](https://cva.style/docs)

### Examples in Production
- Contact forms throughout the application
- Dialog triggers in modals
- Navigation controls in headers
- Form submissions in authentication flows

---

## Changelog

### Version 1.0.0 (2025-10-09)
- Initial stable release
- Six variant options (default, destructive, outline, secondary, ghost, link)
- Four size options (sm, default, lg, icon)
- AsChild composition support via Radix Slot
- Full accessibility support with keyboard navigation
- Comprehensive TypeScript types

---

## Contributing

### How to Contribute
1. Review existing issues or create new ones for bugs/features
2. Follow the existing code style and patterns
3. Add tests for any new functionality
4. Update this documentation for API changes
5. Submit pull request with clear description

### Reporting Issues
Report issues in the project's issue tracker with:
- Button configuration (variant, size, props)
- Expected vs actual behavior
- Browser and environment details
- Minimal reproduction example

### Feature Requests
Submit feature requests with:
- Use case description
- Proposed API design
- Impact on existing functionality
- Alternative solutions considered

---

## License & Credits

- **License:** MIT (per project license)
- **Credits:** Based on [shadcn/ui](https://ui.shadcn.com) design system
- **Dependencies:** Built on [Radix UI Slot](https://www.radix-ui.com) and [CVA](https://cva.style)
- **Maintained by:** Project maintainers
