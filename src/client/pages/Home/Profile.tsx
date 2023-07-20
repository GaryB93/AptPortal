import React, { useContext } from 'react';
import GlobalContext from '../../context/globalContext';
import ProfileCard from '../components/ProfileCard/ProfileCard';
import style from './Home.module.scss';

const Profile = () => {
  const [state, dispatch] = useContext(GlobalContext);

  return (
    <div className={style.feed}>
      <ProfileCard/>
    </div>
  )
};

export default Profile;