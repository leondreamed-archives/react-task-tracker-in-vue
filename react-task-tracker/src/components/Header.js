import Button from "./Button";
import { useLocation } from "react-router-dom";

//impt
import PropTypes from "prop-types";

// rafce
const Header = (props) => {
	const onClick = () => {
		props.onAdd();
	};

	const location = useLocation();

	return (
		<header className="header">
			{/* <p style={headingStyle}></p> */}
			<h1>{props.title}</h1>
			{location.pathname === "/" && (
				<Button
					color={props.showAdd ? "red" : "green"}
					text={props.showAdd ? "Close" : "Add"}
					onClick={onClick}
				/>
			)}
		</header>
	);
};

Header.defaultProps = {
	title: "Task Tracker",
};

Header.propTypes = {
	title: PropTypes.string.isRequired,
};

// const headingStyle = { color: "red", backgroundColor: "blue" };

export default Header;
