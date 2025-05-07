import PropTypes from 'prop-types';
import ReduxToastr from 'react-redux-toastr';
import 'react-redux-toastr/lib/css/react-redux-toastr.min.css';

const Toastr = () => (
  <ReduxToastr
    className="notification"
    timeOut={3000}
    position="top-right"
    transitionIn="fadeIn"
    transitionOut="fadeOut"
    progressBar={true}
    closeOnToastrClick={true}
    newestOnTop={true}
  />
);

Toastr.propTypes = {
  timeOut: PropTypes.number,
  position: PropTypes.string,
  transitionIn: PropTypes.string,
  transitionOut: PropTypes.string,
  isProgressBar: PropTypes.bool,
  isNewestOnTop: PropTypes.bool,
  isCloseOnToastrClick: PropTypes.bool,
};

export default Toastr;
