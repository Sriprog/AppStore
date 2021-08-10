import './index.css'

const AppItem = props => {
  const {appDetails} = props
  const {appName, imageUrl} = appDetails

  return (
    <li className="each-app">
      <img className="app-logo" src={imageUrl} alt={appName} />
      <p className="App-name">{appName}</p>
    </li>
  )
}

export default AppItem
