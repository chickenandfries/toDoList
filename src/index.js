'use strict'

import './style.css';
import {addDays, format} from 'date-fns';
import inboxImg from './img/inbox.png';
import todayImg from './img/today.png';
import upcomingImg from './img/upcoming.png';
import addProjectImg from './img/addProject.png';
import checkMarkImg from './img/checkMark.png';
import flagImg from './img/flag.png';
import menuImg from './img/menu.png';
import deleteImg from'./img/delete.png';
import editImg from './img/edit.png';




////state of the board.... 
function Board() {

    ////initial set up 
    let board = [];
    board.push(Project('inbox', 0));
    board.push(Project('today', 1));
    board.push(Project('upcoming', 2));


    ////push deleted projects here... 
    let projectTrash =[];   

    ////push completed tasks here.... 
    let taskTrash =[];


  
    const addProject = (title, projectIndex) => {
        board.push(Project(title, projectIndex));
        
        console.log(`Board - addProject run. below is new board`);
        console.log(board);
        
        
        
        
    }


    const addTask = (projectIndex, taskIndex, ...taskInputs) => {        

        for (let i = 0; i< board.length; i++) {
            if (board[i].projectIndex === projectIndex) {
                board[i].tasks.push(Task(taskIndex, ...taskInputs))
            }
        }



        return board   
    }



    const editTaskInputs = (projectIndex, taskIndex, ...taskInputs) => {

        for (let i = 0; i< board.length; i++) {
            if (board[i].projectIndex === projectIndex) {
                console.log(`found matching project`);
                
                for (let j=0; j < board[i].tasks.length; j++) {
                    console.log(board[i].tasks[j]);
                    console.log(board[i].tasks[j].taskIndex)

                    if (board[i].tasks[j].taskIndex === taskIndex) {
                        console.log(`found matching task!!`);
                        
                        board[i].tasks.splice(j,1,Task(taskIndex, ...taskInputs))
                        return 
                    }
                }
            }
        }


    }


    const editProjectInputs = (projectTitle, projectIndex) => {
        for (let i = 0; i< board.length; i++) {
            if (board[i].projectIndex === projectIndex) {
                console.log(`found matching project`);
                board.splice(i,1,Project(projectTitle, projectIndex))
                return 
            }
        }
        
    }







    // const inputTaskPriority = (projectTitle, taskTitle, priority) => {
    //     /*
    //     1. select correct task
    //     2. input index to put into task.ChangePriority(i);
    //     */
        

    //     for (let i = 0; i< board.length; i++) {
    //         if (board[i].title === projectTitle) {
    //             for (let j=0; j < board[i].tasks.length; j++) {
    //                 if (board[i].title === taskTitle) {
    //                     board
                        
    //                 }
    //             }
                
    //         }
    //     }
        
    // }

    // const addTask = (projectTitle) => {
    //     // const pickedProject = board.filter((project) => project.title === projectTitle)
        
    //     for (const project of board) {
    //         if (project.title === projectTitle) {
    //             project.push(task)
    //         }
    //     }
        
        
    // }


    const getBoard = () => board;


    const deleteProject = (projectIndex) => {

        /*
        after deleting project
            loop through board, starting with project with project Index that is greater than the deleted project's project index, SUBTRACT ONE 

        */

        console.log(`board - deleteProject is running`);
        console.log(`this is projectIndex ${projectIndex}`);
        
        
        console.log(`board before delete below`);
        console.log(board);
        

        for (let i = 0; i< board.length; i++) {
            if (board[i].projectIndex === projectIndex) {
                projectTrash.push(board.splice(i,1))
            }

        };

        ////if project's projectIndex is greater than projectIndex of the project that was deleted, subtract one from that projectIndex (pushing new project)
        for (let i = 3; i < board.length; i++) {
            if (board[i].projectIndex > projectIndex) {
                console.log(board[i].projectIndex);
                
                board.splice(i,1,Project(board[i].title, i-1))
            }
        }

    
        console.log('board');
        console.log(board);

        console.log(`this is now projectTrash`);
        console.log(projectTrash);
    }


    return {
        getBoard, 
        addProject,
        addTask,
        // getPriority,
        editTaskInputs,
        deleteProject,
        editProjectInputs
    }

}



function Project(title, projectIndex) {
    let tasks = [];

    // const addTaskToProject = projects.push(Task(title, description, duedate, priority, description));

    return {
        title: title,
        projectIndex: projectIndex,
        tasks,

    }
}



function Task(taskIndex, title, dueDate, priority, description) {

    // const priorityList = [
    //     'p1',
    //     'p2',
    //     'p3',
    //     'p4'
    // ]

    // let selectedPriority = priorityList[priority-1];

    // setTimeout(() => {
    //     console.log(`this is selectedPriority = ${selectedPriority}`);
    // }, 3000)
    
    


    const getPriority = () => priority;

  

    return {
        title: title,
        dueDate: dueDate,
        description: description,
        priority: priority,
        taskIndex: taskIndex,
        getPriority,
    }



}



