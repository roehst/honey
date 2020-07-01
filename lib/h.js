// Helper function to define a component
export const h = (tag, attr, children) => ({
  tag: tag,
  text: attr.text,
  value: attr.value,
  onClick: attr.onClick,
  onInput: attr.onInput,
  children: children,
});
