import React, { useEffect } from 'react';

import Input from './Input';
import BranchCode from './BranchCode';
const SectionItem = ({
	label,
	id,
	parentId,
	rule,
	body,
	type,
	parentIndex,
	setBody,
	errors,
	required,
	sectionIndex,
	edit,
	params,
	leadId
}) => {
	if (id === 'lead_state' || id === 'lead_city') return '';
	if (id === 'lead_zipcode') {
		return (
			<BranchCode
				label={label}
				sectionIndex={sectionIndex}
				required={required}
				parentIndex={parentIndex}
				type={type}
				id={id}
				rule={rule}
				body={body}
				label={label}
				parentId={parentId}
				setBody={setBody}
				params={params}
				errors={errors}
				edit={edit}
				leadId={leadId}
			/>
		);
	}
	return (
		<div className='col-md-4'>
			<div className='form-group'>
				<label>
					{label} {required == '1' && <tt>*</tt>}
				</label>
				<Input
					sectionIndex={sectionIndex}
					required={required}
					parentIndex={parentIndex}
					type={type}
					id={id}
					rule={rule}
					body={body}
					label={label}
					parentId={parentId}
					setBody={setBody}
					errors={errors}
					edit={edit}
					leadId={leadId}
				/>
			</div>
		</div>
	);
};

export default SectionItem;
