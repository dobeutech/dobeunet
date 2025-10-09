# Dialog

## Metadata
- **Component Name:** Dialog
- **Version:** 1.0.0
- **Last Updated:** 2025-10-09
- **Status:** Stable
- **Category:** Overlay / Modal

---

## Overview

### Purpose
A modal dialog component that overlays content on top of the main page, requiring user interaction before returning to the main application flow. Built on Radix UI Dialog primitive with accessible patterns for focus management, keyboard navigation, and screen reader support.

### When to Use
- Requiring immediate user input or decision
- Displaying critical information that demands attention
- Creating forms that need to be completed before continuing
- Confirming destructive or important actions
- Showing detailed information without navigating away

### When NOT to Use
- For non-critical information (use Popover or HoverCard instead)
- For simple tooltips or hints (use Tooltip instead)
- For destructive actions (use AlertDialog instead for better semantics)
- For complex multi-page workflows (consider dedicated routes instead)
- When users need to reference content behind the dialog (use Sheet or Drawer instead)

---

## Installation & Import

### Import Statement
```typescript
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
  DialogClose,
} from "@/components/ui/dialog";
```

### Dependencies
- **Required:**
  - `react` (^18.3.1)
  - `@radix-ui/react-dialog` (^1.1.14)
  - `lucide-react` (^0.344.0) - for close icon
- **Internal:**
  - `@/lib/utils` (cn utility)

---

## API Reference

### Props

#### Dialog (Root Component)
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `open` | `boolean` | `undefined` | Controlled open state |
| `defaultOpen` | `boolean` | `false` | Uncontrolled default open state |
| `onOpenChange` | `(open: boolean) => void` | `undefined` | Callback when open state changes |
| `modal` | `boolean` | `true` | Whether dialog is modal (blocks interaction with page) |

#### DialogTrigger
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `asChild` | `boolean` | `false` | Merge props onto child element |
| `children` | `ReactNode` | - | Trigger element (usually a Button) |

#### DialogContent
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `className` | `string` | `undefined` | Additional CSS classes |
| `children` | `ReactNode` | - | Dialog content |
| `onEscapeKeyDown` | `(event: KeyboardEvent) => void` | `undefined` | Handler for Escape key |
| `onPointerDownOutside` | `(event: PointerDownOutsideEvent) => void` | `undefined` | Handler for clicks outside |
| `onInteractOutside` | `(event: InteractOutsideEvent) => void` | `undefined` | Handler for any outside interaction |

#### DialogHeader
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `className` | `string` | `undefined` | Additional CSS classes |
| `children` | `ReactNode` | - | Header content (usually Title and Description) |

#### DialogFooter
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `className` | `string` | `undefined` | Additional CSS classes |
| `children` | `ReactNode` | - | Footer content (usually action buttons) |

#### DialogTitle
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `className` | `string` | `undefined` | Additional CSS classes |
| `children` | `ReactNode` | - | Dialog title text |

#### DialogDescription
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `className` | `string` | `undefined` | Additional CSS classes |
| `children` | `ReactNode` | - | Dialog description text |

#### DialogClose
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `asChild` | `boolean` | `false` | Merge props onto child element |
| `children` | `ReactNode` | - | Close trigger element |

---

## Usage Examples

### Basic Usage
```tsx
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

export function BasicDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Open Dialog</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Dialog Title</DialogTitle>
          <DialogDescription>
            This is a basic dialog with a title and description.
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
```

### With Footer Actions
```tsx
export function DialogWithActions() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Open Dialog</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Confirm Action</DialogTitle>
          <DialogDescription>
            Are you sure you want to proceed with this action?
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="outline">Cancel</Button>
          </DialogClose>
          <Button>Confirm</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
```

### Controlled Dialog
```tsx
export function ControlledDialog() {
  const [open, setOpen] = useState(false);

  const handleSave = () => {
    console.log("Saving...");
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button>Open Controlled Dialog</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit Profile</DialogTitle>
          <DialogDescription>
            Make changes to your profile here.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid gap-2">
            <Label htmlFor="name">Name</Label>
            <Input id="name" defaultValue="John Doe" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" defaultValue="john@example.com" />
          </div>
        </div>
        <DialogFooter>
          <Button onClick={handleSave}>Save Changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
```

