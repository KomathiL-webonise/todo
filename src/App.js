import React from 'react';
import './style.css';
function TodoForm() {
  const [newtask, setNewTask] = React.useState({
    title: '',
    status: 'notdone',
  });
  React.useEffect(function () {
    console.log('App component useEffect called');
  });
  const [tasks, setTasks] = React.useState([
    {
      title: 'Todo app',
      status: 'done',
    },
    {
      title: 'Hooks',
      status: 'notdone',
    },
    {
      title: 'project submission',
      status: 'notdone',
    },
    {
      title: 'API call',
      status: 'done',
    },
  ]);
  var updateNewtask = function (event) {
    setNewTask({ ...newtask, title: event.target.value });
  };
  function addTask() {
    setTasks([...tasks, newtask]);
  }
  function toggleStatus(ind) {
    var temp = tasks;
    temp[ind].status = temp[ind].status === 'done' ? 'notdone' : 'done';
    setTasks([...temp]);
  }
  function deleteTask(ind) {
    var temp = tasks;
    temp.splice(ind, 1);
    setTasks([...temp]);
  }
  return (
    <div className='container' >

      <div className="mybox">
       
        <input className='p-1 margin'  type="text"  placeholder='Add task' onChange={updateNewtask} />
        <button className='btn btn-secondary  button' onClick={addTask}>Add task</button>
    
        {tasks.map(function (t, i) {
          return (
            <li className={t.status === 'done' ? 'over' : 'notover'}>
              {t.title}
              {t.status === 'done' ? (
                <button className='btn btn-light m-2'
                  onClick={() => {
                    toggleStatus(i);
                  }}
                >
                  Undo
                </button>
              ) : (
                <button className='btn btn-light m-2'
                  onClick={() => {
                    toggleStatus(i);
                  }}
                >
                  Done
                </button>
              )}
              <button className='btn btn-light'
                onClick={() => {
                  deleteTask(i);
                }}
              >
                Delete
              </button>
            </li>
          );
        })}
      </div>
    </div>
  );
}
export default TodoForm;