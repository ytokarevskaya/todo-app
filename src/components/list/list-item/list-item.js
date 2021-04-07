import {useState} from 'react'
import css from './list-item.module.css'

function ListItem(props) {
	const {text} = props
	const [checked, setChecked] = useState(props.checked)

	const handleCheckboxChange = () => {
		setChecked(!checked)
	}

	return (
		<li className={css.listItem}>
			<input type='checkbox' checked={checked} onChange={handleCheckboxChange} />
			{checked? <del>{text}</del> : text}
		</li>
	)
}

export default ListItem