export function addNonbreakingSpaces(text) {
  const conjunctions = ["and", "or", "but", "because", "for", "if", "when"].map(
    (conjunction) => `${conjunction[0].toUpperCase()}${conjunction.slice(1)}`
  );

  conjunctions.forEach((conjunction) => {
    text = text.replaceAll(` ${conjunction} `, ` ${conjunction}&nbsp;`);
  });

  return text;
}

export function InlineText({ children }) {
  const type = typeof children;
  if (type !== "string") {
    throw new Error(
      `Span component must have a string as a child, but got ${type}`
    );
  }

  return (
    <span
      dangerouslySetInnerHTML={{ __html: addNonbreakingSpaces(children) }}
    />
  );
}

export function Paragraph({ children, className, style }) {
  const type = typeof children;
  if (type !== "string") {
    throw new Error(
      `Paragraph component must have a string as a child, but got ${type}`
    );
  }

  return (
    <p className={className} style={style}>
      <InlineText>{children}</InlineText>
    </p>
  );
}
