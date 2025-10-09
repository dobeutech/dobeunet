# Component Documentation Guide

## Overview

This guide provides standards, best practices, and workflows for creating and maintaining component documentation in this project. Following these guidelines ensures consistency, completeness, and usefulness of all component documentation.

---

## Documentation Structure

### File Organization

```
docs/
├── components/           # Individual component documentation
│   ├── button.md
│   ├── dialog.md
│   ├── input.md
│   └── ...
├── templates/           # Documentation templates
│   └── component-template.md
├── assets/             # Screenshots, diagrams, videos
│   ├── screenshots/
│   ├── diagrams/
│   └── videos/
└── DOCUMENTATION_GUIDE.md  # This file
```

### Naming Conventions

- **Files:** Use kebab-case matching the component filename
  - Component: `button.tsx` → Documentation: `button.md`
  - Component: `alert-dialog.tsx` → Documentation: `alert-dialog.md`

- **Sections:** Use Title Case for headings
  - "API Reference"
  - "Usage Examples"
  - "Accessibility"

- **Code Examples:** Use descriptive function names
  - Good: `BasicExample`, `FormDialog`, `LoadingButton`
  - Bad: `Example1`, `Test`, `Demo`

---

## Documentation Template

All component documentation should follow the standard template located at:
`docs/templates/component-template.md`

### Required Sections

1. **Metadata** - Component details and status
2. **Overview** - Purpose and usage guidelines
3. **Installation & Import** - How to import and dependencies
4. **API Reference** - Props, types, variants
5. **Usage Examples** - Code examples for common scenarios
6. **Accessibility** - ARIA, keyboard, screen reader support
7. **Behavior & State** - State management and events
8. **Styling** - Customization and theming
9. **Edge Cases & Limitations** - Known issues and workarounds
10. **Testing** - Testing patterns and examples
11. **Related Components** - Similar and complementary components
12. **Resources** - External links and references
13. **Changelog** - Version history

### Optional Sections

- **Composition** - Sub-components and composition patterns (for composite components)
- **Migration Guide** - When replacing deprecated components
- **Performance** - For components with specific performance considerations

---

## Writing Standards

### Markdown Formatting

#### Code Blocks
Always specify the language for syntax highlighting:

```tsx
// Good
import { Button } from "@/components/ui/button";

export function Example() {
  return <Button>Click me</Button>;
}
```

```typescript
// For types
interface ComponentProps {
  variant: "default" | "secondary";
}
```

```bash
# For shell commands
npm install package-name
```

#### Tables
Use tables for structured data (props, variants, keyboard shortcuts):

```markdown
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| variant | string | "default" | Button style variant |
```

#### Lists
- Use bullet points for unordered lists
- Use numbered lists for sequential steps
- Maintain consistent indentation (2 spaces)

#### Links
- Use descriptive link text: `[MDN Button Documentation](https://...)`
- Avoid: `[click here](https://...)`

### Code Examples

#### Imports
Always include necessary imports:

```tsx
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { useState } from "react";
```

#### Completeness
Examples should be complete and runnable:

```tsx
// Good - complete example
export function Example() {
  const [count, setCount] = useState(0);

  return (
    <Button onClick={() => setCount(count + 1)}>
      Clicks: {count}
    </Button>
  );
}

// Bad - incomplete
<Button onClick={...}>Click</Button>
```

#### Naming
Use descriptive names that indicate the example's purpose:

```tsx
// Good
export function LoadingButtonExample() { }
export function FormWithValidation() { }
export function AsyncActionDialog() { }

// Bad
export function Example1() { }
export function Test() { }
export function Component() { }
```

#### Comments
Add comments for complex or non-obvious code:

```tsx
export function Example() {
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async () => {
    setIsLoading(true);
    try {
      await api.submit(); // API call
    } finally {
      setIsLoading(false); // Reset loading state even if error occurs
    }
  };

  return <Button onClick={handleSubmit}>Submit</Button>;
}
```

### Language and Tone

