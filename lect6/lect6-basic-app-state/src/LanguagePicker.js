const LanguagePicker = ({ onSelectedLanguageChanged }) => {
	return (
		<div className="field">
			<label className="label">Select Language</label>
			<div className="control">
				<div className="select">
					<select
						onChange={(e) =>
							onSelectedLanguageChanged(e.target.value)
						}
					>
						<option value="en-US">English</option>
						<option value="de-DE">Deutsch</option>
						<option value="pl-PL">Polski</option>
					</select>
				</div>
			</div>
		</div>
	);
};

export default LanguagePicker;
