export const code = {
i:"npm i react-push-notification",
not:
`import addNotification from 'react-push-notification'
import vitelogo from '../public/vite.svg'

function App() {

  const buttonClick = () => {
    addNotification({
        title: 'Warning',
        subtitle: 'This is a subtitle',
        message: 'This is a very long message',
        theme: 'darkblue',
        native: true, // when using native, your OS will handle theming.
        duration:5000,
        icon: vitelogo,
        onClick: ()=>window.location = 'https://youtube.com'
    });
};

  return (
    <>
          <div className="page">
          <button onClick={buttonClick} className="button">
           Hello world.
          </button>
      </div>
    </>
  )
}

export default App`
}