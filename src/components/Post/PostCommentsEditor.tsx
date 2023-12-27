import { StyledTextArea } from "./Post.style";

interface PostCommentEditorProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

export const PostCommentsEditor = ({
  value,
  onChange,
  onKeyDown,
}: PostCommentEditorProps) => {
  return (
    <StyledTextArea
      value={value}
      rows={3}
      placeholder="Добавить комментарий"
      onChange={onChange}
      onKeyDown={onKeyDown}
    />
  );
};