#### Voice
- Use second person ("you") for instructions
- Use active voice: "Click the button" not "The button should be clicked"
- Be direct and concise
- Avoid unnecessary jargon

#### Example Descriptions
After code examples, explain when and why to use them:

```markdown
#### Loading State
[code example]
**When to use:** Display feedback to users during asynchronous operations like form submissions or API calls.
```

#### Technical Accuracy
- Test all code examples before documenting
- Keep examples up to date with current API
- Document actual behavior, not ideal behavior
- Be honest about limitations

---

## API Documentation

### Props Tables

Structure:
```markdown
| Prop | Type | Default | Description |
|------|------|---------|-------------|
```

Guidelines:
- List required props first, then optional props alphabetically
- Use TypeScript union types: `"default" | "secondary" | "destructive"`
- Use `undefined` for props without defaults (not "none" or "-")
- Provide detailed descriptions that explain the prop's effect

Example:
```markdown
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| variant | `"default"` \| `"outline"` \| `"ghost"` | `"default"` | Visual style variant affecting colors and borders |
| size | `"sm"` \| `"default"` \| `"lg"` | `"default"` | Size variant affecting height, padding, and font size |
| disabled | `boolean` | `false` | When true, prevents interaction and displays disabled styling |
| className | `string` | `undefined` | Additional CSS classes merged with component styles |
```

### Type Definitions

Include key type definitions:

```typescript
interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

type ButtonVariant = "default" | "destructive" | "outline" | "secondary" | "ghost" | "link";
```

---

## Accessibility Documentation

### Required Coverage

Every component must document:

1. **ARIA Attributes**
   - Which ARIA attributes are used
   - When developers need to add additional ARIA attributes
   - Examples of proper ARIA usage

2. **Keyboard Navigation**
   - Table of keyboard shortcuts
   - Focus management behavior
   - Tab order considerations

3. **Screen Reader Support**
   - What screen readers announce
   - How to ensure proper announcements
   - Common pitfalls to avoid

4. **Focus Management**
   - How focus is handled
   - Focus trap behavior (if applicable)
   - Focus restoration

5. **Color Contrast**
   - Contrast ratios met
   - Theme support
   - High contrast mode

### Example Format

```markdown
### Keyboard Navigation
| Key | Action |
|-----|--------|
| `Enter` / `Space` | Activates the button |
| `Tab` | Moves focus to next element |
| `Escape` | Closes dialog (if in dialog) |

### Screen Reader Support
- Button text is announced as accessible name
- Disabled state is automatically announced
- Icon-only buttons require `aria-label`

Example:
\`\`\`tsx
<Button aria-label="Close dialog" size="icon">
  <X />
</Button>
\`\`\`
```

---

## Testing Documentation

### Test Examples

Provide examples for:

1. **Unit Tests** - Component rendering and prop handling
2. **Integration Tests** - Component interaction with other components
3. **Accessibility Tests** - Using jest-axe or similar tools

### Format

```typescript
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Component } from "./component";

describe("Component", () => {
  it("renders correctly", () => {
    render(<Component>Test</Component>);
    expect(screen.getByText("Test")).toBeInTheDocument();
  });

  it("handles user interaction", async () => {
    const handleClick = jest.fn();
    render(<Component onClick={handleClick} />);

    await userEvent.click(screen.getByRole("button"));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
```

### Test Scenarios Checklist

Provide a checklist of scenarios that should be tested:

```markdown
### Test Scenarios
- [x] Renders with default props
- [x] Handles all variant combinations
- [x] Responds to user interactions
- [x] Manages focus correctly
- [x] Works with keyboard navigation
- [x] Meets accessibility standards
```

---

## Visual Assets

### Screenshots

**When to include:**
- Complex UI patterns
- Multi-step interactions
- Responsive behavior
- Visual variants comparison

**Guidelines:**
- Size: Max 1200px width
- Format: PNG for UI, JPG for photos
- Naming: `component-name-description.png`
- Location: `docs/assets/screenshots/`
- Alt text: Always provide descriptive alt text

**Example:**
```markdown
![Button variants showing default, outline, and ghost styles](../assets/screenshots/button-variants.png)
```

