import ListItem from './list-item'
import css from './list.module.css'

export default function List(props) {
	const {todos} = props
	
	return (
		<div className={css.cards}>
			{todos.map(todo => (
				<div className={css.card} key={todo.title}>
					<h3 className={css.cardTitle}>{todo.title}</h3>
					<ul className={css.list}>
						{todo.items.map(item => <ListItem key={item.id} text={item.content} checked={item.completed} />)}
					</ul>
				</div>
			))}
		</div>
	)
}