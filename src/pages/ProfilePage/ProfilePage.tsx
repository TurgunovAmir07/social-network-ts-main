import React from "react";
import "./ProfilePage.scss";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { StyledProfilePage } from "./ProfilePage.styled";
import { UserElem } from "../../components/UI/User/UserElem";
import { MusicElem } from "../../components/UI/Music/MusicElem";
import { Friends } from "../../components/UI/friends/Friends";
import { Group } from "../../components/UI/Groups/Groups";
import { Navbar } from "../../components/UI/Navbar/Navbar";
import { UserBlock } from "../../components/UI/UserDescription/UserBlock";
import { WhatsNew } from "../../components/UI/WhatsNew/WhatsNew";
import { UserPosts } from "../../components/UI/UserPosts/UserPosts";
import { PostLiked } from "../../components/UI/PostLiked/PostLiked";
import { RepostLiked } from "../../components/UI/RepostLiked/RepostLiked";
import { Bio } from "../../components/UI/BIO/Bio";

export const ProfilePage = () => {
  const user = useTypedSelector((state) => state.userSlice.user);

  return (
    <div className="container">
      <StyledProfilePage>
        <div className="ProfilePage">
          <aside className="LeftSide">
            <nav className="Navbar">
              <Navbar />
            </nav>
            <div className="List">
              <div className="List__title">
                <h2>Подписки</h2>
                <span className="count">123</span>
              </div>
              <Group />
            </div>
          </aside>
          <div className="ProfileHeader">
            <svg
              className="icon icon-edit"
              viewBox="0 0 50 50"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                id="icon"
                fillRule="evenodd"
                clipRule="evenodd"
                d="M25 50C38.8071 50 50 38.8071 50 25C50 11.1929 38.8071 0 25 0C11.1929 0 0 11.1929 0 25C0 38.8071 11.1929 50 25 50ZM33.0775 11.2929C32.687 10.9024 32.0538 10.9024 31.6633 11.2929L27.9599 14.9963L27.9596 14.9966L27.9592 14.9969L13.1447 29.8114C13.0246 29.9316 12.937 30.0804 12.8903 30.2438L11.0385 36.7253C10.9387 37.0745 11.0361 37.4503 11.2929 37.7071C11.5497 37.9639 11.9255 38.0613 12.2747 37.9615L18.7562 36.1097C18.9196 36.063 19.0684 35.9754 19.1886 35.8553L34.003 21.0408L34.0034 21.0404L34.0038 21.0401L37.7071 17.3367C38.0976 16.9462 38.0976 16.313 37.7071 15.9225L33.0775 11.2929ZM15.2661 30.5185L28.6667 17.1179L31.8821 20.3333L18.4815 33.7339L15.2661 30.5185ZM30.0809 15.7037L33.2963 18.9191L35.5858 16.6296L32.3704 13.4142L30.0809 15.7037ZM14.3465 32.4274L16.5726 34.6535L13.456 35.544L14.3465 32.4274Z"
              />
            </svg>
            <UserBlock />
            <div className="profile-background"></div>
          </div>
          <main className="Main">
            <WhatsNew />
            <UserPosts />
            <PostLiked />
            <RepostLiked />
          </main>
          <aside className="RightSide">
            <Bio />
            <div className="FriendsBlock">
              <div className="Friends__title">
                <h2>Друзья</h2>
                <span className="count">130</span>
              </div>
              <div className="Friends__wrapper">
                <Friends />
              </div>
            </div>
            <div className="MusicBlock">
              <div className="MusicBlock__title">
                <h2>Вы недавно слушали</h2>
                <span>123</span>
              </div>
              <MusicElem />
            </div>
          </aside>
        </div>
      </StyledProfilePage>
    </div>
  );
};
