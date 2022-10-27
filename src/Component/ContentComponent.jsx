import React, { useState } from "react";
import styled from "styled-components";
import { formatDate } from "../helpers";
import {BsSuitHeartFill} from 'react-icons/bs';
import {BsSuitHeart} from 'react-icons/bs'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

 import { faHeart } from '@fortawesome/free-solid-svg-icons'
// import { faHatCowboy } from '@fortawesome/pro-thin-svg-icons'
const Wrapper = styled.div`
  align-item: center;
  display: flex;
  margin: 0 10%;
`;
const ContentRight = styled.div`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  width:80%;
`;

const ContentLeft = styled.div`
  width:300px;
  height: 200px;
  display:flex;
  flex-wrap: wrap;
  flex-direction:column;
 
  background-color: #f3f3f3;
  border-radius: 10%;
  margin:10px;
`;
const ItemLeft = styled.div`
margin:10px;
display:flex;
  flex-wrap: wrap;
`;
const ActicleItem = styled.div`
   display:flex;
   flex-direction:column;
  margin: 30px;
`;
const NavGlobarFeed = styled.span`
  border-bottom: 5px solid green;
  padding: 15px 15px 10px 10px;
  color:green;
`;
const ImageAuthor = styled.img`
  border-radius: 50%;
`;
const ContentItem = styled.span`
  color: ${(props) => {
    return props.color;
  }};
`;
const LikePost = styled.button`
border:1px solid green;
height:30px;
display:flex;
color: green;
border-radius : 10% ;
padding: 7px 10px;
margin-left:60%;`

const Tag = styled.button`
margin:5px;
border-radius:15px;
border:none;
color:white;
background-color:#818A91`;
const InfoItem = styled.div`
  display: flex;
  height: 50px;
  margin: 20px;
`;
const Author = styled.div`
  display:flex;
  flex-direction:column;

`;
const LoadRead = styled.div`
cursor:pointer`
const TagListItem = styled.div`
  display:flex;`

export default function ContentComponent({ dataArticle,isFavoris,setisFavoris }) {
  const [isLoad,setIsLoad] = useState(false)
  const handleTym = () =>{
    setisFavoris(!isFavoris)
  }
 const handleClickLoad = () =>{
      setIsLoad(!isLoad);
      console.log(isLoad)
  }
  return (
    <div>
      <Wrapper>
        <ContentRight>
          <NavGlobarFeed>Global Feed</NavGlobarFeed>
    
          {
         (isLoad === false) ? (      
          dataArticle && dataArticle.articles.map((item,index) => {
          
            return (
              <>
                 <hr style={{ margin: 0, width: "100%" }}></hr>
                <ActicleItem key={index}>
                  <InfoItem>
                  <ImageAuthor src={item.author.image} />
                    <Author>
                      <ContentItem color="green">
                        {item.author.username}
                      </ContentItem>
                      <ContentItem>{formatDate(item.createdAt)}</ContentItem>
                    </Author>
                    
                   
                  { (isFavoris===true)?
                   (<LikePost><BsSuitHeartFill/>{item.favoritesCount}</LikePost> ):
                   (<LikePost><BsSuitHeart onClick={()=>handleTym()}/>{item.favoritesCount}</LikePost> )
                   
                    }
                      {/* <FontAwesomeIcon icon={faHearts}/> */}
                  </InfoItem>
                  <ContentItem>{item.title.slice(0,100)}</ContentItem>
                
                  <LoadRead onClick={()=>handleClickLoad()}>Read More</LoadRead>
                  <TagListItem>
                  { item.tagList.map
                     ((el)=>{return(<Tag>{el} </Tag>)})
                     }
                  </TagListItem>
                </ActicleItem>
              </>
            );
          }        
                
         )):(     
          dataArticle && dataArticle.articles.map((item,index) => {
          
            return (
              <>
                 <hr style={{ margin: 0, width: "100%" }}></hr>
                <ActicleItem key={index}>
                  <InfoItem>
                  <ImageAuthor src={item.author.image} />
                    <Author>
                      <ContentItem color="green">
                        {item.author.username}
                      </ContentItem>
                      <ContentItem>{item.createdAt}</ContentItem>
                    </Author>
                    {/* <LikePost><FontAwesomeIcon icon={faHeart}/>{item.favoritesCount}</LikePost> */}
                  </InfoItem>
                  <ContentItem>{item.title}</ContentItem>
                
                  <LoadRead onClick={handleClickLoad}>Read More</LoadRead>
                  <TagListItem>
                  { item.tagList.map
                     ((el)=>{return(<Tag>{el} </Tag>)})
                     }
                  </TagListItem>
                </ActicleItem>
              </>
            );
          }
          )
             

         )
          
         }
          
          
        </ContentRight>
        <ContentLeft>
          <ContentItem style={{marginLeft:'10px'}}>Popular Tags</ContentItem>
          <ItemLeft>
          
          <Tag>implementations</Tag>
          <Tag>welcome</Tag>
          <Tag>introduction</Tag>
          <Tag>codebaseShow</Tag>
          <Tag>ipsum</Tag>
          <Tag>qui</Tag>
          <Tag>et</Tag>
          <Tag>quia</Tag>
          <Tag>cupiditate</Tag>
          <Tag>deserunt</Tag>
          </ItemLeft>
        </ContentLeft>
      </Wrapper>
    </div>
  );
}
