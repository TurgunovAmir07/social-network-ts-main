import { useEffect } from "react";
import { History } from "../../components/History/History";
import { Post } from "../../components/Post/Post";
import { Container } from "../../components/UI/Container/Container.style";
import { Header } from "../../components/UI/Header/Header";
import { Navbar } from "../../components/UI/Navbar/Navbar";
import { WhatsNew } from "../../components/WhatsNew/WhatsNew";
import { useLazyGetPostListQuery } from "../../store/API/postApi";
import "./MainPage.scss";
import { StyledMainPage } from "./MainPage.style";
import { FullscreenLoader } from "../../components/UI/FullscreenLoader/FullscreenLoader";

export const MainPage = () => {
  const [fetchTrigger, { data, isLoading, isError }] =
    useLazyGetPostListQuery();

  useEffect(() => {
    fetchTrigger(null);
  }, [fetchTrigger, data]);

  return (
    <Container>
      <Header />
      {isLoading && <FullscreenLoader />}
      <StyledMainPage>
        <aside className="LeftSide">
          <Navbar />
          <div className="List">
            <div className="List__title">
              <h2>Подписки</h2>
              <span className="count">123</span>
            </div>
            <div className="UserElem">
              <img src="./img/profile/profile-img-1.jpeg" alt="User" />
              <div className="user__description">
                <p className="main__text">N E W</p>
                <p className="secondary__text">Развитие</p>
              </div>
              <span className="Badge">3</span>
            </div>
            <div className="UserElem">
              <img src="./img/profile/profile-img-2.jpeg" alt="User" />
              <div className="user__description">
                <p className="main__text">Aesthetics</p>
                <p className="secondary__text">Стиль</p>
              </div>
              <span className="Badge">3</span>
            </div>
            <div className="UserElem">
              <img src="./img/profile/profile-img-3.jpeg" alt="User" />
              <div className="user__description">
                <p className="main__text">дом твоей эстетики</p>
                <p className="secondary__text">Творчество</p>
              </div>
              <span className="Badge">3</span>
            </div>
            <div className="UserElem">
              <img src="./img/profile/profile-img-4.jpeg" alt="User" />
              <div className="user__description">
                <p className="main__text">wailet</p>
                <p className="secondary__text">Искусство</p>
              </div>
              <span className="Badge">3</span>
            </div>
            <div className="UserElem">
              <img src="./img/profile/profile-img-5.jpeg" alt="User" />
              <div className="user__description">
                <p className="main__text">A W E S O M E</p>
                <p className="secondary__text">Стиль</p>
              </div>
              <span className="Badge">3</span>
            </div>
            <div className="UserElem">
              <img src="./img/profile/profile-img-6.jpeg" alt="User" />
              <div className="user__description">
                <p className="main__text">minimalism</p>
                <p className="secondary__text">Фотография</p>
              </div>
              <span className="Badge">3</span>
            </div>
            <div className="UserElem">
              <img src="./img/profile/profile-img-7.jpeg" alt="User" />
              <div className="user__description">
                <p className="main__text">Словарный запасE</p>
                <p className="secondary__text">Литература</p>
              </div>
              <span className="Badge">3</span>
            </div>
            <div className="UserElem">
              <img src="./img/profile/profile-img-8.jpeg" alt="User" />
              <div className="user__description">
                <p className="main__text">Look</p>
                <p className="secondary__text">Мода</p>
              </div>
              <span className="Badge">3</span>
            </div>
          </div>
        </aside>
        <main className="Main">
          <WhatsNew onNewPostAdded={() => fetchTrigger(null)} />
          <History />
          {isError && <h1>Ошибка :(</h1>}
          {!!data?.message.length &&
            [...data.message].reverse().map((post) => (
              <Post
                key={post.id}
                postText={post.main_text}
                regDate={post.reg_date}
                userName={post.user_fk.name}
                photos={post.photos}
                postId={post.id}
                onPostDelete={() => fetchTrigger(null)}
              />
            ))}
        </main>
        <aside className="RightSide">
          <div className="List">
            <div className="List__title">
              <h2>Близкие друзья</h2>
              <span className="count">123</span>
            </div>
            <div className="UserElem">
              <img src="./img/users/aleksandr-maykov.jpeg" alt="User" />
              <div className="user__description">
                <p className="main__text">Александр Майков</p>
                <p className="secondary__text _online">Онлайн</p>
              </div>
              <span className="Badge">3</span>
            </div>
            <div className="UserElem">
              <img src="./img/users/aleksandr-maykov.jpeg" alt="User" />
              <div className="user__description">
                <p className="main__text">Александр Майков</p>
                <p className="secondary__text _online">Онлайн</p>
              </div>
              <span className="Badge">3</span>
            </div>
            <div className="UserElem">
              <img src="./img/users/aleksandr-maykov.jpeg" alt="User" />
              <div className="user__description">
                <p className="main__text">Александр Майков</p>
                <p className="secondary__text _online">Онлайн</p>
              </div>
              <span className="Badge">3</span>
            </div>
          </div>
          <div className="MusicBlock">
            <div className="MusicBlock__title">
              <h2>Вы недавно слушали</h2>
              <span>123</span>
            </div>
            <div className="MusicElem">
              <img src="./img/music/album-1.png" alt="Album" />
              <div className="music__description">
                <p className="main__text">Pieces</p>
                <p className="secondary__text">Andrew Belle</p>
              </div>
              <div className="plus-button _active"></div>
            </div>
            <div className="MusicElem">
              <img src="./img/music/album-2.png" alt="Album" />
              <div className="music__description">
                <p className="main__text">In the Wind</p>
                <p className="secondary__text">On-The-Go</p>
              </div>
              <div className="plus-button"></div>
            </div>
            <div className="MusicElem">
              <img src="./img/music/album-3.png" alt="Album" />
              <div className="music__description">
                <p className="main__text">On you own</p>
                <p className="secondary__text">Meltt</p>
              </div>
              <div className="plus-button _active"></div>
            </div>
            <div className="MusicElem">
              <img src="./img/music/album-4.png" alt="Album" />
              <div className="music__description">
                <p className="main__text">Infinity</p>
                <p className="secondary__text">James Young</p>
              </div>
              <div className="plus-button"></div>
            </div>
            <div className="MusicElem">
              <img src="./img/music/album-5.png" alt="Album" />
              <div className="music__description">
                <p className="main__text">Let me follow</p>
                <p className="secondary__text">Son Lux</p>
              </div>
              <div className="plus-button _active"></div>
            </div>
            <div className="MusicElem">
              <img src="./img/music/album-6.png" alt="Album" />
              <div className="music__description">
                <p className="main__text">Youth</p>
                <p className="secondary__text">Glass Animals</p>
              </div>
              <div className="plus-button"></div>
            </div>
          </div>
        </aside>
      </StyledMainPage>
    </Container>
  );
};