### Form in Dialog
```tsx
export function FormDialog() {
  const [open, setOpen] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget as HTMLFormElement);
    console.log(Object.fromEntries(formData));
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button>Add User</Button>
      </DialogTrigger>
      <DialogContent>
        <form onSubmit={handleSubmit}>
          <DialogHeader>
            <DialogTitle>Create New User</DialogTitle>
            <DialogDescription>
              Enter the user's information below.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid gap-2">
              <Label htmlFor="username">Username</Label>
              <Input id="username" name="username" required />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" name="email" type="email" required />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="role">Role</Label>
              <Select name="role">
                <SelectTrigger id="role">
                  <SelectValue placeholder="Select role" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="admin">Admin</SelectItem>
                  <SelectItem value="user">User</SelectItem>
                  <SelectItem value="guest">Guest</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button type="button" variant="outline">Cancel</Button>
            </DialogClose>
            <Button type="submit">Create User</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
```

### Advanced Usage

#### Custom Size
```tsx
export function CustomSizedDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Large Dialog</Button>
      </DialogTrigger>
      <DialogContent className="max-w-3xl">
        <DialogHeader>
          <DialogTitle>Large Content</DialogTitle>
          <DialogDescription>
            This dialog has custom width for larger content.
          </DialogDescription>
        </DialogHeader>
        <div className="h-96 overflow-y-auto">
          {/* Large content here */}
        </div>
      </DialogContent>
    </Dialog>
  );
}
```

#### Scrollable Content
```tsx
export function ScrollableDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Scrollable Content</Button>
      </DialogTrigger>
      <DialogContent className="max-h-[85vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Terms and Conditions</DialogTitle>
          <DialogDescription>
            Please read the terms carefully.
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-4 py-4">
          {/* Long scrollable content */}
          {Array.from({ length: 20 }).map((_, i) => (
            <p key={i}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          ))}
        </div>
        <DialogFooter>
          <Button>Accept</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
```

#### Prevent Close on Outside Click
```tsx
export function PersistentDialog() {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button>Required Action</Button>
      </DialogTrigger>
      <DialogContent
        onPointerDownOutside={(e) => e.preventDefault()}
        onEscapeKeyDown={(e) => e.preventDefault()}
      >
        <DialogHeader>
          <DialogTitle>Required Action</DialogTitle>
          <DialogDescription>
            You must complete this action to continue.
          </DialogDescription>
        </DialogHeader>
        <div className="py-4">
          {/* Required form fields */}
        </div>
        <DialogFooter>
          <Button onClick={() => setOpen(false)}>Complete</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
```

### Common Patterns

#### Pattern 1: Confirmation Dialog
```tsx
export function ConfirmationDialog({
  title,
  description,
  onConfirm,
  children
}: {
  title: string;
  description: string;
  onConfirm: () => void;
  children: ReactNode;
}) {
  const [open, setOpen] = useState(false);

  const handleConfirm = () => {
    onConfirm();
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>{description}</DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="outline">Cancel</Button>
          </DialogClose>
          <Button onClick={handleConfirm}>Confirm</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
```
**When to use:** Reusable confirmation pattern for various actions

#### Pattern 2: Multi-Step Dialog
```tsx
export function MultiStepDialog() {
  const [step, setStep] = useState(1);
  const totalSteps = 3;

  const handleNext = () => setStep((prev) => Math.min(prev + 1, totalSteps));
  const handleBack = () => setStep((prev) => Math.max(prev - 1, 1));

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Start Process</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Step {step} of {totalSteps}</DialogTitle>
          <DialogDescription>
            {step === 1 && "First step description"}
            {step === 2 && "Second step description"}
            {step === 3 && "Final step description"}
          </DialogDescription>
        </DialogHeader>
        <div className="py-4">
          {step === 1 && <div>Step 1 content</div>}
          {step === 2 && <div>Step 2 content</div>}
          {step === 3 && <div>Step 3 content</div>}
        </div>
        <DialogFooter className="justify-between">
          <Button
            variant="outline"
            onClick={handleBack}
            disabled={step === 1}
          >
            Back
          </Button>
          {step < totalSteps ? (
            <Button onClick={handleNext}>Next</Button>
          ) : (
            <DialogClose asChild>
              <Button>Finish</Button>
            </DialogClose>
          )}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
```
**When to use:** Guided processes or wizards that require multiple steps

