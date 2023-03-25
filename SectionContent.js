import React from 'react';
import SectionItem from './SectionItem';
const SectionContent = ({
	body,
	parentId,
	params,
	setBody,
	showAddMore = true,
	type,
	errors,
	edit,
	leadId
}) => {
	const addNewSection = e =>
		setBody(values => {
			return {
				...values,
				...body,
				[parentId]: [...body[parentId], {}]
			};
		});

	const removeSection = index => {
		const changes = body[parentId].filter((section, idx) => idx !== index);
		setBody(values => {
			return { ...values, ...body, [parentId]: changes };
		});
	};
	if (type === 'multiple')
		return (
			<>
				{(body[parentId] || []).map(({}, parentIndex) => (
					<>
						<div className='row mt-3'>
							{params.map(({ label, value, id, rule }, index) => (
								<SectionItem
									required={value}
									parentIndex={parentIndex}
									type={type}
									body={body}
									setBody={setBody}
									parentId={parentId}
									label={label}
									key={index}
									id={id}
									rule={rule}
									sectionIndex={index}
									params={params}
									errors={errors}
									edit={edit}
									leadId={leadId}
								/>
							))}

							{showAddMore && parentIndex >= 1 && (
								<div className='col-md-4'>
									<div className='form-group'>
										<i
											onClick={() => removeSection(parentIndex)}
											className='fa fa-minus-circle'
										></i>
									</div>
								</div>
							)}
						</div>
						{(body[parentId] || []).length - 1 !== parentIndex && (
							<hr className='m-0' />
						)}
					</>
				))}

				{showAddMore &&
					((leadId && edit) || !leadId) &&
					type === 'multiple' && (
						<i onClick={addNewSection} className='fa fa-plus-circle'></i>
					)}
			</>
		);

	return (
		<div className='row mt-3'>
			{params.map(({ label, value, id, rule }, index) => (
				<SectionItem
					required={value}
					body={body}
					setBody={setBody}
					parentId={parentId}
					label={label}
					key={index}
					id={id}
					rule={rule}
					params={params}
					errors={errors}
					edit={edit}
					leadId={leadId}
				/>
			))}
		</div>
	);
};

export default SectionContent;