function Controller() {
    ////initial set up
    let board = Board();
    let boardBoard = board.getBoard();
    let activeProject = board.getBoard()[0];


    ////projectIndex counter
    let controllerProjectIndex = 3;
    ////taskIndex counter
    let controllerTaskIndex = 2; 
    const getTaskIndex = () => taskIndex;
           
          
    const getActiveProjectTitle = () => activeProject.title; 

    const getActiveProjectTasks = () => activeProject.tasks;

    const getActiveProjectIndex = () => activeProject.projectIndex; 

    const removeActiveProject = () => activeProject ="";





    


    board.addTask(getActiveProjectIndex(), 0, 'asfed','06/05/25', 'p1', 'This is a task in your inbox. you can ');
    board.addTask(getActiveProjectIndex(), 1, 'a','b','p4','e');

    
    let activeTask = "";
    

    const getActiveTask = () => activeTask;

    const getActiveTaskTitle = () => activeTask.title;

    const getActiveTaskPriority =() => activeTask.priority;

    const getActiveTaskTaskIndex =() => activeTask.taskIndex;

    const removeActiveTask = () => activeTask ="";

    

    // console.log(board.getPriority(getActiveProjectTitle(), getActiveTask()));

    // board.getPriority(getActiveProjectTitle(), getActiveTaskTitle())

    




    const switchActiveProject = (selectedProjectIndex) => {
        console.log(`switchActiveProject is running`);
        
        for (let i=0; i < boardBoard.length; i++) {
            if (board.getBoard()[i].projectIndex === selectedProjectIndex) {
                console.log(`switchActiveProject function - found project`);
                
                
       
                activeProject = boardBoard[i];
                console.log(activeProject);
                
            }
        }

    }


    const switchActiveTask = (selectedTaskIndex) => {
        for (let i=0; i < getActiveProjectTasks().length; i++) {
            if (getActiveProjectTasks()[i].taskIndex === selectedTaskIndex) {

                activeTask = getActiveProjectTasks()[i];
                console.log(`this is now activeTask = `);
                console.log(activeTask);          
            }
        }
    }


    const addTask = (title, dueDate, priority, description) => {
        board.addTask(getActiveProjectIndex(), controllerTaskIndex, title, dueDate, priority, description);
        
        controllerTaskIndex++;
        
    };
        // let activeProjectTasks = getACtiveProjectTasks();
        // for (let i=0; i < activeProjectTasks.length; i++) {
        //     if (activeProjectTasks[i].taskIndex === taskIndex) {
        //         activeProjectTasks.splice(i, 0, )

        //     }
        // }
        


    const addProject = (projectTitle) => {
        board.addProject(projectTitle, controllerProjectIndex);
        controllerProjectIndex++;

    }


    const getBoard = () => boardBoard;

    const checkTaskExist = () => {
        
    }

    const getActiveProject =() => activeProject; 


    const editTaskInputs = (taskTitle, taskDueDate, taskPriority, taskDescription)=> {
        console.log(`editTaskInputs is now running`);

        board.editTaskInputs(getActiveProjectIndex(), getActiveTaskTaskIndex(), taskTitle, taskDueDate, taskPriority, taskDescription)
        
        console.log(`this is active Task now`);
        console.log(activeTask);
        
        

        removeActiveTask();
    }


    const editProjectInputs = (projectTitle) => {
        console.log('editProjectInputs now running');
        console.log(getActiveProjectIndex());
        

        board.editProjectInputs(projectTitle, getActiveProjectIndex())
        
    }

    const deleteProject = (projectIndex) => {
        /*
        after deleting project
            projectIndex--
            
        */
        board.deleteProject(projectIndex);
        controllerProjectIndex = controllerProjectIndex-1;

        console.log(`new global projectIndex in Controller = ${controllerProjectIndex}`);
        

    }

    ////DATE STUFF
    const tomorrow = addDays(new Date(), 2);
    console.log(tomorrow);
    const tomorrowFormatted = format(tomorrow, "MM/dd/yyyy");
    console.log(tomorrowFormatted);


    ////LOCAL STORAGE
    function populateStorage() {
        localStorage.setItem('buttVariable', )
        
    }


    

    
    





    return {
        addTask,
        getBoard,
        getTaskIndex,
        getActiveProject,
        getActiveTask,
        getActiveProjectTitle,
        getActiveProjectTasks,
        getActiveProjectIndex,
        switchActiveProject,
        removeActiveProject,
        removeActiveTask,
        addProject,
        switchActiveTask,
        getActiveTaskTitle,
        getActiveTaskPriority,
        getActiveTaskTaskIndex,
        editTaskInputs,
        deleteProject,
        editProjectInputs,

    }
     
}