#### Pattern 3: Async Action Dialog
```tsx
export function AsyncActionDialog() {
  const [isLoading, setIsLoading] = useState(false);
  const [open, setOpen] = useState(false);

  const handleSubmit = async () => {
    setIsLoading(true);
    try {
      await performAsyncAction();
      toast.success("Action completed successfully");
      setOpen(false);
    } catch (error) {
      toast.error("Action failed");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button>Perform Action</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Confirm Action</DialogTitle>
          <DialogDescription>
            This action cannot be undone.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="outline" disabled={isLoading}>
              Cancel
            </Button>
          </DialogClose>
          <Button onClick={handleSubmit} disabled={isLoading}>
            {isLoading ? "Processing..." : "Confirm"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
```
**When to use:** Actions that require API calls or async operations

---

## Composition

### Sub-components

#### Dialog (Root)
- **Purpose:** Provides context and state management for the dialog
- **Required:** Yes (wrapper for all dialog components)
- **Props:** open, defaultOpen, onOpenChange, modal

#### DialogTrigger
- **Purpose:** Button or element that opens the dialog
- **Required:** No (can be controlled externally)
- **Props:** asChild

#### DialogContent
- **Purpose:** Main container for dialog content
- **Required:** Yes
- **Props:** className, event handlers

#### DialogHeader
- **Purpose:** Semantic container for title and description
- **Required:** No (but strongly recommended)
- **Props:** className

#### DialogTitle
- **Purpose:** Main heading for the dialog (accessibility critical)
- **Required:** Yes (for accessibility)
- **Props:** className

#### DialogDescription
- **Purpose:** Additional context for the dialog
- **Required:** Recommended (for accessibility)
- **Props:** className

#### DialogFooter
- **Purpose:** Container for action buttons
- **Required:** No
- **Props:** className

#### DialogClose
- **Purpose:** Trigger to close the dialog
- **Required:** No (can close via onOpenChange)
- **Props:** asChild

### Parent Components
Dialog is typically a top-level component used throughout the application.

### Child Components
Components commonly used inside Dialog:
- **Form elements** - Input, Select, Textarea, Checkbox
- **Button** - Action buttons in footer
- **Label** - Form field labels
- **Card** - Content organization
- **Separator** - Visual section breaks

---

## Accessibility

### ARIA Attributes
- `role="dialog"`: Automatically applied to DialogContent
- `aria-labelledby`: Automatically links DialogTitle
- `aria-describedby`: Automatically links DialogDescription
- `aria-modal="true"`: Applied when modal prop is true

### Keyboard Navigation
| Key | Action |
|-----|--------|
| `Escape` | Closes the dialog |
| `Tab` | Cycles focus through interactive elements within dialog |
| `Shift + Tab` | Cycles focus backward |
| Focus is trapped | Cannot tab to elements outside dialog while open |

### Screen Reader Support
- Dialog role is announced when opened
- Title is announced as the dialog's accessible name
- Description provides additional context
- Focus is moved to dialog when opened
- Focus is returned to trigger when closed
- Background content is marked as inert (not accessible)

**Critical for Accessibility:**
```tsx
<DialogContent>
  <DialogHeader>
    <DialogTitle>Title is required</DialogTitle>
    <DialogDescription>Description is recommended</DialogDescription>
  </DialogHeader>
</DialogContent>
```

### Focus Management
- Focus automatically moves to first focusable element when opened
- Focus is trapped within dialog (cannot tab outside)
- Focus returns to trigger element when closed
- Manual focus control available via refs if needed
- Close button (X) is always focusable and last in tab order

### Color Contrast
- Overlay has 80% opacity for clear distinction
- All text meets WCAG AA contrast requirements
- Close button has visible focus indicator
- Works with dark and light themes

---

## Behavior & State

### State Management
- **Internal State:** Dialog manages open/closed state internally when uncontrolled
- **External State:** Can be controlled via `open` and `onOpenChange` props
- **Controlled vs Uncontrolled:**
  - Uncontrolled: Use `defaultOpen` for initial state
  - Controlled: Use `open` and `onOpenChange` for full control

