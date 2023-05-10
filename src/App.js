import React from 'react';
import Profilecard from './Profilecard';
import Scrolbar from './Scrolbar';
import styles from './App.module.css';

const App = () => {
return (
<div className={styles.container}>
<Scrolbar>
<Profilecard 
       name="John Doe"
       image="https://via.placeholder.com/150"
       description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
     />
     <Profilecard 
       name="Jane Doe"
       image="https://via.placeholder.com/150"
       description="Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
     />
<Profilecard 
       name="Jack Smith"
       image="https://via.placeholder.com/150"
       description="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
     />
</Scrolbar>
</div>
);
}

export default App;