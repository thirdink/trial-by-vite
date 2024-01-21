function HomeSVG({ className, fill }: { className: string; fill: string }) {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width='22'
			height='22'
			viewBox='0 0 22 22'
			fill='none'
			className={className}
		>
			<path
				d='M9.06978 1.82L2.13978 7.37C1.35978 7.99 0.859777 9.3 1.02978 10.28L2.35978 18.24C2.59978 19.66 3.95978 20.81 5.39978 20.81H16.5998C18.0298 20.81 19.3998 19.65 19.6398 18.24L20.9698 10.28C21.1298 9.3 20.6298 7.99 19.8598 7.37L12.9298 1.83C11.8598 0.970002 10.1298 0.970002 9.06978 1.82Z'
				stroke='#7D7F88'
				strokeWidth='1.5'
				strokeLinecap='round'
				strokeLinejoin='round'
				fill={fill}
			/>
		</svg>
	);
}

function ExploreSVG({ className, fill }: { className: string; fill: string }) {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width='24'
			height='24'
			viewBox='0 0 24 24'
			fill='none'
			className={className}
			aria-labelledby='svgTitle'
		>
			<path
				d='M18.3398 14.13L16.1598 12.38C15.8498 12.14 15.4598 12 15.0598 12H12.7498V9H17.2198C18.1898 9 18.9698 8.22 18.9698 7.25V3.75C18.9698 2.78 18.1898 2 17.2198 2H8.95984C8.56984 2 8.17984 2.14 7.86984 2.38L5.67984 4.13C4.80984 4.83 4.80984 6.17 5.67984 6.87L7.86984 8.62C8.17984 8.86 8.56984 9 8.95984 9H11.2498V12H6.79984C5.82984 12 5.04984 12.78 5.04984 13.75V17.25C5.04984 18.22 5.82984 19 6.79984 19H11.2498V21.25H8.99984C8.58984 21.25 8.24984 21.59 8.24984 22C8.24984 22.41 8.58984 22.75 8.99984 22.75H14.9998C15.4098 22.75 15.7498 22.41 15.7498 22C15.7498 21.59 15.4098 21.25 14.9998 21.25H12.7498V19H15.0598C15.4598 19 15.8498 18.86 16.1598 18.62L18.3398 16.87C19.2198 16.17 19.2198 14.83 18.3398 14.13Z'
				fill={fill}
			/>
			<path
				d='M17.72 9.75H9.46002C8.90002 9.75 8.34002 9.56001 7.90002 9.20001L5.71002 7.45001C5.11002 6.97001 4.77002 6.26 4.77002 5.5C4.77002 4.74 5.11002 4.01999 5.71002 3.54999L7.90002 1.79999C8.34002 1.44999 8.90002 1.25 9.46002 1.25H17.72C19.1 1.25 20.22 2.37 20.22 3.75V7.25C20.22 8.63 19.1 9.75 17.72 9.75ZM9.46002 2.75C9.23002 2.75 9.01003 2.83 8.84003 2.97L6.65002 4.72C6.41002 4.91 6.27002 5.2 6.27002 5.5C6.27002 5.8 6.41002 6.09 6.65002 6.28L8.84003 8.03C9.02003 8.17 9.24002 8.25 9.46002 8.25H17.72C18.27 8.25 18.72 7.8 18.72 7.25V3.75C18.72 3.2 18.27 2.75 17.72 2.75H9.46002Z'
				fill='#7D8588'
			/>
			<path
				d='M15.5598 19.75H7.2998C5.9198 19.75 4.7998 18.63 4.7998 17.25V13.75C4.7998 12.37 5.9198 11.25 7.2998 11.25H15.5598C16.1298 11.25 16.6798 11.44 17.1198 11.8L19.3098 13.55C19.9098 14.03 20.2498 14.74 20.2498 15.5C20.2498 16.26 19.9098 16.98 19.3098 17.45L17.1198 19.2C16.6798 19.56 16.1298 19.75 15.5598 19.75ZM7.2998 12.75C6.7498 12.75 6.2998 13.2 6.2998 13.75V17.25C6.2998 17.8 6.7498 18.25 7.2998 18.25H15.5598C15.7898 18.25 16.0098 18.17 16.1798 18.03L18.3698 16.28C18.6098 16.09 18.7498 15.8 18.7498 15.5C18.7498 15.2 18.6098 14.91 18.3698 14.72L16.1798 12.97C15.9998 12.83 15.7798 12.75 15.5598 12.75H7.2998Z'
				fill='#7D8588'
			/>
			<path
				d='M12.5 12.75C12.09 12.75 11.75 12.41 11.75 12V9C11.75 8.59 12.09 8.25 12.5 8.25C12.91 8.25 13.25 8.59 13.25 9V12C13.25 12.41 12.91 12.75 12.5 12.75Z'
				fill='#7D8588'
			/>
			<path
				d='M12.5 22.75C12.09 22.75 11.75 22.41 11.75 22V19C11.75 18.59 12.09 18.25 12.5 18.25C12.91 18.25 13.25 18.59 13.25 19V22C13.25 22.41 12.91 22.75 12.5 22.75Z'
				fill='#7D8588'
			/>
			<path
				d='M15.5 22.75H9.5C9.09 22.75 8.75 22.41 8.75 22C8.75 21.59 9.09 21.25 9.5 21.25H15.5C15.91 21.25 16.25 21.59 16.25 22C16.25 22.41 15.91 22.75 15.5 22.75Z'
				fill='#7D8588'
			/>
		</svg>
	);
}

