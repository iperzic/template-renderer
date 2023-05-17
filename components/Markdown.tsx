import ReactMarkdown from 'react-markdown';

type MarkdownProps = {
  content: string;
  className?: string;
};

export default function Markdown({ content, className }: MarkdownProps) {
  return <ReactMarkdown className={className}>{content}</ReactMarkdown>;
}
