import React from 'react';

type HeaderProps = {
    children: React.ReactNode
}
const MainHeader: React.FunctionComponent<HeaderProps> = props => {
  return <header>{props.children}</header>;
};

export default MainHeader;
