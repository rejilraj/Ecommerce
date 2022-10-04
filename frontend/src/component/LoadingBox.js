import { Spinner } from 'react-bootstrap';

function LoadingBox() {
  return (
    <Spinner
      animation="border"
      role="status"
      style={{
        color: '#fc53ab',
        position: 'fixed',
        top: '50%',
        left: '50%',
      }}
    >
      <span className="visually-hidden">Loading...</span>
    </Spinner>
  );
}

export default LoadingBox;