### Diagrams

**When to include:**
- Component architecture
- Data flow
- State management
- Complex interactions

**Tools:**
- Mermaid (for markdown-embeddable diagrams)
- Excalidraw
- Figma

**Example (Mermaid):**
```markdown
\`\`\`mermaid
graph TD
    A[User clicks trigger] --> B[Dialog opens]
    B --> C{User action}
    C -->|Confirm| D[Execute action]
    C -->|Cancel| E[Close dialog]
    D --> E
\`\`\`
```

---

## Versioning and Changelog

### Version Numbers

Follow Semantic Versioning (SemVer):
- **Major** (1.0.0): Breaking changes
- **Minor** (0.1.0): New features, backwards compatible
- **Patch** (0.0.1): Bug fixes, backwards compatible

### Changelog Format

```markdown
### Version 1.2.0 (2025-10-09)
- Added `size` variant for icon buttons
- Fixed focus management in nested dialogs
- Changed default animation duration from 300ms to 200ms
- Deprecated `color` prop in favor of `variant`

### Version 1.1.0 (2025-09-15)
- Added `asChild` prop for composition
- Fixed accessibility issue with icon-only buttons

### Version 1.0.0 (2025-08-01)
- Initial stable release
```

---

## Workflow

### Creating New Component Documentation

1. **Copy the template:**
   ```bash
   cp docs/templates/component-template.md docs/components/new-component.md
   ```

2. **Fill in metadata section** with current date and version

3. **Document the API** by reviewing the component source code
   - List all props with accurate types
   - Document all variants
   - Include TypeScript definitions

4. **Create usage examples:**
   - Start with basic usage
   - Progress to advanced patterns
   - Include common use cases
   - Test all examples to ensure they work

5. **Document accessibility:**
   - Review ARIA implementation
   - Document keyboard interactions
   - Test with screen reader
   - Verify focus management

6. **Add edge cases and limitations:**
   - Document known issues
   - Provide workarounds
   - Note browser compatibility
   - Include performance considerations

7. **Write tests:**
   - Provide unit test examples
   - Include integration tests
   - Add accessibility tests

8. **Review and polish:**
   - Check for typos and grammar
   - Verify all links work
   - Ensure code examples are complete
   - Validate against template

### Updating Existing Documentation

When updating a component:

1. **Update the version number** and date in metadata
2. **Add entry to changelog** describing changes
3. **Update affected sections:**
   - Props table if API changed
   - Examples if behavior changed
   - Migration guide if breaking changes
4. **Mark deprecated features** clearly
5. **Add new examples** for new features
6. **Update test scenarios** if needed

### Documentation Review Checklist

Before finalizing documentation:

- [ ] All required sections are complete
- [ ] Metadata is accurate (version, date, status)
- [ ] All code examples include necessary imports
- [ ] All code examples have been tested
- [ ] Props table is complete and accurate
- [ ] Accessibility section covers all aspects
- [ ] Tables are formatted correctly
- [ ] Links are working
- [ ] Language is clear and concise
- [ ] Examples have descriptive names
- [ ] Changelog is updated
- [ ] No typos or grammatical errors

---

## Best Practices

### DO

- **Test all code examples** before documenting
- **Use real-world scenarios** in examples
- **Provide context** for when to use patterns
- **Document limitations** honestly
- **Keep examples simple** and focused
- **Update docs with code changes** immediately
- **Link to related components** for discovery
- **Include TypeScript types** in examples
- **Use descriptive variable names** in examples
- **Provide accessibility guidance** for every interactive element

### DON'T

- **Copy-paste without testing** examples
- **Use placeholder values** like "foo" or "bar"
- **Assume knowledge** - explain concepts
- **Leave outdated information** in docs
- **Skip accessibility documentation**
- **Use incomplete examples** that won't run
- **Forget to document edge cases**
- **Ignore browser compatibility** issues
- **Use overly complex examples** for basic usage
- **Document features that don't exist** (aspirational docs)

### Common Pitfalls