function ChatSVG({ className, fill }: { className: string; fill: string }) {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width='25'
			height='24'
			viewBox='0 0 25 24'
			fill='none'
			className={className}
		>
			<path
				d='M9 19H8.5C4.5 19 2.5 18 2.5 13V8C2.5 4 4.5 2 8.5 2H16.5C20.5 2 22.5 4 22.5 8V13C22.5 17 20.5 19 16.5 19H16C15.69 19 15.39 19.15 15.2 19.4L13.7 21.4C13.04 22.28 11.96 22.28 11.3 21.4L9.8 19.4C9.64 19.18 9.27 19 9 19Z'
				stroke='#7D7F88'
				strokeWidth='1.5'
				strokeMiterlimit='10'
				strokeLinecap='round'
				strokeLinejoin='round'
				fill={fill}
			/>
			<path
				d='M7.5 8H17.5'
				stroke='#7D7F88'
				strokeWidth='1.5'
				strokeLinecap='round'
				strokeLinejoin='round'
				fill={fill}
			/>
			<path
				d='M7.5 13H13.5'
				stroke='#7D7F88'
				strokeWidth='1.5'
				strokeLinecap='round'
				strokeLinejoin='round'
				fill={fill}
			/>
		</svg>
	);
}

function SavedSVG({ className, fill }: { className: string; fill: string }) {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width='25'
			height='24'
			viewBox='0 0 25 24'
			fill='none'
			className={className}
		>
			<path
				d='M13.12 20.81C12.78 20.93 12.22 20.93 11.88 20.81C8.98 19.82 2.5 15.69 2.5 8.69001C2.5 5.60001 4.99 3.10001 8.06 3.10001C9.88 3.10001 11.49 3.98001 12.5 5.34001C13.51 3.98001 15.13 3.10001 16.94 3.10001C20.01 3.10001 22.5 5.60001 22.5 8.69001C22.5 15.69 16.02 19.82 13.12 20.81Z'
				stroke='#7D7F88'
				strokeWidth='1.5'
				strokeLinecap='round'
				strokeLinejoin='round'
				fill={fill}
			/>
		</svg>
	);
}

function ProfileSVG({ className, fill }: { className: string; fill: string }) {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width='25'
			height='24'
			viewBox='0 0 25 24'
			fill='none'
			className={className}
		>
			<path
				d='M12.6601 10.87C12.5601 10.86 12.4401 10.86 12.3301 10.87C9.95006 10.79 8.06006 8.84 8.06006 6.44C8.06006 3.99 10.0401 2 12.5001 2C14.9501 2 16.9401 3.99 16.9401 6.44C16.9301 8.84 15.0401 10.79 12.6601 10.87Z'
				stroke='#7D7F88'
				strokeWidth='1.5'
				strokeLinecap='round'
				strokeLinejoin='round'
				fill={fill}
			/>
			<path
				d='M7.66021 14.56C5.24021 16.18 5.24021 18.82 7.66021 20.43C10.4102 22.27 14.9202 22.27 17.6702 20.43C20.0902 18.81 20.0902 16.17 17.6702 14.56C14.9302 12.73 10.4202 12.73 7.66021 14.56Z'
				stroke='#7D7F88'
				strokeWidth='1.5'
				strokeLinecap='round'
				strokeLinejoin='round'
				fill={fill}
			/>
		</svg>
	);
}

function PasswordSVG({ className, fill }: { className: string; fill: string }) {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width='22'
			height='22'
			viewBox='0 0 22 22'
			fill={fill}
			className={className}
		>
			<path
				d='M18.1409 3.86834C15.4276 1.16417 11.0276 1.16417 8.33259 3.86834C6.43509 5.7475 5.86676 8.45167 6.60009 10.835L2.29176 15.1433C1.98926 15.455 1.77843 16.0692 1.84259 16.5092L2.11759 18.5075C2.21843 19.1675 2.83259 19.7908 3.49259 19.8825L5.49093 20.1575C5.93093 20.2217 6.54509 20.02 6.85676 19.6992L7.60843 18.9475C7.79176 18.7733 7.79176 18.48 7.60843 18.2967L5.83009 16.5183C5.56426 16.2525 5.56426 15.8125 5.83009 15.5467C6.09593 15.2808 6.53593 15.2808 6.80176 15.5467L8.58926 17.3342C8.76343 17.5083 9.05676 17.5083 9.23093 17.3342L11.1743 15.4C13.5484 16.1425 16.2526 15.565 18.1409 13.6858C20.8451 10.9817 20.8451 6.5725 18.1409 3.86834ZM13.2918 11C12.0268 11 11.0001 9.97334 11.0001 8.70834C11.0001 7.44334 12.0268 6.41667 13.2918 6.41667C14.5568 6.41667 15.5834 7.44334 15.5834 8.70834C15.5834 9.97334 14.5568 11 13.2918 11Z'
				fill='#7D7F88'
			/>
		</svg>
	);
}

export { HomeSVG, ExploreSVG, ChatSVG, SavedSVG, ProfileSVG, PasswordSVG };
