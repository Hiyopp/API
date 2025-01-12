import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import { getAllPosts } from "src/components/api/post/posts";
import styled from "styled-components";

const EntireDiv = styled.div`
  height: 100vh;
  width: 90vw;
`;

const HeaderDiv = styled.div`
  padding: 10px 10px 10px 10px;
`;

const TitleDiv = styled.div`
  font-size: 50px;
  font-weight: bold;
  padding: 20px 20px 20px 20px;
`;

const StyledDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const StyledCreateLink = styled(Link)`
  color: #333;
  font-size: 1rem;
  font-family: "Roboto", sans-serif;
  text-decoration: none;
  padding: 15px 15px 15px 15px;
  border: 2px solid transparent;
  border-radius: 8px;
  background-color: #f7f7f7;
  transition:
    color 0.3s ease,
    background-color 0.3s ease,
    box-shadow 0.3s ease,
    transform 0.2s ease;

  &:hover,
  &:focus {
    color: #fff;
    background-color: #007bff;
    box-shadow: 0px 4px 15px rgba(0, 123, 255, 0.4);
    transform: translateY(-3px);
  }

  &:active {
    color: #fff;
    background-color: #0056b3;
    transform: translateY(0);
    box-shadow: 0px 2px 10px rgba(0, 86, 179, 0.3);
  }
`;

const StyledLink = styled(Link)`
  color: #333;
  font-size: 1rem;
  font-family: "Roboto", sans-serif;
  text-decoration: none;
  padding: 4px 8px;
  border: 2px solid transparent;
  border-radius: 8px;
  background-color: #f7f7f7;
  transition:
    color 0.3s ease,
    background-color 0.3s ease,
    box-shadow 0.3s ease,
    transform 0.2s ease;

  &:hover,
  &:focus {
    color: #fff;
    background-color: #007bff;
    box-shadow: 0px 4px 15px rgba(0, 123, 255, 0.4);
    transform: translateY(-3px);
  }

  &:active {
    color: #fff;
    background-color: #0056b3;
    transform: translateY(0);
    box-shadow: 0px 2px 10px rgba(0, 86, 179, 0.3);
  }
`;

const ListItem = styled.li`
  margin-bottom: 10px;
`;

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const PostsList = () => {
  const {
    data: posts = [],
    isLoading,
    error,
  } = useQuery({
    queryKey: ["getAllPosts"],
    queryFn: getAllPosts,
  });

  if (isLoading) return <div>로딩 중...</div>;
  if (error)
    return (
      <div>
        게시물을 불러오는 중 오류가 발생했습니다: {(error as Error).message}
      </div>
    );

  return (
    <EntireDiv>
      <HeaderDiv>
        <StyledDiv>
          <TitleDiv>게시물</TitleDiv>
          <StyledCreateLink to={`/createpost`}>게시물 생성</StyledCreateLink>
        </StyledDiv>
      </HeaderDiv>

      <ul>
        {posts.map((post: Post) => (
          <ListItem key={post.id}>
            <StyledLink to={`/post/${post.id}`}>{post.title}</StyledLink>
          </ListItem>
        ))}
      </ul>
    </EntireDiv>
  );
};

export default PostsList;
