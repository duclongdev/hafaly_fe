
import Sidebar from '../../Sidebar/Sidebar';
function DefaultLayoutPrivate({ children }) {
    return (
        <div className='private_layout'>
            <Sidebar />
            <div className='child_container'>
                
                {children}
            </div>
        </div>

    );
}

export default DefaultLayoutPrivate;