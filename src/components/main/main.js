import {useState} from 'react'
import List from '../list'
import EmptyState from '../empty-state'
import AddListForm from '../add-list-form'
import css from './main.module.css'

function Main(props) {
	const {loggedUser, todos} = props
	const initialState = {
		formHidden: true,
		todosList: todos,
	}
	const [state, setState] = useState(initialState)

	const handleAddListClick = () => {
		setState({...state, formHidden: !state.formHidden})
	}

	const addCard = (cardData) => {
		setState(state => {
			return {
				todosList: [...state.todosList, {
					...cardData,
					userId: loggedUser.id,
				}],
				formHidden: true,
			}
		})
	}

	return (
		<main className={css.container}>
			{loggedUser? (
				<>
					<h2>Welcome, {loggedUser.name}</h2>
					<button className={css.button} onClick={handleAddListClick}>
						{state.formHidden? 'Add List' : 'Cancel'}
					</button>
					<AddListForm hidden={state.formHidden} addCard={addCard} />
					<List todos={state.todosList} />
				</>
			) : (
				<EmptyState />
			)}
		</main>
	)
}

export default Main