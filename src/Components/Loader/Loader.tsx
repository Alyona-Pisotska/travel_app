import './loader.css';

const Loader = () => (
  <p className="loader__wrapper" data-test-id="loader">
    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <circle cx="50" cy="50" r="45" />
    </svg>
  </p>
);

export default Loader;
