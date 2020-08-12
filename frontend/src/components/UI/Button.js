import React from 'react';
import '../../styles/ButtonStyles.css';
export default function Button({ children, size, color }) {
	return <button className={`${size} ${color}`}>{children}</button>;
}