function screenController() {

    const toDoList = Controller();

    let taskPriority;  
    let activeTask = toDoList.getActiveTask();


    ////selecting
    const body = document.querySelector('body')  



    const updateScreen = () => {
        ////CLEAR////
        body.innerHTML ="";

        ////GET STUFF FROM BOARD////
        const board = toDoList.getBoard();

           

        let activeProjectTitle = toDoList.getActiveProjectTitle();

        let activeProjectIndex = toDoList.getActiveProjectIndex();

           
    
        ////create header
        const header = document.createElement('header');
        body.appendChild(header);
    
        const headerTitle = document.createElement('h1');
        headerTitle.textContent = 'ToDoList'
        header.appendChild(headerTitle);
    

    
        ////create taskbar 
        const taskBar = document.createElement('div');
        taskBar.classList.add('taskBar');
        body.appendChild(taskBar);
        
        ////taskBarTop
        const taskBarTop = document.createElement('nav');
        taskBarTop.classList.add('taskBarTop');
        taskBar.appendChild(taskBarTop);
    
        const inbox = document.createElement('div');
        inbox.classList.add('taskBarContents');
        // inbox.classList.add('activeProject');
        inbox.dataset.projectTitle = 'inbox';
        inbox.dataset.projectIndex = 0;
    
        taskBarTop.appendChild(inbox);
    
        const inboxImgPNG = new Image();
        inboxImgPNG.src = inboxImg;
        inboxImgPNG.dataset.projectTitle = 'inbox';
        inbox.appendChild(inboxImgPNG);
    
        const inboxHThree = document.createElement('h3');
        inboxHThree.textContent = 'Inbox'
        inboxHThree.dataset.projectTitle = 'inbox';
        inbox.appendChild(inboxHThree);
    
    
        const today = document.createElement('div');
        today.classList.add('taskBarContents');
        today.dataset.projectTitle = 'today';
        today.dataset.projectIndex = 1;
        taskBarTop.appendChild(today);
    
        const todayImgPNG = new Image();
        todayImgPNG.src = todayImg;
        todayImgPNG.classList.add('todayImgPNG')
        today.appendChild(todayImgPNG);
    
    
        const todayHThree = document.createElement('h3');
        todayHThree.textContent = 'Today'
        today.appendChild(todayHThree);
    
    
        const upcoming = document.createElement('div');
        upcoming.classList.add('taskBarContents');
        upcoming.dataset.projectTitle = 'upcoming';
        upcoming.dataset.projectIndex = 2;
        taskBarTop.appendChild(upcoming);
    
    
        const upcomingImgPNG = new Image();
        upcomingImgPNG.src = upcomingImg;
        upcomingImgPNG.classList.add('upcomingImgPNG');
        upcoming.appendChild(upcomingImgPNG);
    
    
        const upcomingHThree = document.createElement('h3');
        upcomingHThree.textContent = 'Upcoming'
        upcoming.appendChild(upcomingHThree);
    
    
        ////create Projects
        const projects = document.createElement('div');
        projects.classList.add('projects');
        taskBar.appendChild(projects);
    
        const projectsHTwo = document.createElement('h2');
        // projectsHTwo.classList.add('projectsContent')
        projectsHTwo.textContent = "Projects"
        projects.appendChild(projectsHTwo);
    
        const projectsNav = document.createElement('nav');
        projects.appendChild(projectsNav);

        ////create DOM elements for projects 
        for (let i=3; i < board.length; i++) {

            const projectsNavProject = document.createElement('div');
            projectsNavProject.classList.add('projectsNavProject');
            projectsNav.appendChild(projectsNavProject);

  
            const projectsNavProjectContent = document.createElement('div');
            projectsNavProjectContent.classList.add('taskBarContents');

            projectsNavProjectContent.dataset.projectTitle = `${board[i].title}`

            ////update: use projectIndex to switch between projects
            projectsNavProjectContent.dataset.projectIndex = i;

            projectsNavProject.appendChild(projectsNavProjectContent);

            const projectNavProjectHThree = document.createElement('h3');
            projectNavProjectHThree.textContent = `${board[i].title}`;
            projectsNavProjectContent.appendChild(projectNavProjectHThree);

            const projectsNavProjectEdit = document.createElement('div');
            projectsNavProjectEdit.classList.add('projectsNavProjectEdit');
            projectsNavProjectEdit.dataset.projectIndex = i;
            projectsNavProjectEdit.addEventListener('click', projectMenuClick)
            projectsNavProject.appendChild(projectsNavProjectEdit);
            const projectMenuImg = new Image();
            projectMenuImg.src = menuImg;
            projectMenuImg.classList.add('projectMenuImg')
            projectsNavProjectEdit.appendChild(projectMenuImg);

        }

    
        
    
        const addProject = document.createElement('div');
        addProject.classList.add('projectsContent');
        projectsNav.appendChild(addProject);
    
        const addProjectImgPNG = new Image();
        addProjectImgPNG.src = addProjectImg;
        addProject.appendChild(addProjectImgPNG);
    
        const addProjectHThree = document.createElement('h3');
        addProjectHThree.textContent = 'Add Project';
        addProject.appendChild(addProjectHThree);

        addProject.addEventListener('click', openProjectForm);
        


        ////create TASKVIEW////
        const taskView = document.createElement('div');
        taskView.classList.add('taskView');
        body.appendChild(taskView);

        ////showing which project is active
        const activeProjectHeading = document.createElement('h2');
        activeProjectHeading.classList.add('activeProjectHeading');

        
        activeProjectHeading.textContent = activeProjectTitle;
        taskView.appendChild(activeProjectHeading);


        ////tasks 
        const tasks = document.createElement('nav'); 
        tasks.classList.add('tasks');
        taskView.appendChild(tasks);

        
        ////create tasks list 
        toDoList.getActiveProjectTasks().forEach((projectTask) => {

            ////create task group line
            const task = document.createElement('div');
            task.classList.add('task')
            tasks.appendChild(task);
            

            ////div for task complete check 
            const taskComplete = document.createElement('div');
            taskComplete.classList.add('taskComplete')
            task.appendChild(taskComplete);

            const checkMark = document.createElement('span');
            checkMark.classList.add('dot');
            taskComplete.appendChild(checkMark);

            if (projectTask.getPriority() === 'p1') {
                checkMark.style.border ='3px solid red';
            }   else if (projectTask.getPriority() === 'p2') {
                checkMark.style.border ='3px solid orange';
            }   else if (projectTask.getPriority() === 'p3') {
                checkMark.style.border ='3px solid skyblue';
            }   else if (projectTask.getPriority() === 'p4') {
                checkMark.style.border ='2px solid black';
            }


            // const checkMarkImgPNG = new Image();            
            // checkMarkImgPNG.src = checkMarkImg;
            // checkMarkImgPNG.classList.add('checkMarkImgPNG');
            // // checkMarkImgPNG.style.backgroundColor = 'red';
            // taskComplete.appendChild(checkMarkImgPNG);


            ////create task 
            const taskContent = document.createElement('div');
            taskContent.classList.add('taskContent');
            taskContent.dataset.taskIndex = projectTask.taskIndex;
            taskContent.addEventListener('click', taskClick);
            task.appendChild(taskContent);

            

            const taskTitle = document.createElement('h3');
            taskTitle.classList.add('taskTitle');
            taskTitle.textContent = projectTask.title;
            
            // if (projectTask.getPriority() === 'p1') {
            //     taskTitle.style.backgroundColor ='red';
            // }   else if (projectTask.getPriority() === 'p2') {
            //     taskTitle.style.backgroundColor ='orange';
            // }   else if (projectTask.getPriority() === 'p3') {
            //     taskTitle.style.backgroundColor ='skyblue';
            // }   else if (projectTask.getPriority() === 'p4') {
            //     taskTitle.style.backgroundColor ='white';
            // }
                
            taskContent.appendChild(taskTitle);

            const taskDueDate = document.createElement('div');
            taskDueDate.classList.add('taskDueDate');
            taskDueDate.textContent = projectTask.dueDate;
            taskContent.appendChild(taskDueDate);

            taskContent.dataset.priority = projectTask.priority;

            const taskDescription = document.createElement('p');
            taskDescription.classList.add('taskDescription');
            taskDescription.textContent = projectTask.description;
            taskContent.appendChild(taskDescription);
            

            
            // const priority = document.createElement('div');
            // priority.classList.add('priority');
            // priority.textContent = activeTask.priority; 
            // task.appendChild(priority);

            // const description = document.createElement('div');
            // description.classList.add('description');
            // description.textContent = activeTask.description;
            // task.appendChild(description);



        })

       
        ////create addTask div

        const addTask = document.createElement('div');
        addTask.classList.add('addTask');
        addTask.textContent = '+ Add Task';
        tasks.appendChild(addTask);

        addTask.addEventListener('click', openTaskForm);



        ////create footer
        const footer = document.createElement('footer');
        body.appendChild(footer);
    
        const footerHThree = document.createElement('h3');
        footerHThree.textContent = 'this is a footer';
        footer.appendChild(footerHThree);


        ////create userForm - addproject
        const addProjectForm = document.createElement('div');
        addProjectForm.id = 'addProjectForm';
        body.appendChild(addProjectForm);

        const addProjectFormUser = document.createElement('form');
        addProjectFormUser.classList.add('addProjectFormUser');
        // addProjectFormUser.style.height = '100%';
        addProjectForm.appendChild(addProjectFormUser);

        const addProjectFormUserHeading = document.createElement('div');
        addProjectFormUserHeading.classList.add('addProjectFormUserHeading');
        addProjectFormUser.appendChild(addProjectFormUserHeading);
        
        const addProjectFormUserHeadingHTwo = document.createElement('h2');
        addProjectFormUserHeadingHTwo.textContent = 'Add Project';
        addProjectFormUserHeading.appendChild(addProjectFormUserHeadingHTwo);

        const addProjectFormUserBody = document.createElement('div');
        addProjectFormUserBody.classList.add('addProjectFormUserBody');
        addProjectFormUser.appendChild(addProjectFormUserBody);

        const addProjectFormUserUl = document.createElement('ul');
        addProjectFormUserUl.classList.add('addProjectFormUserUl');
        addProjectFormUserBody.appendChild(addProjectFormUserUl);

        const addProjectFormUserLiTitle = document.createElement('li');
        addProjectFormUserLiTitle.classList.add('addProjectFormUserLiTitle')
        addProjectFormUserUl.appendChild(addProjectFormUserLiTitle);

        const addProjectFormUserTitleLabel = document.createElement('label');
        addProjectFormUserTitleLabel.setAttribute('for', 'projectTitle');
        addProjectFormUserTitleLabel.textContent = 'Project Title ';
        addProjectFormUserLiTitle.appendChild(addProjectFormUserTitleLabel);
                
        const addProjectFormUserTitleInput = document.createElement('input');
        addProjectFormUserTitleInput.classList.add('addProjectFormTitleInput');
        addProjectFormUserTitleInput.setAttribute('type', 'text');  
        addProjectFormUserTitleInput.setAttribute('id', 'projectTitle');
   
        addProjectFormUserLiTitle.appendChild(addProjectFormUserTitleInput);



        const addProjectFormUserButtons = document.createElement('div');
        addProjectFormUserButtons.classList.add('addProjectFormUserButtons');
        addProjectForm.appendChild(addProjectFormUserButtons);

        const addProjectFormUserCancel = document.createElement('button');
        addProjectFormUserCancel.textContent = 'Cancel';
        addProjectFormUserButtons.appendChild(addProjectFormUserCancel);
        addProjectFormUserCancel.addEventListener('click', cancelProjectForm);
        
        
        const addProjectFormUserAdd = document.createElement('button');
        addProjectFormUserAdd.textContent = 'Add';
        addProjectFormUserButtons.appendChild(addProjectFormUserAdd);
        addProjectFormUserAdd.addEventListener('click', submitProjectForm);



        ////create userForm - addTask
        const addTaskForm = document.createElement('div');
        addTaskForm.id = 'addTaskForm';
        body.appendChild(addTaskForm);

        const addTaskFormUser = document.createElement('form');
        addTaskFormUser.classList.add('addTaskFormUser');
        // addTaskFormUser.style.height = '100%';
        addTaskForm.appendChild(addTaskFormUser);

        const addTaskFormUserHeading = document.createElement('div');
        addTaskFormUserHeading.classList.add('addTaskFormUserHeading');
        addTaskFormUser.appendChild(addTaskFormUserHeading);
        
        const addTaskFormUserHeadingHTwo = document.createElement('h2');
        addTaskFormUserHeadingHTwo.textContent = 'Task Info';
        addTaskFormUserHeading.appendChild(addTaskFormUserHeadingHTwo);

        const addTaskFormUserBody = document.createElement('div');
        addTaskFormUserBody.classList.add('addTaskFormUserBody');
        addTaskFormUser.appendChild(addTaskFormUserBody);

        const addTaskFormUserUl = document.createElement('ul');
        addTaskFormUserUl.classList.add('addTaskFormUserUl');
        addTaskFormUserBody.appendChild(addTaskFormUserUl);

        const addTaskFormUserLiTitle = document.createElement('li');
        addTaskFormUserLiTitle.classList.add('addTaskFormUserLi')
        addTaskFormUserUl.appendChild(addTaskFormUserLiTitle);

        const addTaskFormUserTitleLabel = document.createElement('label');
        addTaskFormUserTitleLabel.setAttribute('for', 'taskTitle');
        addTaskFormUserTitleLabel.textContent = 'Task Title ';
        addTaskFormUserLiTitle.appendChild(addTaskFormUserTitleLabel);
                
        const addTaskFormUserTitleInput = document.createElement('input');
        addTaskFormUserTitleInput.classList.add('addTaskFormInput');
        addTaskFormUserTitleInput.classList.add('addTaskFormTitleInput');
        addTaskFormUserTitleInput.setAttribute('type', 'text');  
        addTaskFormUserTitleInput.setAttribute('id', 'taskTitle');
        addTaskFormUserLiTitle.appendChild(addTaskFormUserTitleInput);

        const addTaskFormUserLiDescription = document.createElement('li');
        addTaskFormUserLiDescription.classList.add('addTaskFormUserLi')
        addTaskFormUserUl.appendChild(addTaskFormUserLiDescription);

        const addTaskFormUserDescriptionLabel = document.createElement('label');
        addTaskFormUserDescriptionLabel.setAttribute('for', 'taskDescription');
        addTaskFormUserDescriptionLabel.textContent = 'Task Description ';
        addTaskFormUserLiDescription.appendChild(addTaskFormUserDescriptionLabel);
                
        const addTaskFormUserDescriptionInput = document.createElement('input');
        addTaskFormUserDescriptionInput.classList.add('addTaskFormInput');
        addTaskFormUserDescriptionInput.classList.add('addTaskFormDescriptionInput');
        addTaskFormUserDescriptionInput.setAttribute('type', 'text');  
        addTaskFormUserDescriptionInput.setAttribute('id', 'taskDescription');
        addTaskFormUserLiDescription.appendChild(addTaskFormUserDescriptionInput);

        const addTaskFormUserLiDueDate = document.createElement('li');
        addTaskFormUserLiDueDate.classList.add('addTaskFormUserLi')
        addTaskFormUserUl.appendChild(addTaskFormUserLiDueDate);

        const addTaskFormUserDueDateLabel = document.createElement('label');
        addTaskFormUserDueDateLabel.setAttribute('for', 'taskDueDate');
        addTaskFormUserDueDateLabel.textContent = 'Task DueDate ';
        addTaskFormUserLiDueDate.appendChild(addTaskFormUserDueDateLabel);
                
        const addTaskFormUserDueDateInput = document.createElement('input');
        addTaskFormUserDueDateInput.classList.add('addTaskFormInput');
        addTaskFormUserDueDateInput.classList.add('addTaskFormDueDateInput');
        addTaskFormUserDueDateInput.setAttribute('type', 'text');  
        addTaskFormUserDueDateInput.setAttribute('id', 'taskDueDate');
        if (activeProjectTitle === 'today') {
            addTaskFormUserDueDateInput.value = format(new Date(), "MM/dd/yyyy");
        }
        addTaskFormUserLiDueDate.appendChild(addTaskFormUserDueDateInput);


        
        const addTaskFormUserButtons = document.createElement('div');
        addTaskFormUserButtons.classList.add('addTaskFormUserButtons');
        addTaskForm.appendChild(addTaskFormUserButtons);

        const addTaskFormUserPriority = document.createElement('div');
        addTaskFormUserPriority.classList.add('addTaskFormUserPriority')
        addTaskFormUserButtons.appendChild(addTaskFormUserPriority);

        const addTaskFormUserPriorityHeading = document.createElement('div');
        addTaskFormUserPriority.appendChild(addTaskFormUserPriorityHeading);

        const addTaskFormUserPriorityHeadingLabel = document.createElement('label');
        addTaskFormUserPriorityHeadingLabel.textContent = 'Priority';
        addTaskFormUserPriorityHeading.appendChild(addTaskFormUserPriorityHeadingLabel);

        const addTaskFormUserPriorityFlags = document.createElement('div');
        addTaskFormUserPriority.appendChild(addTaskFormUserPriorityFlags);

        
        for (let i=1; i<5; i++) {
            const flagImgPNG = new Image();
            flagImgPNG.src = flagImg;
            flagImgPNG.classList.add('flagImgPNG');
            flagImgPNG.classList.add(`flagImgPNG${i}`);
            flagImgPNG.dataset.priority = `p${i}`;
            flagImgPNG.addEventListener('click', selectPriorityClick);
            addTaskFormUserPriorityFlags.appendChild(flagImgPNG);
        }

        taskPriority = 'p4'

 
  

        const addTaskFormUserCancel = document.createElement('button');
        addTaskFormUserCancel.textContent = 'Cancel';
        addTaskFormUserButtons.appendChild(addTaskFormUserCancel);

        addTaskFormUserCancel.addEventListener('click', cancelTaskForm);
                
        
        const addTaskFormUserAdd = document.createElement('button');
        addTaskFormUserAdd.textContent = 'Submit';
        addTaskFormUserButtons.appendChild(addTaskFormUserAdd);
        
        addTaskFormUserAdd.addEventListener('click', submitTaskForm);





        ////adding switchProject function to each line item 
        const taskBarContents = document.querySelectorAll('.taskBarContents');
        taskBarContents.forEach((taskBarContent) => {
            taskBarContent.addEventListener('click', switchActiveProjectClick)
        })

        ////highlighting activeProject 
        taskBarContents.forEach((taskBarContent) => {

            if (Number(taskBarContent.dataset.projectIndex) === activeProjectIndex) {
                taskBarContent.classList.add('activeProject');
            }
        })
    
    
        
    }


    // ////inbox gets activeProject by default
    // const inbox = document.querySelector('[data-projectTitle="inbox"]');
    // inbox.classList.add('activeProject')
    

    function switchActiveProjectClick(e) {
        console.log(`below is switchActiveProject target`);
        console.log(e.target);
        
        ////grab the title from the project that was clicked on 
        const selectedProjectIndex = e.target.dataset.projectIndex;
        console.log(`this is selectedProjectIndex:${selectedProjectIndex} `);
        
        ////if what was clicked on doesn't have projectTitle, return 
        if (!selectedProjectIndex) return;

        toDoList.switchActiveProject(Number(selectedProjectIndex));

        updateScreen();

    }


    const openProjectForm = function() {
        const addProjectForm = document.querySelector('#addProjectForm');
        addProjectForm.style.display = 'block';


    }

    // function openProjectForm() {
    //     const addProjectForm = document.querySelector('#addProjectForm');
    //     addProjectForm.style.display = 'block';
    // }


    function cancelProjectForm() {
        
        ////clearing any input made 
        const addProjectFormUserTitleInput = document.querySelector('.addProjectFormTitleInput')
        addProjectFormUserTitleInput.value='';

        const addProjectForm = document.querySelector('#addProjectForm');
        addProjectForm.style.display = 'none';

     
    }


    let projectToggle = 'off';
    function turnProjectToggleOff() {
        // projectToggle === 'off' ? projectToggle = 'on' : projectToggle = 'off';
        projectToggle ='off';
    }
    function turnProjectToggleOn() {
        projectToggle ='on';
    }



    // let projectToggle


    function submitProjectForm() {
        // const addProjectFormUserTitleInput = document.querySelector('#projectTitle');
        // const projectTitle = addProjectFormUserTitleInput.value;
        
        const projectTitle = document.querySelector('#projectTitle').value;


        /*
        -when clicking activeprojectmenu, make that switch activeProject 
        -make editProjectToggle()
        when submitProjectform
            if editProjectToggle() on, 
                editProjectTitle on active Project
                else if editProjectToggle() not on, 
                push 

        */

        if (projectToggle === 'off') {
            toDoList.addProject(projectTitle);
        }   else if (projectToggle ==='on') {
            console.log(`projectToggle is on and I'm editing project`);
            
            toDoList.editProjectInputs(projectTitle);
            turnProjectToggleOff();
        }

   
        updateScreen();        

    }

        
    function addTask(title, dueDate, priority, description) {
        toDoList.addTask(title, dueDate, priority, description)

        
    }



    function openTaskForm() {
        const addTaskForm = document.querySelector('#addTaskForm');
        addTaskForm.style.display = 'block';

        console.log(`active Task task index below`);
        console.log(toDoList.getActiveTaskTaskIndex());

                
        
        
    }

    

    // function editTaskFormSubmit() {
    //     /*
    //     get activeTask

    //     1. const taskTitle = document.querySelector('.addTaskFormTitleInput').value;
    //     const taskDescription = document.querySelector('.addTaskFormDescriptionInput').value;
    //     const taskDueDate = document.querySelector('.addTaskFormDueDateInput').value;

    //     */
    // }


    function cancelTaskForm() {
        const addTaskFormInputs = document.querySelectorAll('.addTaskFormInput');

        for (let addTaskFormInput of addTaskFormInputs) {
            addTaskFormInput.value = '';
        }

        const addTaskForm = document.querySelector('#addTaskForm');
        addTaskForm.style.display = 'none';

        removePriorityFlagStyle();

        toDoList.removeActiveTask();


        console.log(`is there activeTask here?`);
        console.log(toDoList.removeActiveTask());
        



    }


    ////taskPriority 

    function selectPriorityClick(e) {
        const selectedTaskPriority = e.target.dataset.priority;
        console.log('selectPriorityClick running');
                
        if (!selectedTaskPriority) return

        taskPriority = selectedTaskPriority;


        removePriorityFlagStyle();

        ////add activePriority class 
        e.target.classList.add('activePriority')

    }


    function submitTaskForm() {
        /*
        if there is an activeTask
            edit activeTask

        if no activeTask (creating new task)
            push to end of activeProject.tasks 
        */
        

        let taskTitle = document.querySelector('.addTaskFormTitleInput').value;
        let taskDescription = document.querySelector('.addTaskFormDescriptionInput').value;
        let taskDueDate = document.querySelector('.addTaskFormDueDateInput').value;
        
        
        if (!toDoList.getActiveTask()) {
            console.log(`new Task being created! not existing task `);
            
            console.log(`this is priority: ${taskPriority}`);
           
            toDoList.addTask(taskTitle, taskDueDate, taskPriority, taskDescription)
            
            cancelTaskForm();
            updateScreen();
            return 
        }   else if (toDoList.getActiveTask()) {
            console.log(`existing task has been clicked`);

            // taskTitle = document.querySelector('.addTaskFormTitleInput').value;
            // taskDescription = document.querySelector('.addTaskFormDescriptionInput').value;
            // taskDueDate = document.querySelector('.addTaskFormDueDateInput').value;

            toDoList.editTaskInputs(taskTitle, taskDueDate, taskPriority, taskDescription);
            cancelTaskForm();
            updateScreen();
            return 
        }    

    }

    function taskClick(e) {
        switchActiveTask(e);
        openEditTaskForm()
    }


    function switchActiveTask(e) {
        /*
        1. get Active project
        2. for... tasks, 
            if task.Index === selectedTaskIndex;
            change active Task 

        */

           
        

        ////grab the Index from the task that was clicked on 
        const selectedTaskIndex = e.target.dataset.taskIndex;
        console.log(`clicked task with taskIndex of ${e.target.dataset.taskIndex}`);
        
        ////if what was clicked on doesn't have taskTitle, return 
        if (!selectedTaskIndex) return;

        toDoList.switchActiveTask(Number(selectedTaskIndex));

        
        // updateScreen();
       
      
    }


    function openEditTaskForm() {

        /*
        1. grab addTaskForm
        2. activeTask (switchTasksClick?? )
        open task by taskTitle 
        activeProject
        loop through tasks to match taskTitle 
        3. pre-fill addTaskForm values with selected Task info 
        4.  if cancel - cancelForm
            if submit - editTaskFormSubmit 

        */

        ////open task form 
        openTaskForm();

        ////prefill openTaskForm values with info from activeTask 

        document.querySelector('#taskTitle').value = toDoList.getActiveTask().title;
        document.querySelector('#taskDescription').value = toDoList.getActiveTask().description;
        document.querySelector('#taskDueDate').value = toDoList.getActiveTask().dueDate;
        taskPriority = toDoList.getActiveTaskPriority();


        console.log(`is there activeTask here?`);
        console.log(toDoList.getActiveTask());
        
        


        // console.log(toDoList.getActiveTask().title);
        // console.log(toDoList.getActiveTask().dueDate);
        // console.log(toDoList.getActiveTask().description);
        // console.log(toDoList.getActiveTask().selectedPriority);
        // console.log(toDoList.activeTask.dueDate);
        // console.log(toDoList.activeTask.title);


        ////what do these do? lol 
        removePriorityFlagStyle();

        recallPriorityFlagStyle();

        
    }


    function openEditProjectForm() {

        // ////open project form 
        openProjectForm();

        ////prefill openProjectForm values with info from activeProject 
        document.querySelector('#projectTitle').value = toDoList.getActiveProjectTitle(); 
        
            

    }

    function removePriorityFlagStyle() {
        ////activePriority flag 
        const flagImgPNGs = document.querySelectorAll('.flagImgPNG');

        flagImgPNGs.forEach((flagImgPNG) => {
            flagImgPNG.classList.remove('activePriority')
        })

    };

    function recallPriorityFlagStyle() {
        const flagImgPNGs = document.querySelectorAll('.flagImgPNG');

        flagImgPNGs.forEach((flagImgPNG) => {
            if (flagImgPNG.dataset.priority === toDoList.getActiveTaskPriority()) {
                
                
                flagImgPNG.classList.add('activePriority')
            }
            
        });

    };

    


    const projectMenuClick = (e) => {
        const projectIndex = (e.target.dataset.projectIndex);
        console.log(`this is projectIndex = `);
        console.log(projectIndex);

        toDoList.switchActiveProject(projectIndex);
        turnProjectToggleOn();
        

        const projectMenu = document.createElement('div')
        projectMenu.classList.add('projectMenu');



        let projectsNavProjectEdit;
        const projectsNavProjectEdits = document.querySelectorAll('.projectsNavProjectEdit');
        for (let i=0; i<projectsNavProjectEdits.length; i++) {
            if (projectsNavProjectEdits[i].dataset.projectIndex === projectIndex) {
                projectsNavProjectEdit = projectsNavProjectEdits[i];                
            }
        }


        projectsNavProjectEdit.appendChild(projectMenu);
        

        // projectMenu.addEventListener('click', function() {
        //     console.log(`projectMenu being clicked`);
            
        // })


        const projectMenuEdit = document.createElement('div');
        projectMenuEdit.classList.add('projectMenuChildren');
        projectMenuEdit.dataset.projectIndex = projectIndex;
        projectMenu.appendChild(projectMenuEdit);

        projectMenuEdit.addEventListener('click', switchActiveProjectClick)
        projectMenuEdit.addEventListener('click', openEditProjectForm);

        const projectEditP = document.createElement('p');
        projectEditP.textContent = 'Edit Project';
        projectMenuEdit.appendChild(projectEditP);

        const projectEditImg = new Image();
        projectEditImg.src = editImg;
        projectEditImg.classList.add('projectMenuChildrenImg');
        projectMenuEdit.appendChild(projectEditImg);
        

        const projectMenuDelete = document.createElement('div');
        projectMenuDelete.classList.add('projectMenuChildren');
        projectMenuDelete.dataset.projectIndex = projectIndex;
        projectMenu.appendChild(projectMenuDelete);

        projectMenuDelete.addEventListener('click', deleteProjectClick);



        const projectDeleteP = document.createElement('p');
        projectDeleteP.textContent = "Delete Project";
        projectMenuDelete.appendChild(projectDeleteP);
        
        const projectDeleteImg = new Image();
        projectDeleteImg.src = deleteImg;
        projectDeleteImg.classList.add('projectMenuChildrenImg');
        projectMenuDelete.appendChild(projectDeleteImg);     
               


    }

    // document.addEventListener('click', e => {
    //     if (!e.target.closest('.projectMenu')) {
    //         document.querySelector('.projectMenu').style.display = 'none';
    //     }
    // });

 

    function deleteProjectClick(e) {
        
        // let selectedProject;

        // ////selecting all projects 
        // const projects = document.querySelectorAll('.taskBarContents');

        // for (let i = 1; i <= projects.length; i++) {
        //     if (projects[i].dataset.projectIndex === )
        // }
        
        
        const projectIndex = Number(e.target.dataset.projectIndex); 
        console.log(`this is projectIndex from deleteProjectClick = ${projectIndex}`);
        

        toDoList.deleteProject(projectIndex);
  
        // setTimeout(() => {
        //     toDoList.deleteProject(projectIndex)
        // }, 10)

        updateScreen();

        ////stop parent click event (for projectMenu) from firing 
        e.stopPropagation();

    };


    


    ////if click outside the dialogue box, close projectMenu
    // function closeProjectMenu(e) {
    //     const projectMenu = document.querySelector('.projectMenu');

    //     if(!projectMenu.contains(e.target)) {
    //         projectMenu.style.display ='none';
    //     }

    // };
    // document.addEventListener('click', closeProjectMenu);

    // document.addEventListener('click', function closeProjectMenu(e) {
    //     const projectMenu = document.querySelector('.projectMenu');
    //     console.log(`click document registering`);
        

    //     if(!projectMenu.contains(e.target)) {
    //         projectMenu.style.display ='none';
    //     }
    // });

    // document.addEventListener('click', e => {
    //     const projectMenu = document.querySelector('.projectMenu')
    //     if (!e.target.closest('.menu')) {
    //         alert('you clicked outside of the menu.')
    //     }
    // })






      
    

    // function editTask() {
    //     /*
    //     1. 
    


    //     */

    // }


  


 





    


    //initial render 
    updateScreen();


    function storageAvailable(type) {
        let storage;
        try {
            storage = window[type];
            const x = '__storage_test__';
            storage.setItem(x, x);
            storage.removeItem(x);
            return true;
        }
        catch (e) {
            return e instanceof DOMException && (
                // everything except Firefox
                e.code === 22 ||
                // Firefox
                e.code === 1014 ||
                // test name field too, because code might not be present
                // everything except Firefox
                e.name === 'QuotaExceededError' ||
                // Firefox
                e.name === 'NS_ERROR_DOM_QUOTA_REACHED') &&
                // acknowledge QuotaExceededError only if there's something already stored
                (storage && storage.length !== 0);
        }
    }

    if (storageAvailable('localStorage')) {
        // Yippee! We can use localStorage awesomeness
        console.log(`available`);
        
    }
    else {
        // Too bad, no localStorage for us
        console.log(`no`);
        
    }







}




screenController();




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
        title: title,
        duedate,
        priority,
        description
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
        const title
        const duedate
        const priority
        const description
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