### Event Handlers
| Event | Handler | Parameters | Description |
|-------|---------|------------|-------------|
| Open change | `onOpenChange` | `(open: boolean) => void` | Fired when dialog opens or closes |
| Escape key | `onEscapeKeyDown` | `(event: KeyboardEvent) => void` | Fired when Escape is pressed |
| Outside click | `onPointerDownOutside` | `(event: PointerDownOutsideEvent) => void` | Fired when clicking outside dialog |
| Any outside interaction | `onInteractOutside` | `(event: InteractOutsideEvent) => void` | Fired on any outside interaction |

### Side Effects
- **Body scroll lock:** Prevents scrolling page content when dialog is open
- **Focus trap:** Prevents keyboard navigation outside dialog
- **Inert background:** Makes background content inaccessible to screen readers
- **Portal rendering:** Dialog is rendered in document.body via portal
- **Animation:** Entrance and exit animations using Tailwind animate utilities

---

## Styling

### Default Styles
```typescript
// DialogOverlay
const overlayClasses = "fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0";

// DialogContent
const contentClasses = "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg";
```

### Customization
```tsx
<DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
  {/* Custom sized scrollable content */}
</DialogContent>

<DialogHeader className="text-left">
  {/* Left-aligned header */}
</DialogHeader>

<DialogFooter className="flex-col gap-2 sm:flex-row">
  {/* Stacked footer on mobile */}
</DialogFooter>
```

### Theme Variables
| CSS Variable | Default | Description |
|--------------|---------|-------------|
| `--background` | Theme-defined | Dialog background color |
| `--foreground` | Theme-defined | Dialog text color |
| `--border` | Theme-defined | Dialog border color |
| `--muted-foreground` | Theme-defined | Description text color |
| `--ring` | Theme-defined | Focus ring color |

### Responsive Behavior
- Default max-width: 512px (max-w-lg)
- On mobile: Full width with slight padding
- On desktop: Centered with border radius
- Header: Centered on mobile, left-aligned on desktop
- Footer: Stacked on mobile, row on desktop

```tsx
<DialogContent className="w-[calc(100%-2rem)] sm:max-w-lg md:max-w-2xl">
  {/* Responsive width */}
</DialogContent>
```

---

## Edge Cases & Limitations

### Known Issues

1. **Nested Dialogs:** Multiple dialogs stacked can cause z-index and focus issues
   ```tsx
   // Avoid nesting dialogs; use multi-step pattern instead
   // If necessary, manage z-index manually
   <DialogContent className="z-[60]">
   ```

2. **Form Auto-Focus:** Browser autofocus in forms may conflict with dialog focus management
   ```tsx
   // Disable autofocus on form fields inside dialog
   <Input autoFocus={false} />
   ```

3. **iOS Scroll Lock:** On iOS, body scroll lock may not work perfectly
   ```tsx
   // This is handled by Radix UI, but be aware of potential issues
   ```

### Browser Compatibility
- **Supported:** All modern browsers (Chrome 90+, Firefox 88+, Safari 14+, Edge 90+)
- **Known Issues:**
  - Safari < 15: Focus trap may have minor issues
  - iOS Safari: Scroll lock may allow minimal scrolling
- **Fallback Behavior:** Gracefully degrades without animations in older browsers

### Performance Considerations
- Dialog content is unmounted when closed (not just hidden)
- Portal rendering has minimal performance impact
- Animations use CSS transforms for optimal performance
- Large content: Consider lazy loading or virtualization
- Multiple dialogs: Only one should be open at a time

```tsx
// Optimize large content
import { lazy, Suspense } from "react";

const HeavyContent = lazy(() => import("./HeavyContent"));

<DialogContent>
  <Suspense fallback={<Loader />}>
    <HeavyContent />
  </Suspense>
</DialogContent>
```

### Limitations

1. **Single Dialog Limitation:** Only one modal dialog should be open at a time
2. **No Built-in Animations Control:** Animation timing is fixed in CSS
3. **Portal Target:** Always renders to document.body (not configurable)
4. **Z-Index Stack:** Fixed at z-50 (may conflict with other overlays)
5. **No Built-in Confirmation:** For destructive actions, use AlertDialog instead

