import React from 'react';
import { Route, Routes } from 'react-router';

const Routing = ({ routes }) => {
	return (
		<Routes>
			{routes.map((route) => {
				const {
					path,
					component: Component,
					children,
					title,
					type,
					customComponentProps,
					listType,
					...rest
				} = route;
				return (
					<Route
						{...rest}
						key={path}
						path={`${path}`}
						element={
							<Component
								type={type}
								listType={listType}
								path={path}
								{...customComponentProps}
							/>
						}
					/>
				);
			})}
		</Routes>
	);
};

export default Routing;
