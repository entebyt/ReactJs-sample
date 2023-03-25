import React from 'react';
import { objectsForEach } from '../../common/objectToArray';
import SectionContent from './SectionContent';
const Section = ({
	title,
	id: parentId,
	type,
	parameters,
	body,
	setBody,
	showAddMore,
	errors,
	edit,
	leadId
}) => {
	const params = parameters ? objectsForEach(parameters) : [];
	// const childSections

	React.useEffect(() => {
		if (type === 'multiple' && !edit)
			setBody(values => {
				return {
					...values,
					...body,
					[parentId]: values[parentId] || [{}]
				};
			});
	}, []);
	return (
		<>
			<div className='content'>
				<h5>{title}</h5>
				<SectionContent
					errors={errors}
					params={params}
					parentId={parentId}
					type={type}
					edit={edit}
					leadId={leadId}
					body={body}
					setBody={setBody}
					showAddMore={showAddMore}
				/>
			</div>
			<hr className='m-0' />
		</>
	);
};

export default Section;
