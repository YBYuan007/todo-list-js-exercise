// Arrays to keep track of each task's state
function newTask(title, description) {
  const task = {
    title,
    description,
    complete: false,

    completeTask : function (){
      this.complete = true;
    },

    logTaskState : function (){
      console.log(`${this.title} has${this.complete ? " " : " not "}been completed`);
    }

  };
  return task;
}

const task1 = newTask("clean cat litter", "take all poops out of the litter box");
const task2 = newTask("do landry" , ":(");
const tasks= [task1, task2];
task1.logTaskState();
task1.completeTask();
task1.logTaskState();
