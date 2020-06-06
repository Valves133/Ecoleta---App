import React from 'react';

//para criar a typagem de um objeto
interface HeaderProps {
  title: string;
}

const Header: React.FC<HeaderProps> = (props) =>{
  return(
    <header>
      <h1>{props.title}</h1>
    </header>
  );
}

export default Header;
