import React from "react";
import styled from "styled-components";


const Wrapper = styled.div`
  align-item: center;
  display: flex;
  margin: 0 10%;
`;
const ContentRight = styled.div`
  background-color: #fff;
  display:flex;
  flex-director:column;
`;
const ContentItemRight = styled.div``
const ContentLeft = styled.div`
  width: 40%;
  padding: 5px 10px 10px 10px;
  background-color: #f3f3f3;
  border-radius: 4px;
`;
const ActicleItem = styled.div`
`
const ImageAuthor = styled.img``;
const ContentItem = styled.span``;
const LikePost = styled.button``;
const Tag = styled.button``;

export default function ContentComponent({dataArticle}) {
  return (
    <div>
      <Wrapper>
        <ContentRight>
            <ContentItemRight>
              <ActicleItem>
                {
                  dataArticle &&  dataArticle.articles.map(
                        item=>{
                            return(
                                
                                    <>
                                    <ImageAuthor src={item.author.image}/>
                                    <ContentItem></ContentItem>
                                    <ContentItem>
                                        {item.body}
                                    </ContentItem>
                                    <ContentItem></ContentItem>
                                    <ContentItem></ContentItem>
                                    <LikePost></LikePost>
                                    <Tag></Tag>
                                </>

                                )
                            }
                               
                            )
                        } 
                    
                    </ActicleItem>
          </ContentItemRight>
        </ContentRight>
        <ContentLeft>
          <ContentItem>Popular Tags</ContentItem>
          <Tag> Tag List</Tag>
        </ContentLeft>
      </Wrapper>
    </div>
  );
}
