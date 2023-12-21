import React from 'react';

const Apropos = () => {
    const div1Style = {
      position: 'absolute',
      top: '50px',
      left: '50px',
      width: '400px',
      height: '400px',
      backgroundColor: 'white',
      boxShadow:'1px 1px 1px 1px grey'
      // Autres styles CSS
    };
  
    const div2Style = {
      position: 'absolute',
      top: '300px',
      left: '50px',
      width: '350px',
      height: '80px',
      backgroundColor: 'blue',
      borderRadius:'0 40px 40px 0',
      textAlign: 'center',
      // Autres styles CSS
    };
    const containerStyle = {
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        padding: '20px',
        // Autres styles CSS pour votre conteneur
    };
    const imageStyle = {
        width: '400px',
        height: '400px',
        boxShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)',
        // Autres styles pour votre image
    };
    const titleStyle = {
        color:'white',
    };
   
  
    return (
      <div style={containerStyle}>
        {/* Div 1 en position absolue */}
        <div style={div1Style}>
        <img
          src="https://img.freepik.com/photos-gratuite/afro-americains-hommes-femmes-collegues-costume-parler-dans-bureau_1098-20615.jpg?w=740&t=st=1703158425~exp=1703159025~hmac=3a0aca66d9f5db1276ff4e3f16fe542b167d7577e37a045ec68478949eb7821e"
          alt="..."
          style={imageStyle}
        />
        </div>
        
        {/* Div 2 en position absolue */}
        <div style={div2Style}>
            <h2 style={titleStyle}>A propos de nous</h2>
        </div>
      </div>
      
    );
  };
export default Apropos;
