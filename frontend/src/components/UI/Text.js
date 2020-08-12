import React from 'react';
import '../../styles/TextStyles.css';
export default function Text({ variant, children }) {
	return <div className={variant}>{children}</div>;
}
