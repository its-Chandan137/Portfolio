import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

const Title = ({ level, children, className }) => {
  const Heading = `h${level}`;
  const classes = `font-[700] ${
    level === 1
      ? "text-[46px] font-[700] text-primary"
      : level === 2
      ? "text-[40px] font-[700] text-primary"
      : level === 3
      ? "text-[28px] font-[700] text-primary"
      : level === 4
      ? "text-[24px] font-[600] text-primary"
      : level === 5
      ? "text-[22px] font-[600] text-primary"
      : "text-[18px] font-[500] text-primary"
  }`;

  return <Heading className={`${className} ${classes}`}>{children}</Heading>;
};

const BodyOne = ({ children, className }) => {
  const classes = "text-lg font-normal text-primary-gray mb-4";
  return <p className={`${className} ${classes}`}>{children}</p>;
};

const BodyTwo = ({ children }) => {
  return <p className="text-base font-semibold text-white">{children}</p>;
};

const Caption = ({ children }) => {
  return <p className="text-sm font-normal text-primary-gray">{children}</p>;
};

const Span = ({ children }) => {
  return <span className="text-xs font-semibold text-white">{children}</span>;
};

const CustomNavLink = ({ href, className, children }) => {
  const linkStyles =
    "text-[15px] font-medium font-sans cursor-pointer list-none";

  return (
    <NavLink
      to={href}
      className={({ isActive }) =>
        isActive
          ? `${className} ${linkStyles} text-primary-darkBlue`
          : `${className} ${linkStyles} text-primary-gray`
      }
    >
      {children}
    </NavLink>
  );
};

const CustomNavLink2 = ({ href, className, children }) => {
  const linkStyles =
    "text-[15px] font-medium font-sans cursor-pointer list-none";

  return (
    <NavLink
      to={href}
      className={({ isActive }) =>
        isActive
          ? `${className} ${linkStyles} text-primary-darkBlue`
          : `${className} ${linkStyles} text-primary-gray`
      }
    >
      {children}
    </NavLink>
  );
};

// Note: You had a duplicate `customnavlink2` with lowercase name; assuming it’s a typo, I’ll omit it.

const CustomLink = ({ className, children }) => {
  const linkStyles =
    "text-[15px] font-medium text-gray-600 font-sans cursor-pointer list-none";

  return <NavLink className={`${className} ${linkStyles}`}>{children}</NavLink>;
};

const Badges = ({ children, color }) => {
  return (
    <div
      className={`w-[18px] h-[18px] ${color} rounded-full text-[12px] flex justify-center text-white`}
    >
      {children}
    </div>
  );
};

// PropTypes definitions
Title.propTypes = {
  level: PropTypes.oneOf([1, 2, 3, 4, 5, 6]).isRequired,
  children: PropTypes.node.isRequired, // Use PropTypes.node for content
  className: PropTypes.string, // Optional, so no .isRequired
};

BodyOne.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string, // Optional
};

BodyTwo.propTypes = {
  children: PropTypes.node.isRequired,
};

Caption.propTypes = {
  children: PropTypes.node.isRequired,
};

Span.propTypes = {
  children: PropTypes.node.isRequired,
};

CustomNavLink.propTypes = {
  href: PropTypes.string.isRequired, // `to` prop in NavLink expects a string
  className: PropTypes.string, // Optional
  children: PropTypes.node.isRequired,
};

CustomNavLink2.propTypes = {
  href: PropTypes.string.isRequired,
  className: PropTypes.string, // Optional
  children: PropTypes.node.isRequired,
};

CustomLink.propTypes = {
  className: PropTypes.string, // Optional
  children: PropTypes.node.isRequired,
  // Note: CustomLink is missing a `to` prop for NavLink; you might need to add it
};

Badges.propTypes = {
  children: PropTypes.node.isRequired,
  color: PropTypes.string.isRequired, // Assuming color is a CSS class or value
};

export {
  Title,
  BodyOne,
  BodyTwo,
  Caption,
  Span,
  Badges,
  CustomLink,
  CustomNavLink,
  CustomNavLink2,
};