import { styled } from "styled-components";

export const StyledNavbar = styled.nav`
  box-shadow: 0 0 10px ${(props) => props.theme.colors.lightGray};
  border-radius: 20px;
  padding: calc(1vw + 11px);
  background-color: ${(props) => props.theme.colors.elemsBgc};
  color: ${(props) => props.theme.colors.textColor};
  margin-bottom: 20px;

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

  @media (max-width: 1100px) {
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
`;
