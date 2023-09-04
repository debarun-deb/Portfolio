import './Layout.scss';
import Sidebar from '../Sidebar/Sidebar';
import { Outlet } from 'react-router-dom';
import { loadFull } from "tsparticles";

const Layout = () => {
    async function load(main) {
            await loadFull(main);
    }
    return (
        <>
            <div className='app'>
                <Sidebar />
                <div className='page'>
                    <span className='tags top-tags'>
                    <span className='bottom-tag-html'>&lt;html&gt;</span>
                    <br />
                        &lt;body&gt;
                    </span>
                    <Outlet />
                    <span className='tags bottom-tags'>
                        &lt;/body&gt;
                        <br />
                        <span className='bottom-tag-html'>&lt;/html&gt;</span>
                    </span>
                </div>
            </div>
        </>
    )
}

export default Layout;