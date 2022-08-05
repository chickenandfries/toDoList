'use strict'

////state of the board.... 
function Board() {

    ////initial set up 
    let board = [];
    board.push(Project('inbox'));

    // const addProject = () => {
    // }

    const addProject = (title) => {
        board.push(Project(title))
    }

    const getProject = (projectTitle) => {
        const selectedProject = board.filter((project) => project.title === projectTitle);
        return selectedProject 
    }

    const addTask = (projectTitle, ...taskInputs) => {
        // const projectTitle = projectTitle;

        for (let i = 0; i< board.length; i++) {
            if (board[i].title === projectTitle) {
                board[i].tasks.push(Task(...taskInputs))
            }
        }

        console.log(board);

        return board   
    }

    // const addTask = (projectTitle) => {
    //     // const pickedProject = board.filter((project) => project.title === projectTitle)
        
    //     for (const project of board) {
    //         if (project.title === projectTitle) {
    //             project.push(task)
    //         }
    //     }
        
        
    // }

    const getBoard = () => board;

    return {
        getBoard, 
        addProject,
        addTask
    }

}



function Project(title) {
    let tasks = [];

    // const addTaskToProject = projects.push(Task(title, description, duedate, priority, notes));

    return {
        title: title,
        tasks
 
    }
}


function Task(title, description, dueDate, priority, notes) {

    // priority = [
    //     1,
    //     2,
    //     3,
    // ]

    return {
        title: title,
        description: description,
        dueDate: dueDate,
        priority: priority,
        notes: notes,

    }



}


function Controller() {
    let board = Board();
    let activeProjectTitle = board.getBoard()[0].title;
    console.log(activeProjectTitle);
    
    
    const switchProjects = (e) => {
        activeProjectTitle = e.target.dataset.title;

    }

    const addTask = (title, description, dueDate, priority, notes) => {
     
        board.addTask(activeProjectTitle, title, description, dueDate, priority, notes)
        
    };


    return {
        addTask
    }
     
}

const butt = Task('a', 'b', 'd', 1, 'asdf')
console.log(butt);

const board = Board();
console.log(board.getBoard());


function screenController() {

}


console.log('------------------');
const testing = Controller();

testing.addTask('inbox', 1,2,3,4,5);


/*


function Board() {
    //state of todolist

    board = []
    board.push(project('inbox'));    

    const getBoard = () => board;

    


}


function project(name) {

    project = [];

    const addTask = project.push(task());

    return {
        name: name;
    }
    
}


function task() {

    priority = [
        1,
        2,
        3
    ];

    return {
        title: title,
        description: description,
        duedate,
        priority,
        notes
        checklist
    }

}

screenController() {
    const controller = Controller();

    create html elements
    
    const updateScreen = () => {

    }


    function clickHandlerBoard(e) {
        //adding task.... 
        const title
        const description
        const duedate
        const priority
        const notes
        const checklist

        controller.addTask(input);
        updateScreen();


    }

    ////initial render
    updateScreen();



    
}

ADDING TASK
1. screen controller ask user for info
2. use info to createTask() in Controller
    1)task(input info here)
    2)push task to active project 
    3)if project already exists in board
        replace project in board() with changed project
      if project does not exist in board
        push project to board 
            give it id number... 
    
    4) 
3.  
3. push task to project 
4. push project to board
5. updateScreen

UPDATESCREEN
1. clear board
2. getBoard
3. create elements.. set up display  


SWITCH BETWEEN PROJECTS... 



*/
