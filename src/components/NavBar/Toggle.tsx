import { DataInterface } from '../../assets/data';

interface ToogleProps {
  isToggleMenu: boolean;
  setIsToggleMenu: React.Dispatch<React.SetStateAction<boolean>>;
  data: DataInterface;
}

const Toggle = ({ isToggleMenu, setIsToggleMenu, data }: ToogleProps) => {
  return (
    <button onClick={() => setIsToggleMenu((prev) => !prev)}>
      {isToggleMenu ? (
        <img src={data.burgerMenuOpen} />
      ) : (
        <img src={data.burgerMenuClose} />
      )}
    </button>
  );
};

export default Toggle;
