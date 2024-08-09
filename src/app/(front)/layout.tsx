import React from 'react';

const FrontLayout = ({children}:{children: React.ReactNode}) => {
  return(
    <> 
      <header>Header component</header>
      <div>
        {children}
      </div>
      <footer>Footer component</footer>
    </>
  )
}

export default FrontLayout;