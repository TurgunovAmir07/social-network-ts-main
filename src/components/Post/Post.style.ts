import styled, { css } from "styled-components";

interface IStyledPostProps {
  $isLiked?: boolean;
  $isMarked?: boolean;
}

export const StyledPost = styled.div<IStyledPostProps>`
  box-shadow: 0 0 10px ${(props) => props.theme.colors.lightGray};
  padding: calc(1vw + 11px);
  background-color: ${(props) => props.theme.colors.elemsBgc};
  border-radius: 20px;
  margin-bottom: 20px;
  position: relative;

  ${(props) =>
    props.$isLiked &&
    css`
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
    `}

  ${(props) =>
    props.$isMarked &&
    css`
      .icon-wrapper {
        .icon-mark {
          fill: ${(props) => props.theme.colors.primeColor};
          stroke: 0;
          stroke-width: 0;
        }
      }
    `}

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
`;

export const PostSettingsBox = styled.div`
  position: absolute;
  top: -8px;
  right: -8px;
  border-radius: 8px;
  background: #fefefe;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1); /* Более мягкая тень */
  display: flex;
  flex-flow: column;
  padding: 16px; /* Увеличил отступы для более просторного вида */

  span {
    cursor: pointer;
    margin-bottom: 8px; /* Добавил отступ снизу между элементами */
    &:last-child {
      margin-bottom: 0; /* Убрал отступ после последнего элемента */
    }

    &:hover {
      color: #526ed3; /* Цвет при наведении */
    }
  }
`;