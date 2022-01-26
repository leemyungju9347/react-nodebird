import React, { useCallback } from 'react';
import { Card, Avatar, Button } from 'antd';
import PropTypes from 'prop-types';

const UserProfile = ({ setIsLoggedIn }) => {
  const onLogout = useCallback(() => {
    setIsLoggedIn(false);
  }, []);

  return (
    <Card actions={
    [
      <div key="twit">mj<br />0</div>,
      <div key="followings">팔로잉<br />0</div>,
      <div key="follower">팔로워<br />0</div>,
    ]
  }
    >
      <Card.Meta
        avatar={<Avatar>MJ</Avatar>}
        title="MJ"
      />
      <Button onClick={onLogout}>로그아웃</Button>
    </Card>
  );
};

UserProfile.propTypes = {
  setIsLoggedIn: PropTypes.func.isRequired,
};

export default UserProfile;
