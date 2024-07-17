import 'react';

const Section1 = () => {
  return (
    <div
      style={{
        height: '100vh',
        backgroundImage: 'url(../public/images/mipan.jpeg)', 
        backgroundSize: 'cover',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white',
      }}
    >
      <h1>
        <span style={{ fontSize: '2em' }}>Panaderia Mi Pan</span>
        <br />
        <span style={{ fontSize: '1em' }}>Bienvenidos</span>
      </h1>
    </div>
  );
};

export default Section1;