import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Container } from "../../components/UI/Container/Container.style";
import { useLazyGetPostByIdQuery } from "../../store/API/postApi";
import { Post } from "../../components/Post/Post";

export const PostPage = () => {
  const { postId } = useParams()
  const [fetchTrigger, { data, isLoading, isError }] =
    useLazyGetPostByIdQuery();

  useEffect(() => {
    if (postId) {
      // Вызов запроса
      fetchTrigger(postId)
    }
  }, [postId])

  return (
    <Container>
      {isError && <h1>Произошла ошибка</h1>}
      {isLoading && <h1>Идет загрузка...</h1>}
      {data && (
        <Post
          postText={data.message.main_text}
          userName={data.message.user_fk.name}
          regDate={data.message.reg_date}
          photos={data.message.photos}
          postId={postId as string}
        />
      )}
    </Container>
  );
}