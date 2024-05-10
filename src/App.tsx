import './App.css';
import { getId } from './lib';

function App() {
  async function handleClick() {
    let [tab] = await chrome.tabs.query({ active: true, lastFocusedWindow: true });

    try {
      const id: string = getId({ url: tab?.url });
      // create a new tab
      // chrome.tabs.create({ url: `https://yt-no-ads.vercel.app/play?id=${id}` });

      chrome.scripting.executeScript({
        target: { tabId: tab.id! },
        func: (id) => {
          window.location.href = `https://yt-no-ads.vercel.app/play?id=${id}`;
        },
        args: [id],
      });
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
