import React from 'react';
import { User } from '../../api/type/type';

type Props = {
  user?: User;
};

export const UserInfo: React.FC<Props> = ({ user }) => {
  if (!user) {
    return null;
  }

  const { name, email } = user;

  return (
    <a className="UserInfo" href={`mailto:${email}`} data-cy="user-info">
      {name}
    </a>
  );
};
