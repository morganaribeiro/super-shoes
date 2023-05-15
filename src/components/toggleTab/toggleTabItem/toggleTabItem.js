import { useState } from 'react';
import ToggleTabPane from '../toggleTabPane/toggleTabPane';
import './toggleTabItem.css';

export default function ToggleTabItem({ tabs }) {
    const [activeTab, setActiveTab] = useState(tabs[0].id);

    const handleClick = (tabId) => {
        setActiveTab(tabId);
    };

    return (
        <div className="toggle-tab">
            <ul className="toggle-tab__list">
                {tabs.map((tab) => (
                    <li
                        key={tab.id}
                        className={`toggle-tab__item ${activeTab === tab.id ? 'toggle-tab__item--active' : ''
                            }`}
                        onClick={() => handleClick(tab.id)}
                    >
                        {tab.label}
                    </li>
                ))}
            </ul>
            <div className="toggle-tab__content">
                {tabs.map((tab) => (
                    activeTab === tab.id && (
                        <ToggleTabPane key={tab.id} content={tab.content} />
                    )
                ))}
            </div>
        </div>
    );
}
