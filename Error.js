import React from 'react';
const Error = ({
	errorKey,
	errorMessage,
	id,
	index,
	bindKey,
	multiple,
	errors,
}) => {
	return (
		<p className='mt-2 mb-0 text-danger'>
			{errorMessage
				? errorMessage
				: errors?.fields?.[
						errorKey
							? errorKey +
							  (multiple
									? bindKey
										? `.${bindKey}.${index}.`
										: `.${index}.`
									: '.') +
							  id
							: id
				  ]}
		</p>
	);
};

export default Error;