1. **Incomplete Examples**
   - Missing imports
   - Undefined variables
   - Missing type definitions

2. **Outdated Information**
   - Old API patterns
   - Deprecated props
   - Changed behavior

3. **Poor Organization**
   - Unclear section hierarchy
   - Missing table of contents (for long docs)
   - Inconsistent formatting

4. **Accessibility Oversights**
   - Missing keyboard navigation docs
   - No screen reader guidance
   - Incomplete ARIA documentation

---

## Maintenance

### Regular Reviews

**Monthly:**
- Review docs for newly added components
- Update examples for deprecated patterns
- Check for broken links
- Verify code examples still work

**Quarterly:**
- Comprehensive accessibility audit
- Update screenshots if UI has changed
- Review and consolidate feedback from users
- Update external links and references

**Annual:**
- Major documentation refactor if needed
- Update all version numbers
- Archive deprecated component docs
- Comprehensive style guide review

### Feedback and Improvement

Encourage feedback:
- Add "Was this helpful?" to documentation
- Create issues for documentation improvements
- Include feedback form link
- Monitor common support questions for doc gaps

### Tools and Automation

Recommended tools:
- **Linting:** markdownlint for consistency
- **Link checking:** markdown-link-check
- **Spell check:** cspell or similar
- **Code validation:** ESLint for code examples
- **Testing:** Run code examples through Jest/Testing Library

---

## Examples of Good Documentation

### Excellent Component Docs

Reference these for inspiration:
- **Button** - `docs/components/button.md`
  - Clear variant explanations
  - Comprehensive examples
  - Excellent accessibility coverage

- **Dialog** - `docs/components/dialog.md`
  - Complex composition well explained
  - Focus management documented
  - Edge cases clearly noted

### External References

High-quality documentation examples:
- [Radix UI Primitives](https://www.radix-ui.com/docs/primitives/components)
- [Material UI Components](https://mui.com/material-ui/getting-started/)
- [Chakra UI Components](https://chakra-ui.com/docs/components)
- [React Aria Components](https://react-spectrum.adobe.com/react-aria/components.html)

---

## Questions and Support

### Getting Help

If you need help writing documentation:
1. Review this guide and the template
2. Look at existing component documentation as examples
3. Ask in team chat or create an issue
4. Reference external documentation resources

### Contributing to This Guide

This guide should evolve with the project:
- Submit improvements via pull requests
- Discuss major changes in issues first
- Keep the guide updated with new patterns
- Share lessons learned from documentation work

---

## Appendix

### Quick Reference: Section Purposes

- **Metadata:** Component identity and status
- **Overview:** When and why to use component
- **Installation:** How to import and setup
- **API Reference:** Technical specifications
- **Usage Examples:** How to implement
- **Composition:** Component relationships (if applicable)
- **Accessibility:** Inclusive design requirements
- **Behavior:** How component works
- **Styling:** Customization options
- **Edge Cases:** Known limitations
- **Testing:** Quality assurance patterns
- **Related:** Discovery and alternatives
- **Resources:** Further reading
- **Changelog:** Version history
- **Contributing:** How to improve

### Template Customization

The template can be customized for special cases:

**For simple components:**
- Omit "Composition" if no sub-components
- Simplify "Behavior & State" if stateless
- Reduce "Edge Cases" if minimal

**For complex components:**
- Add "Performance" section if relevant
- Expand "Composition" with architecture diagrams
- Add "Recipes" section for common patterns
- Include "Migration Guide" if replacing older component

**For layout components:**
- Add "Layout Patterns" section
- Include responsive behavior examples
- Document grid/flex usage

**For form components:**
- Add "Validation" section
- Document error handling patterns
- Include form integration examples

---

## Conclusion

Good documentation is a force multiplier for your component library. It reduces support burden, accelerates development, and improves code quality through clear specifications. By following these guidelines, you ensure that every component is well-documented, accessible, and easy to use.

Remember: documentation is code. Treat it with the same care, review it with the same rigor, and maintain it with the same discipline.

**Happy documenting!**