### Error Handling
```tsx
export function SafeDialog({ children }: { children: ReactNode }) {
  const [error, setError] = useState<Error | null>(null);

  if (error) {
    return (
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Error</DialogTitle>
          <DialogDescription>
            Something went wrong. Please try again.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <DialogClose asChild>
            <Button onClick={() => setError(null)}>Close</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    );
  }

  return (
    <ErrorBoundary onError={setError}>
      {children}
    </ErrorBoundary>
  );
}
```

---

## Testing

### Unit Testing
```typescript
import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Dialog, DialogTrigger, DialogContent, DialogTitle } from "./dialog";

describe("Dialog", () => {
  it("opens when trigger is clicked", async () => {
    render(
      <Dialog>
        <DialogTrigger>Open</DialogTrigger>
        <DialogContent>
          <DialogTitle>Title</DialogTitle>
          <p>Content</p>
        </DialogContent>
      </Dialog>
    );

    const trigger = screen.getByRole("button", { name: /open/i });
    await userEvent.click(trigger);

    const dialog = screen.getByRole("dialog");
    expect(dialog).toBeInTheDocument();
    expect(within(dialog).getByText("Content")).toBeInTheDocument();
  });

  it("closes when escape key is pressed", async () => {
    render(
      <Dialog>
        <DialogTrigger>Open</DialogTrigger>
        <DialogContent>
          <DialogTitle>Title</DialogTitle>
        </DialogContent>
      </Dialog>
    );

    await userEvent.click(screen.getByRole("button", { name: /open/i }));
    expect(screen.getByRole("dialog")).toBeInTheDocument();

    await userEvent.keyboard("{Escape}");
    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
  });

  it("closes when close button is clicked", async () => {
    render(
      <Dialog>
        <DialogTrigger>Open</DialogTrigger>
        <DialogContent>
          <DialogTitle>Title</DialogTitle>
        </DialogContent>
      </Dialog>
    );

    await userEvent.click(screen.getByRole("button", { name: /open/i }));

    const closeButton = screen.getByRole("button", { name: /close/i });
    await userEvent.click(closeButton);

    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
  });
});
```

### Integration Testing
```typescript
describe("Dialog Integration", () => {
  it("traps focus within dialog", async () => {
    render(
      <Dialog>
        <DialogTrigger>Open</DialogTrigger>
        <DialogContent>
          <DialogTitle>Title</DialogTitle>
          <Button>Button 1</Button>
          <Button>Button 2</Button>
        </DialogContent>
      </Dialog>
    );

    await userEvent.click(screen.getByRole("button", { name: /open/i }));

    const button1 = screen.getByRole("button", { name: /button 1/i });
    const button2 = screen.getByRole("button", { name: /button 2/i });
    const closeButton = screen.getByRole("button", { name: /close/i });

    button1.focus();
    await userEvent.tab();
    expect(button2).toHaveFocus();

    await userEvent.tab();
    expect(closeButton).toHaveFocus();

    await userEvent.tab();
    expect(button1).toHaveFocus();
  });

  it("returns focus to trigger when closed", async () => {
    render(
      <Dialog>
        <DialogTrigger>Open</DialogTrigger>
        <DialogContent>
          <DialogTitle>Title</DialogTitle>
        </DialogContent>
      </Dialog>
    );

    const trigger = screen.getByRole("button", { name: /open/i });
    await userEvent.click(trigger);
    await userEvent.keyboard("{Escape}");

    expect(trigger).toHaveFocus();
  });
});
```

### Accessibility Testing
```typescript
import { axe, toHaveNoViolations } from "jest-axe";

expect.extend(toHaveNoViolations);

describe("Dialog Accessibility", () => {
  it("has no accessibility violations", async () => {
    const { container } = render(
      <Dialog defaultOpen>
        <DialogContent>
          <DialogTitle>Accessible Dialog</DialogTitle>
          <DialogDescription>Description text</DialogDescription>
        </DialogContent>
      </Dialog>
    );

    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it("requires DialogTitle for accessibility", () => {
    const { container } = render(
      <Dialog defaultOpen>
        <DialogContent>
          <p>Content without title</p>
        </DialogContent>
      </Dialog>
    );

    // This should fail accessibility checks
    const dialog = screen.getByRole("dialog");
    expect(dialog).not.toHaveAccessibleName();
  });
});
```

