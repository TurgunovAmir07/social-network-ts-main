import { StyledUserBlock } from "./UserBlock.style";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { useRegisterUserMutation } from "../../store/API/authApi";

export const UserBlock = () => {
  // const user = useTypedSelector((state) => state.userSlice.user)
  const [_, {data: user}] = useRegisterUserMutation()
  
  return (
    <StyledUserBlock>
      {/* <img src="./img/users/denis-frolov.jpeg" alt="Denis Frolov" />
      <div className="user__description">
        <h1 className="user__name">{user?.name}</h1>
        <div className="user__info">
          <div className="parameter">
            <span className="key">Друзья</span>
            <span className="value">130</span>
          </div>
          <div className="parameter">
            <span className="key">Подписчики</span>
            <span className="value">923</span>
          </div>
          <div className="parameter">
            <span className="key">Подписки</span>
            <span className="value">246</span>
          </div>
        </div>
      </div> */}
    </StyledUserBlock>
  );
};
