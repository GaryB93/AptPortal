import React, { useContext } from 'react';
import style from './ProfileCard.module.scss';
import GlobalContext from '../../../context/globalContext';

const ProfileCard = () => {
  const [state, dispatch] = useContext(GlobalContext);

  return (
    <div className={style.profileCard}>
      <div className={style.pic}>
        <div>

        </div>
        <span>{state.user.name}</span>
      </div>
      <label htmlFor='email'>Email</label>
      <input id='email' name='email' type='email' value={state.user.email} readOnly={true}/>
      <button className='warning-btn'>Delete Account</button>
    </div>
  )
};

export default ProfileCard;