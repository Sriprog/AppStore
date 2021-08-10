import './index.css'

const TabItem = props => {
  const {tabDetails, activeTabId, isActive} = props
  const {tabId, displayText} = tabDetails

  const onClickTabItem = () => {
    activeTabId(tabId)
  }

  const activeTatBTnClassName = isActive ? 'active-tab-btn' : ''
  return (
    <li className="button_list">
      <button
        onClick={onClickTabItem}
        className={`btn ${activeTatBTnClassName}`}
        type="button"
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
