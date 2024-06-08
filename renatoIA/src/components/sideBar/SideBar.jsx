import './sideBar.css'
import { useState } from "react";
import { NewProjectButton } from './components/createNewProject/NewProjectButton';

export const SideBar = () => {
    const [expandSideBar, setExpandSideBar] = useState(false);

    const handleSideBar = () => {
        setExpandSideBar(!expandSideBar)
        console.log(expandSideBar);
    }

    return (
        <aside className='sideBar'>
            <button onClick={handleSideBar}>
                <img src="../../../public/sideBar/menu.png" alt="" />
            </button>
            <NewProjectButton isExpanded={expandSideBar}/>
        </aside>
    )
}
