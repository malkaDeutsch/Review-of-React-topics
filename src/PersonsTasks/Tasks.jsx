import { useState } from "react";

function Tasks() {

const [personsData,setPersonsData]=useState(
     [
    {
      name: 'Avi',
      tasks: [
        {
          title: 'Task A',
          completed: true
        },
        {
          title: 'Task B',
          completed: false
        }
      ]
    },
    {
      name: 'Dana',
      tasks: [
        {
          title: 'Task C',
          completed: false
        },
        {
          title: 'Task D',
          completed: true
        }
      ]
    }
  ]);

  return (
    <div>
      {personsData.map((person, index) => (
        <div key={index}>
          <h2>-{person.name}-</h2>
         <u> <h3>Tasks</h3></u>
          {person.tasks.map((task, taskIndex) => (
            <div key={taskIndex}>               
              <p><b>Titel: </b>{task.title}</p>
              <p><b>Completed: </b>{task.completed ? 'Yes' : 'No'}</p> <br/>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Tasks;