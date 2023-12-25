import styled from "styled-components";

export const StyledRegistrationInfo = styled.div`
  margin-top: 30px;
  padding-top: 20px;
  border-top: 1px solid ${(props) => props.theme.colors.lightGray};

  span {
    display: inline-block;
    font-size: 16px;
    margin-bottom: 40px;

    a {
      display: inline;
      color: var(--prime-color);
    }
  }

  p {
    margin-bottom: 30px;
  }

  .icons-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 30px;

    .reg__link {
      flex: 0 0 58px;
      transition: 200ms;

      &:hover {
        scale: 1.1;
      }

      &:active {
        scale: 0.9;
        transition: 100ms;
      }

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }

    .icon {
      border: 1px solid red;
      width: 100%;
      height: 100%;
    }
  }
`;
