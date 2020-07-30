import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Provider } from 'react-redux';
import store from './store';
import Index from './components/index';

const App = () => {
  return (
    <Provider store={store}>
      <Index />
    </Provider>
  );
};

export default App;

/*
  const [channel, setChannel] = useState([]);
  const [loading, setLoading] = useState(false);
  const [activePage, setActivePage] = useState(1);
  const [channelsPerPage] = useState(11);

  useEffect(() => {
    async function fetchChannel() {
      setLoading(true);
      var res = await axios.get(
        'https://newsapi.org/v2/sources?language=en&apiKey=0aa4c7ced39846ccb8f911b6bf35bb0a'
      );
      setChannel(res.data.sources);
      setLoading(false);
    }
    fetchChannel();
  }, []);

  function handlePageChange(pageNumber) {
    setActivePage(pageNumber);
  }

  const indexOfLastChannel = activePage * channelsPerPage;
  const indexOfFirstChannel = indexOfLastChannel - channelsPerPage;
  const currentChannel = channel.slice(indexOfFirstChannel, indexOfLastChannel);
  */
