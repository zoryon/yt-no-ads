import './App.css';
import { getId } from './lib';

function App() {
  async function handleClick() {
    let [tab] = await chrome.tabs.query({ active: true, lastFocusedWindow: true });

    try {
      const id = getId({ url: tab?.url });
      chrome.tabs.create({ url: `https://yt-no-ads.vercel.app/play?id=${id}` });
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div>
      <button onClick={handleClick}>CLICK ME</button>
    </div>
  );
}

export default App;
