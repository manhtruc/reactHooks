import { useEffect, useState } from 'react';
import './App.css';
import queryString from 'query-string'
import BoxColor from './components/BoxColor/BoxColor';
import TodoForm from './components/TodoForm/TodoForm';
import TodoList from './components/TodoList/TodoList';
import PostList from './components/PostList/PostList';
import Pagination from './components/Pagination/Pagination';
import SearchForm from './components/SearchForm/SearchForm';
import Clock from './components/Clock/Clock';

function App() {
  const [todoList, setTodolist] = useState([
    {
      id: 1,
      name: "truong"
    },
    {
      id: 2,
      name: "huu"
    },
    {
      id: 3,
      name: "truc"
    }
  ])

  const handleTodoClick = (todo) => {
    const newTodoList = [...todoList]
    const removeTodo = newTodoList.findIndex(item => (
      item.id === todo.id
    ))

    newTodoList.splice(removeTodo, 1)
    setTodolist(newTodoList)
  }

  const handleSubmitForm = (formValues) => {
    const todo = {
      id: todoList[todoList.length - 1].id + 1,
      ...formValues
    }
    const newTodoList = [...todoList]
    newTodoList.push(todo)
    setTodolist(newTodoList)
  }

  const [postList, setPostList] = useState([])

  const [pagination, setPagination] = useState({
    _page: 1,
    _limit: 10,
    _totalRows: 1
  })

  const [filter, setFilter] = useState({
    _limit: 10,
    _page: 1
  })

  useEffect(() => {
    async function fetchPostList() {

      try {
        const paramsString = queryString.stringify(filter)
        const requestUrl = `http://js-post-api.herokuapp.com/api/posts?${paramsString}`;
        const response = await fetch(requestUrl);
        const responseJSON = await response.json();
        // console.log(responseJSON)
        const { data, pagination } = responseJSON;
        // console.log(responseJSON)
        setPostList(data)
        setPagination(pagination)
      } catch (error) {
        console.log("loi~")
      }

    }

    fetchPostList()
  }, [filter])

  const handlePageChange = (newPage) => {
    console.log("newpage", newPage)
    setFilter({
      ...filter,
      _page: newPage
    })
  }

  const handleSearchChange = (newFilter) => {
    console.log(newFilter)
    setFilter({
      ...filter,
      _page: 1,
      title_like: newFilter.searchTerm
    })
  }

  const [show, setShow] = useState(true)

  return (
    <div className='App'>
      <h1>hello</h1>
      { show ? <Clock /> : null}
      <button onClick={() => setShow(!show)}>click</button>
      {/* <BoxColor /> */}
      {/* <TodoForm
        onSubmitForm={handleSubmitForm}
      />
      <TodoList
        todos={todoList}
        onTodoClick={handleTodoClick}
      /> */}
      <SearchForm onSubmit={handleSearchChange} />
      <PostList
        post={postList}
      />
      <Pagination
        pagination={pagination}
        onPageChange={handlePageChange}
      />
    </div>
  );
}

export default App;
