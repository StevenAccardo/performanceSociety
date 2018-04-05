//A utility function that allows the history stack to be accessed outside of compoenents, similar to how browserHistory did in V3 of react-router
import createBrowserHistory from 'history/createBrowserHistory';

export default createBrowserHistory({
  /* pass a configuration object here if needed */
});
