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
          // const video = document.getElementById('full-bleed-container')
          
          // const videoContainer = video!.parentNode;
          // video!.remove();

          // const newHeader = document.createElement('h1');
          // newHeader.textContent = 'ciao';
          // videoContainer!.insertBefore(newHeader, videoContainer!.firstChild);
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
