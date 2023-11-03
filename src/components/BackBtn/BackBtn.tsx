import { useNavigate } from 'react-router-dom';

import { useContext } from 'react';
import { UserContext } from '../../context/UserContext';

import classes from './BackBtn.module.css';

const BackBtn = () => {
  const navigate = useNavigate();

  const { setSearch } = useContext(UserContext);

  const handleBack = () => {
    setSearch(true);
    navigate(-1);
  };

  return (
    <>
      <button className={classes.back_btn} onClick={handleBack}>
        Voltar
      </button>
    </>
  );
};

export default BackBtn;
