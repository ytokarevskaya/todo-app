import Header from '../header'
import Main from '../main'
import Footer from '../footer'
import response from '../../server-response-mock'
import css from './app.module.css'

function App() {
	const isLogged = response.activeUserId !== null
	const loggedUser = response.users.find(user => user.id === response.activeUserId)
	const userTodos= response.todos.filter(item => item.userId === response.activeUserId)
	return (
		<div className={css.app}>
			<Header isLogged={isLogged} />
			<Main loggedUser={loggedUser || null} todos={userTodos} />
			<Footer />
		</div>
	)
}

export default App
