import React, {useState, useRef} from 'react'
import nextId from 'react-id-generator'
import css from './add-list-form.module.css'

function AddListForm(props) {
	const {hidden, addCard} = props
	const [formValid, setFormValid] = useState(true)
	const titleInput = useRef(null)
	const itemsInput = useRef(null)

	const handleAddItems = () => {
		if (isFormValidated()) {
			const items = itemsInput.current.value.split(',').map(item => {
				return {
					id: nextId(),
					content: item.trim(),
					completed: false,
				}
			})
			const data = {
				title: titleInput.current.value,
				items,
			}
			addCard(data)
		}
	}

	const isFormValidated = () => {
		if (titleInput.current.value !== '' && itemsInput.current.value !== '') {
			setFormValid(true)
			return true
		} else {
			setFormValid(false)
			return false
		}
	}

	return (
		!hidden && (
			<div className={css.form}>
				<label htmlFor="listTitle" className={css.label}>Title</label>
				<input id="listTitle" type="text" ref={titleInput} />
				<label htmlFor="listItems" className={css.label}>Enter the list items separated by comma</label>
				<textarea ref={itemsInput} id="listItems"></textarea>
				<button onClick={handleAddItems} className={css.button}>Add</button>
				{!formValid && <p className={css.error}>List must have a title and at least one item</p>}
			</div>
		)
	)
}

export default AddListForm