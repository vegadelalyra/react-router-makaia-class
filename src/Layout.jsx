import { Outlet } from 'react-router-dom'
import { Link } from 'react-router-dom'

const Layout = () => {
    return (
        <>
            <div><sup>Layout</sup> component is shared among layed out components!</div>
            <div><sup>Outlet</sup> component renders the one visited on the path</div>
            <div className='card'>
                <nav>
                    <ul>
                        <li>
                            <Link to={'/products'}>Products</Link>
                        </li>
                        <li>
                            <Link to={'/product/:id'}>Product</Link>
                        </li>
                        <li>
                            <Link to={'/users'}>Users</Link>
                        </li>
                        <li>
                            <Link to={'/user/1'}>User</Link>
                        </li>
                        <li>
                            <Link to={'/'}>Home, sweet Home</Link>
                        </li>
                    </ul>
                </nav>
            </div>
            <Outlet />
        </>
    )
}

export default Layout
