import React from 'react';
import { Link } from 'react-router-dom';

/**
 * Custom components available in MDX files
 */

// Callout box for tips, warnings, info
export const CalloutBox = ({ type = 'info', children }) => {
  const styles = {
    info: 'bg-primary-vividAzure/20 border-primary-vividAzure text-primary-lightAzure',
    warning: 'bg-yellow-500/20 border-yellow-500 text-yellow-200',
    success: 'bg-green-500/20 border-green-500 text-green-200',
    error: 'bg-red-500/20 border-red-500 text-red-200',
  };

  return (
    <div className={`p-4 my-6 border-l-4 rounded-r-lg ${styles[type]}`}>
      {children}
    </div>
  );
};

// Custom link that handles internal vs external
const CustomLink = ({ href, children, ...props }) => {
  const isInternal = href?.startsWith('/');

  if (isInternal) {
    return (
      <Link to={href} className="text-primary-vividAzure hover:text-primary-lightAzure underline" {...props}>
        {children}
      </Link>
    );
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-primary-vividAzure hover:text-primary-lightAzure underline"
      {...props}
    >
      {children}
    </a>
  );
};

// Code block with styling
const CodeBlock = ({ children, className }) => {
  return (
    <pre className="bg-primary-navy/80 border border-primary-vividAzure/20 rounded-lg p-4 overflow-x-auto my-4">
      <code className={`text-sm text-gray-300 ${className || ''}`}>
        {children}
      </code>
    </pre>
  );
};

// Inline code
const InlineCode = ({ children }) => {
  return (
    <code className="bg-primary-vividAzure/20 text-primary-lightAzure px-1.5 py-0.5 rounded text-sm">
      {children}
    </code>
  );
};

// Headings with anchor links
const createHeading = (level) => {
  const Tag = `h${level}`;
  const sizes = {
    1: 'text-4xl',
    2: 'text-3xl',
    3: 'text-2xl',
    4: 'text-xl',
    5: 'text-lg',
    6: 'text-base',
  };

  return ({ children }) => (
    <Tag className={`${sizes[level]} font-bold text-white mt-8 mb-4`}>
      {children}
    </Tag>
  );
};

// Paragraph
const Paragraph = ({ children }) => (
  <p className="text-gray-300 leading-relaxed my-4">
    {children}
  </p>
);

// Lists
const UnorderedList = ({ children }) => (
  <ul className="list-disc list-inside space-y-2 my-4 text-gray-300">
    {children}
  </ul>
);

const OrderedList = ({ children }) => (
  <ol className="list-decimal list-inside space-y-2 my-4 text-gray-300">
    {children}
  </ol>
);

const ListItem = ({ children }) => (
  <li className="text-gray-300">{children}</li>
);

// Blockquote
const Blockquote = ({ children }) => (
  <blockquote className="border-l-4 border-primary-vividAzure pl-4 my-6 italic text-gray-400">
    {children}
  </blockquote>
);

// Strong/Bold
const Strong = ({ children }) => (
  <strong className="font-bold text-white">{children}</strong>
);

// Horizontal rule
const HorizontalRule = () => (
  <hr className="border-primary-vividAzure/30 my-8" />
);

/**
 * MDX component mapping
 */
export const mdxComponents = {
  // Custom components
  CalloutBox,

  // HTML element overrides
  a: CustomLink,
  pre: CodeBlock,
  code: InlineCode,
  p: Paragraph,
  h1: createHeading(1),
  h2: createHeading(2),
  h3: createHeading(3),
  h4: createHeading(4),
  h5: createHeading(5),
  h6: createHeading(6),
  ul: UnorderedList,
  ol: OrderedList,
  li: ListItem,
  blockquote: Blockquote,
  strong: Strong,
  hr: HorizontalRule,
};

export default mdxComponents;
