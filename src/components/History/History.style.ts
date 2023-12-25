import styled from "styled-components";

export const StyledHistory = styled.div`
  position: relative;
  overflow: visible;
  margin-bottom: 20px;

  .History__wrapper {
    display: flex;
    gap: 6px;
    overflow: hidden;
  }

  .icon-slider-button {
    cursor: pointer;
    position: absolute;
    top: 50%;
    right: -20px;
    transform: translateY(-50%);
    z-index: 2;

    width: 40px;
    height: 40px;
    transition: 200ms;

    &:hover {
      scale: 1.1;
      filter: drop-shadow(0 0 10px ${(props) => props.theme.colors.primeColor});
    }

    &:active {
      transition: 100ms;
      scale: 0.9;
      filter: none;
    }
  }

  .History__item {
    flex: 0 0 145px;
    cursor: pointer;
    height: calc(6.3vw + 110px); //? 200 - 1440 | 230 - 1920
    border-radius: 20px;
    overflow: hidden;

    position: relative;

    transition: 200ms;

    .History__owner {
      transition: 400ms cubic-bezier(0.18, 0.89, 0.32, 1.28);
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    span {
      display: block;
      width: min-content;
      color: ${(props) => props.theme.colors.elemsBgc};
      transition: 200ms;
      font-size: 14px;
    }

    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.5);
      transition: 200ms;
    }

    &:hover {
      .History__owner {
        transform: translateY(200%);
      }

      &::before {
        background-color: ${(props) => props.theme.colors.primeColor};
        opacity: 0.7;
      }
    }
  }

  @media (max-width: 1480px) {
    .History__item {
      flex: 0 0 110px;
    }
  }

  .History__owner {
    position: absolute;
    bottom: 20px;
    left: 20px;

    .owner__img {
      display: block;
      height: 40px;
      width: 40px;
      object-fit: cover;
      border: 2px solid ${(props) => props.theme.colors.blue};
      border-radius: 50%;

      margin-bottom: 10px;
    }
  }

  .add-history {
    .icon-wrapper {
      position: absolute;
      top: 47%;
      left: 50%;
      transform: translate(-50%, 0);
      z-index: 1;
      text-align: center;
      transition: 200ms;

      .icon-plus {
        fill: ${(props) => props.theme.colors.primeColor};
        width: 14px;
        margin-bottom: 20px;
        transition: 200ms;
      }
    }

    &::after {
      content: "";
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      border-radius: 50%;
      width: 40px;
      height: 40px;
      background-color: ${(props) => props.theme.colors.bgc};

      transition: 200ms;
    }

    &:hover {
      .icon-plus {
        fill: white;
        rotate: 180deg;
        scale: 1.2;
      }

      &::after {
        border-radius: 0;
        width: 100%;
        height: 100%;
        background-color: ${(props) => props.theme.colors.primeColor};
        opacity: 0.7;
      }

      &::before {
        background-color: transparent;
      }
    }
  }
`;