### Test Scenarios
- [x] Opens when trigger is clicked
- [x] Closes when Escape key is pressed
- [x] Closes when clicking outside (if enabled)
- [x] Closes when close button is clicked
- [x] Traps focus within dialog
- [x] Returns focus to trigger when closed
- [x] Has accessible name from DialogTitle
- [x] Has accessible description from DialogDescription
- [x] Prevents body scroll when open
- [x] Handles controlled state correctly
- [x] Handles form submission inside dialog
- [x] Renders content via portal
- [x] Meets WCAG AA accessibility standards

---

## Related Components

### Similar Components
- **AlertDialog** - Use for critical confirmations (better semantics for destructive actions)
- **Sheet** - Use for side panels that don't block entire screen
- **Drawer** - Mobile-optimized bottom sheet alternative
- **Popover** - Use for non-modal, contextual information

### Frequently Used Together
- **Button** - As DialogTrigger and action buttons
- **Form** - For data input within dialogs
- **Input / Select / Textarea** - Form fields
- **Separator** - Visual section breaks
- **ScrollArea** - For scrollable content

### Migration Guide

#### From AlertDialog to Dialog
```tsx
// AlertDialog (for destructive actions)
<AlertDialog>
  <AlertDialogTrigger>Delete</AlertDialogTrigger>
  <AlertDialogContent>
    <AlertDialogTitle>Are you sure?</AlertDialogTitle>
    <AlertDialogDescription>This action cannot be undone.</AlertDialogDescription>
    <AlertDialogFooter>
      <AlertDialogCancel>Cancel</AlertDialogCancel>
      <AlertDialogAction>Delete</AlertDialogAction>
    </AlertDialogFooter>
  </AlertDialogContent>
</AlertDialog>

// Dialog (for general use)
<Dialog>
  <DialogTrigger>Open</DialogTrigger>
  <DialogContent>
    <DialogTitle>Dialog Title</DialogTitle>
    <DialogDescription>Dialog description</DialogDescription>
    <DialogFooter>
      <DialogClose asChild>
        <Button variant="outline">Cancel</Button>
      </DialogClose>
      <Button>Confirm</Button>
    </DialogFooter>
  </DialogContent>
</Dialog>
```

---

## Resources

### Design References
- [shadcn/ui Dialog Documentation](https://ui.shadcn.com/docs/components/dialog)
- [Radix UI Dialog Documentation](https://www.radix-ui.com/docs/primitives/components/dialog)

### External Documentation
- [MDN: dialog element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dialog)
- [WAI-ARIA: Dialog Pattern](https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/)
- [WAI-ARIA: aria-modal](https://www.w3.org/TR/wai-aria-1.2/#aria-modal)

### Examples in Production
- User authentication forms
- Confirmation dialogs throughout application
- Settings and preferences dialogs
- Content creation and editing dialogs

---

## Changelog

### Version 1.0.0 (2025-10-09)
- Initial stable release
- Full composition API with 8 sub-components
- Automatic focus management and trapping
- Comprehensive accessibility support
- Keyboard navigation (Escape, Tab)
- Portal rendering
- Entrance and exit animations
- Controlled and uncontrolled modes
- TypeScript support with full type definitions

---

## Contributing

### How to Contribute
1. Review existing issues or create new ones for bugs/features
2. Follow existing patterns from Radix UI Dialog
3. Ensure changes maintain accessibility standards
4. Add tests for behavioral changes
5. Update documentation for API changes
6. Test across different browsers and devices

### Reporting Issues
Report issues with:
- Dialog configuration and props used
- Expected vs actual behavior
- Browser and device details
- Minimal reproduction code
- Screenshots or video if applicable

### Feature Requests
Submit feature requests with:
- Use case and problem description
- Proposed solution and API
- Accessibility considerations
- Alternative approaches considered

---

## License & Credits

- **License:** MIT (per project license)
- **Credits:**
  - Based on [shadcn/ui](https://ui.shadcn.com) design system
  - Built on [Radix UI Dialog](https://www.radix-ui.com/docs/primitives/components/dialog)
- **Maintained by:** Project maintainers
