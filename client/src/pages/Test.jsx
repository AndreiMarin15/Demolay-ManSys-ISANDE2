import React, { useState, useEffect } from "react";

function Example() {
	const [application, setApplication] = useState({});

	useEffect(() => {
		changeInformation(application);
	}, [application]);

	function changeInformation(application) {
		setApplicantInformation({
			...applicantInformationData,
			fullName: application.givenName + " " + application.lastName,
			age: calculateAge(application.birthdate),
			contact: application.mobile,
			firstLineSigner: application.firstLineSigner ? application.firstLineSigner : "N/A",
			otherDetails: application.notes ? application.notes : "N/A",
		});
	}

	return (
		<div>
			<button
				onClick={() =>
					changeInformation({
						/* your object parameter here */
					})
				}
			>
				Click me
			</button>
		</div>
	);
}
