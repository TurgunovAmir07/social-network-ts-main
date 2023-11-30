import styled from "styled-components";

export const StyledProfilePage = styled.div`
  display: grid;
  grid-template-areas:
    "L P P"
    "L M R";
  grid-template-columns: minmax(300px, 360px) auto minmax(300px, 360px);
  gap: 30px;

  .LeftSide {
    grid-area: L;

    .Navbar {
      margin-bottom: 20px;
    }
  }

  .ProfileHeader {
    grid-area: P;
  }

  .Main {
    grid-area: M;

    .UserPosts {
      margin-bottom: 20px;
    }

    .Post {
      margin-bottom: 20px;
    }

    .WhatsNew {
      margin-bottom: 20px;
    }
  }

  .RightSide {
    grid-area: R;

    .bio {
      margin-bottom: 20px;
    }

    .List {
      margin-bottom: 20px;
    }

    .FriendsBlock {
      margin-bottom: 20px;
    }
  }

  @media (max-width: 1440px) {
    .StyledProfilePage {
      grid-template-areas:
        "L P"
        "L M";
      grid-template-columns: 290px auto;

      .RightSide {
        display: none;
      }
    }
  }

  @media (max-width: 730px) {
    .StyledProfilePage {
      display: block;

      .ProfileHeader {
        margin-bottom: 20px;
      }

      .LeftSide {
        display: none;
      }
    }
  }

  .Navbar {
    box-shadow: 0 0 10px ${(props) => props.theme.colors.lightGray};
    border-radius: 20px;
    padding: calc(1vw + 11px);
    background-color: ${(props) => props.theme.colors.elemsBgc};
    color: ${(props) => props.theme.colors.textColor};

    .navbar__list {
      display: flex;
      flex-direction: column;
      gap: 15px;
    }

    .navbar__item {
      cursor: pointer;
      display: flex;
      align-items: center;
      gap: 20px;

      border-radius: 10px;
      padding: 10px 15px;
      list-style: none;
      transition: 200ms;

      .icon {
        flex: 0 1 25px;
        height: calc(1vw + 5px); //? 1440 - 20 | 1920 - 25
        object-fit: contain;
        fill: ${(props) => props.theme.colors.primeColor};
      }

      .item__name {
        flex: 1 1 auto;
      }

      &:hover {
        background-color: ${(props) => props.theme.colors.lightGray};
      }

      &:active {
        transition: 100ms;
        background-color: ${(props) => props.theme.colors.primeColor};
        color: white;

        .icon {
          fill: white;
        }

        .Badge {
          background-color: white;
          color: ${(props) => props.theme.colors.textColor};
        }
      }
    }
  }

  @media (max-width: 1100px) {
    .StyledProfilePage {
      grid-template-columns: min-content auto;

      .LeftSide {
        .List {
          display: none;
        }
      }
    }

    .Navbar {
      .navbar__item {
        display: inline-block;

        .icon {
          height: 25px;
        }

        .item__name {
          display: none;
        }

        .Badge {
          display: none;
        }
      }
    }
  }

  .ProfileHeader {
    height: 440px;
    border-radius: 20px;
    overflow: hidden;
    background-color: ${(props) => props.theme.colors.elemsBgc};
    box-shadow: 0 0 10px ${(props) => props.theme.colors.lightGray};
    position: relative;

    .icon-edit {
      cursor: pointer;
      position: absolute;
      top: 20px;
      right: 20px;
      z-index: 2;

      width: 40px;
      height: 40px;
      fill: white;

      transition: 200ms;

      &:hover {
        filter: drop-shadow(
          0 0 10px ${(props) => props.theme.colors.primeColor}
        );
      }

      &:active {
        scale: 0.9;
        transition: 100ms;
      }
    }

    .user__info {
      display: inline-flex;
      align-items: center;

      gap: calc(3.8vw - 34px); //? 40 - 1920 | 20 - 1400
      border-top: 1px solid ${(props) => props.theme.colors.lightGray};
      padding-top: 20px;

      .parameter {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 10px;

        border-radius: 12px;
        padding: 10px;
        transition: 200ms;

        &:hover {
          background-color: ${(props) => props.theme.colors.lightGray};
        }

        .value {
          color: ${(props) => props.theme.colors.gray};
        }
      }
    }

    .user__name {
      margin-bottom: 15px;
    }

    .profile-background {
      width: 100%;
      height: 100%;
      object-fit: cover;

      position: absolute;
      top: 0;
      left: 0;
      z-index: 1;

      background: rgb(44, 40, 113);
      background: linear-gradient(
        90deg,
        rgba(44, 40, 113, 1) 0%,
        rgba(171, 101, 128, 1) 37%,
        rgba(195, 223, 176, 1) 89%,
        rgba(203, 207, 150, 1) 99%
      );
      background-size: 200% 200%;
      animation: wallpaper-anim 2s ease infinite;
    }
  }

  .user__block {
    position: absolute;
    bottom: 0;
    left: 0;
    z-index: 2;

    width: 100%;
    padding: 20px;
    padding-left: calc(3.9vw + 165px); //? 180 - 375 | 240 - 1920
    background-color: ${(props) => props.theme.colors.elemsBgc};
    border-radius: 20px;

    display: flex;
    align-items: center;
    justify-content: space-between;

    img {
      width: calc(3.2vw + 113px); //? 125 - 375 | 175 - 1920
      height: calc(3.2vw + 113px); //? 125 - 375 | 175 - 1920
      object-fit: cover;
      border: 5px solid ${(props) => props.theme.colors.elemsBgc};
      border-radius: 50%;

      position: absolute;
      top: -56px;
      left: 30px;
    }

    .buttons-wrapper {
      display: flex;
      flex-direction: column;
      gap: 10px;
    }
  }

  @keyframes wallpaper-anim {
    0% {
      background-position: 0% 0%;
    }
    50% {
      background-position: 100% 0%;
    }
    100% {
      background-position: 0% 0%;
    }
  }

  @media (max-width: 1750px) {
    .StyledProfileHeader {
      height: 300px;
    }

    .user__block {
      flex-direction: column;
      align-items: flex-end;
      gap: 10px;

      padding: 20px;

      img {
        width: 130px;
        height: 130px;
        top: -75px;
        left: 50px;
      }

      .user__description {
        width: 100%;
      }

      .user__info {
        width: 100%;

        .parameter {
          flex: 1 1 33.333%;
          text-align: center;
        }
      }

      .user__name {
        text-align: right;
      }

      .buttons-wrapper {
        width: 100%;
        flex-direction: row;

        button {
          flex: 1 1 50%;
        }
      }
    }
  }

  .List {
    background-color: ${(props) => props.theme.colors.elemsBgc};
    border-radius: 20px;
    padding: calc(1vw + 11px);

    &__title {
      margin-bottom: 20px;

      display: flex;
      align-items: center;
      justify-content: space-between;
    }
  }

  .UserElem {
    cursor: pointer;
    position: relative;
    list-style: none;

    display: flex;
    align-items: center;
    gap: 15px;

    padding: 15px;
    border-radius: 15px;

    transition: 200ms;

    &:hover {
      background-color: ${(props) => props.theme.colors.lightGray};
    }

    &:active {
      transition: 100ms;
      background-color: ${(props) => props.theme.colors.primeColor};
      p {
        color: white;
      }

      .Badge {
        background-color: white;
        color: ${(props) => props.theme.colors.textColor};
      }
    }

    &:not(:last-child) {
      margin-bottom: 15px;

      &::after {
        content: "";
        height: 1px;
        width: 80%;
        background-color: ${(props) => props.theme.colors.lightGray};

        position: absolute;
        bottom: -8px;
        left: 50%;
        transform: translateX(-50%);
      }
    }

    img {
      flex: 0 0 60px;
      height: 60px;
      width: 60px;
      border-radius: 50%;
      object-fit: cover;
    }

    .user__description {
      flex: 1 1 auto;

      .main__text {
        margin-bottom: 5px;
        display: inline-block;
      }
    }

    .secondary__text {
      &._online {
        color: ${(props) => props.theme.colors.green};
      }
    }
  }

  .WhatsNew {
    box-shadow: 0 0 10px ${(props) => props.theme.colors.lightGray};
    background-color: ${(props) => props.theme.colors.elemsBgc};
    border-radius: 20px;
    padding: 20px;
    display: flex;
    align-items: center;
    gap: 10px;

    img {
      flex: 0 0 40px;
      border-radius: 50%;
      height: 40px;
      object-fit: cover;
    }

    input {
      flex: 1 1 auto;
      background: transparent;
    }

    .icons-wrapper {
      flex: 0 1 20%;
      display: flex;
      justify-content: flex-end;
      align-items: center;
      gap: 20px;

      .icon {
        cursor: pointer;
        flex: 0 0 24px;
        width: 24px;
        border: 1px solid transparent;
        border-radius: 10px;
        fill: ${(props) => props.theme.colors.primeColor};
        padding: 10px;
        box-sizing: content-box;

        transition: 200ms;

        &:hover {
          border-color: ${(props) => props.theme.colors.lightGray};
          background-color: ${(props) => props.theme.colors.bgc};
        }

        &:active {
          transition: 100ms;
          background-color: ${(props) => props.theme.colors.primeColor};
          fill: white;
        }
      }
    }
  }

  @media (max-width: 730px) {
    .WhatsNew {
      padding: 10px 15px;
    }
  }

  .UserPosts {
    box-shadow: 0 0 10px ${(props) => props.theme.colors.lightGray};
    padding: calc(1vw + 11px);
    background-color: ${(props) => props.theme.colors.elemsBgc};
    border-radius: 20px;
    position: relative;

    .icon {
      width: 20px;
      height: 20px;
      transition: 200ms;
      fill: ${(props) => props.theme.colors.primeColor};
    }

    &__controls {
      display: flex;
      margin-bottom: 20px;

      .tabs {
        flex: 1 1 auto;

        display: flex;
        align-items: center;
        gap: 15px;

        .tab {
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 8px;
          border-radius: 10px;
          border: 1px solid transparent;

          transition: 200ms;

          &._active {
            border-color: ${(props) => props.theme.colors.lightGray};
            background-color: ${(props) => props.theme.colors.bgc};
          }

          &:hover {
            border-color: ${(props) => props.theme.colors.lightGray};
            background-color: ${(props) => props.theme.colors.bgc};
          }

          &:active {
            background-color: ${(props) => props.theme.colors.primeColor};
            color: white;
            transition: 100ms;

            .icon {
              fill: white;
            }
          }
        }
      }

      .upload-media {
        cursor: pointer;
        flex: 0 1 auto;

        display: flex;
        align-items: center;
        gap: 5px;

        padding: 8px;
        border: 1px solid transparent;
        border-radius: 10px;

        transition: 200ms;

        .icon {
          width: 15px;
          height: 15px;
          fill: ${(props) => props.theme.colors.primeColor};
        }

        &:hover {
          border-color: ${(props) => props.theme.colors.lightGray};
          background-color: ${(props) => props.theme.colors.bgc};
        }

        &:active {
          transition: 100ms;
          background-color: ${(props) => props.theme.colors.primeColor};
          color: white;

          .icon {
            fill: white;
          }
        }
      }
    }

    .media-container {
      margin-bottom: 20px;
    }

    .show-all {
      cursor: pointer;
      display: flex;
      align-items: center;
      gap: 10px;
      padding: 8px;
      border-radius: 10px;
      border: 1px solid transparent;
      transition: 200ms;

      margin: 0 0 0 auto;
      width: fit-content;

      .icon {
        width: 15px;
        height: 15px;
        fill: ${(props) => props.theme.colors.primeColor};
        rotate: -90deg;
      }

      &:hover {
        border-color: ${(props) => props.theme.colors.lightGray};
        background-color: ${(props) => props.theme.colors.bgc};
      }

      &:active {
        transition: 100ms;
        background-color: ${(props) => props.theme.colors.primeColor};
        color: white;

        .icon {
          fill: white;
        }
      }
    }
  }

  .Post {
    box-shadow: 0 0 10px ${(props) => props.theme.colors.lightGray};
    padding: calc(1vw + 11px);
    background-color: ${(props) => props.theme.colors.elemsBgc};
    border-radius: 20px;
    position: relative;

    &._liked {
      .icon-wrapper {
        .icon-like {
          fill: ${(props) => props.theme.colors.red};
          stroke: 0;
          stroke-width: 0;
        }

        .likes-count {
          color: ${(props) => props.theme.colors.red};
        }
      }
    }

    &._marked {
      .icon-wrapper {
        .icon-mark {
          fill: ${(props) => props.theme.colors.primeColor};
          stroke: 0;
          stroke-width: 0;
        }
      }
    }

    .UserElem {
      cursor: default;
      padding: 0;
      margin-bottom: 30px;

      &:hover {
        background-color: initial;
        scale: 1;
      }

      &::after {
        display: none; //? нижняя полоса в списке
      }

      img {
        flex: 0 0 60px;
        height: 60px;
        border-radius: 50%;
        object-fit: cover;
      }
    }

    &__text {
      margin-bottom: 20px;
    }

    .media-container {
      margin-bottom: 30px;
    }
  }

  .icon-more {
    cursor: pointer;
    position: absolute;
    top: calc(1vw + 11px);
    right: calc(1vw + 11px);
    width: 25px;
    padding: 15px;
    box-sizing: content-box;
    border-radius: 15px;

    fill: ${(props) => props.theme.colors.darkGray};
    transition: 200ms;

    &:hover {
      background-color: ${(props) => props.theme.colors.lightGray};
    }

    &:active {
      transition: 100ms;
      background-color: ${(props) => props.theme.colors.primeColor};
      fill: white;
    }
  }

  .media-container {
    display: grid;
    gap: 5px;

    grid-template-columns: repeat(auto-fit, minmax(220px, auto));
    grid-template-rows: minmax(300px, 400px);
    grid-auto-rows: minmax(300px, 400px);

    border-radius: 20px;
    overflow: hidden;

    .media__item {
      object-fit: cover;
      width: 100%;
      height: 100%;
      border-radius: 5px;
    }
  }

  @media (max-width: 1480px) {
    .media-container {
      grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
      grid-template-rows: minmax(100px, 200px);
      grid-auto-rows: minmax(100px, 200px);
    }
  }

  .Repost__wrapper {
    border-left: 1px solid ${(props) => props.theme.colors.lightGray};
    padding-left: 30px;
    margin-left: 30px;
  }

  .PostControls {
    display: grid;
    grid-template-columns: repeat(3, auto) 2fr;

    justify-content: center;
    align-items: center;

    gap: 15px;

    .icon-wrapper {
      cursor: pointer;
      padding: 10px;
      background-color: ${(props) => props.theme.colors.bgc};
      border-radius: 15px;

      display: flex;
      justify-content: center;
      align-items: center;
      gap: 10px;

      -webkit-touch-callout: none;
      -webkit-user-select: none;
      -khtml-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none;

      &:hover {
        background-color: ${(props) => props.theme.colors.lightGray};
      }

      .count {
        color: ${(props) => props.theme.colors.darkGray};
        font-weight: 400;
      }

      .icon {
        height: 25px;
        overflow: visible;
        fill: transparent;
        transition: 200ms;
      }

      .icon-like {
        stroke: ${(props) => props.theme.colors.darkGray};
        stroke-width: 2px;
      }

      .icon-mark {
        stroke: ${(props) => props.theme.colors.darkGray};
        stroke-width: 2px;
      }

      &.mark {
        justify-self: self-end;
      }
    }
  }

  .bio {
    box-shadow: 0 0 10px ${(props) => props.theme.colors.lightGray};
    padding: calc(1vw + 11px);
    background-color: ${(props) => props.theme.colors.elemsBgc};
    border-radius: 20px;

    &__data {
      padding-bottom: 30px;
      border-bottom: 1px solid ${(props) => props.theme.colors.lightGray};
      margin-bottom: 30px;

      .icon {
        width: 24px;
        height: 24px;
      }

      .data__item {
        display: flex;
        align-items: center;
        gap: 8px;

        &:not(:last-child) {
          margin-bottom: 30px;
        }
      }
    }

    &__info {
      margin-bottom: 40px;

      p:not(:last-child) {
        font-size: inherit;
        margin-bottom: 15px;
      }
    }

    &__buttons {
      display: flex;
      flex-direction: column;
      gap: 15px;
    }
  }

  .FriendsBlock {
    background-color: ${(props) => props.theme.colors.elemsBgc};
    padding: calc(1vw + 11px);
    border-radius: 20px;

    .Friends__title {
      margin-bottom: 20px;

      display: flex;
      align-items: center;
      justify-content: space-between;

      span {
        color: ${(props) => props.theme.colors.primeColor};
        font-weight: 400;
      }
    }

    .Friends__wrapper {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-template-rows: auto;
      grid-auto-rows: auto;
      gap: 20px;

      .friend {
        img {
          display: block;
          margin: 0 auto 10px;
          width: 60px;
          height: 60px;
          object-fit: cover;
          border-radius: 50%;
        }

        span {
          display: block;
          text-align: center;
          font-size: 14px;
        }
      }
    }
  }

  .MusicBlock {
    box-shadow: 0 0 10px ${(props) => props.theme.colors.lightGray};
    background-color: ${(props) => props.theme.colors.elemsBgc};
    padding: calc(1vw + 11px);
    border-radius: 20px;

    &__title {
      margin-bottom: 20px;

      display: flex;
      align-items: center;
      justify-content: space-between;

      span {
        color: ${(props) => props.theme.colors.primeColor};
        font-weight: 400;
      }
    }

    .MusicElem {
      cursor: pointer;
      position: relative;
      list-style: none;

      display: flex;
      align-items: center;
      gap: 15px;

      padding: 15px;
      border-radius: 15px;

      transition: 200ms;

      &:hover {
        background-color: ${(props) => props.theme.colors.lightGray};
      }

      img {
        flex: 0 0 70px;
        height: 70px;
        width: 70px;
        border-radius: 5px;
        object-fit: cover;
      }

      .music__description {
        flex: 1 1 auto;

        .main__text {
          margin-bottom: 5px;
          display: inline-block;
        }
      }

      .plus-button {
        flex: 0 0 24px;
        height: 24px;

        border: 2px solid ${(props) => props.theme.colors.primeColor};
        border-radius: 50%;

        position: relative;

        &::before {
          content: "";
          border-radius: 5px;
          height: 2px;
          width: 70%;
          background-color: ${(props) => props.theme.colors.primeColor};
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          transition: 200ms;
        }

        &::after {
          content: "";
          border-radius: 5px;
          width: 2px;
          height: 70%;
          background-color: ${(props) => props.theme.colors.primeColor};
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          transition: 200ms;
        }

        &._active {
          &::after {
            transform: translate(-50%, -50%) rotate(90deg);
          }
        }
      }
    }
  }

  .CommentBlock {
    cursor: pointer;
    position: relative;
    list-style: none;

    display: flex;
    gap: 15px;

    margin-top: 20px;
    padding: 15px;
    border-radius: 15px;

    transition: 200ms;

    &:hover {
      background-color: ${(props) => props.theme.colors.lightGray};
    }

    &::before {
      content: "";
      height: 1px;
      width: 100%;
      background-color: ${(props) => props.theme.colors.lightGray};

      position: absolute;
      top: -8px;
      left: 50%;
      transform: translateX(-50%);
    }

    img {
      flex: 0 0 60px;
      height: 60px;
      width: 60px;
      border-radius: 50%;
      object-fit: cover;
    }

    .comment__description {
      flex: 1 1 auto;

      .comment__owner {
        margin-bottom: 10px;
        display: inline-block;
      }

      .comment__text {
        font-size: calc(0.4vw + 8px); //? 14 - 1440 | 16 - 1920
        font-weight: 300;
        margin-bottom: 10px;
      }

      .reply {
        color: ${(props) => props.theme.colors.primeColor};
        font-size: calc(0.4vw + 8px); //? 14 - 1440 | 16 - 1920
      }
    }

    .date {
      position: absolute;
      top: 15px;
      right: 15px;
      color: ${(props) => props.theme.colors.gray};
      font-size: calc(0.4vw + 8px); //? 14 - 1440 | 16 - 1920
    }

    .icon-like {
      position: absolute;
      bottom: 15px;
      right: 15px;

      overflow: visible;
      width: 22px;

      fill: none;
      stroke: ${(props) => props.theme.colors.darkGray};
      stroke-width: 2px;

      transition: 200ms;

      &._active {
        fill: ${(props) => props.theme.colors.red};
        stroke: none;
      }

      &:hover {
        stroke: none;
        fill: ${(props) => props.theme.colors.primeColor};
      }
    }
  }
`;
