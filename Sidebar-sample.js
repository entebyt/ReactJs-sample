import React from 'react';
import SidebarItem from './SidebarItem';
import { Context } from '../../config/store';
import admin from './admin';
import affiliate from './affiliate';
// import dsa from './dsa';
const Sidebar = () => {
	const { state } = React.useContext(Context);
	const [open, setOpenState] = React.useState(false);
	const items = {
		admin,
		affiliate,
		lender: affiliate,
		// dsa
	};
	const checkHasPermission = (sidebarMenu) => {
		// if (state.is_super_admin === 1) return sidebarMenu;
		const permission = (state.permission || []).find(
			(permission) => permission === sidebarMenu.permission
		);

		if (permission) return sidebarMenu;
		else return false;
	};
	return (
		<nav className='sidebar'>
			<ul className='nav flex-column' id='nav_accordion'>
				<label
					htmlFor='handler'
					className='handler'
					onClick={() => setOpenState(!open)}
				>
					{open ? (
						<i className='fa fa-chevron-right'></i>
					) : (
						<i className='fa fa-chevron-left'></i>
					)}
				</label>
				{items[state.userType]
					.filter((sidebarMenu) =>
						sidebarMenu.permission
							? checkHasPermission(sidebarMenu)
							: sidebarMenu
					)
					.map((sidebarItem, index) => (
						<SidebarItem {...sidebarItem} key={sidebarItem.id} />
					))}
			</ul>
		</nav>
	);
};

export default Sidebar;
