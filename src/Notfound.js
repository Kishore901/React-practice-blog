import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div>
      <h2>Sorry looks like your at the wrong place</h2>
      <Link to="/">Go back home</Link>
    </div>
  );
};

export default NotFound;
