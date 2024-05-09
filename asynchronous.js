function delay(milliseconds) {
 new Promise(resolve => setTimeout(resolve, milliseconds));
  }
  
  async function logMessageAfterDelay(message, delayTime) {
    
    await delayTime;

    console.log(message);
  }
  logMessageAfterDelay("Time wastaed", 2000); 

 
// (2)Function to fetch user data
const userIds = [3, 5,7];

async function getUserData(id) {
    return new Promise((resolve) => {
        setTimeout(() => {
        
            console.log('fetch data by id');
            resolve('User id,data');
        }, 1000);
     
    
    
    });
}
async function fetchAndLogUserDataInSequence(userIds) {
    for (const id of userIds) {
        const userData = await getUserData(id);
        console.log(userData.data);
    }
fetchAndLogUserDataInSequence(userIds).then(() => console.log('All user data fetched and logged.'));


// (3)You have an asynchronous function performTask() that returns a Promise. The Promise resolves if the task is successful and rejects if there's an error. Write a function that calls performTask() and logs a custom success message if the task is successful, and a custom error message if there's an error.

async function performTask() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const success = Math.random()
            if (success) {
                resolve("Task completed successfully!");
            } else {
                reject("An error, try again");
            }
        }, 1000);
    });
}

function performTaske() {
    performTask()
.then(message => console.log(message)) // Log success message
.catch(error => console.log(error)); // Log error message
}

callPerformTaskAndLog();

//(4)Retry Logic:
//Scenario:
//Write a function unstableTask that:

//1.Accepts a taskName and failureProbability (a number between 0 and 1).
//2. Returns a Promise that:
//Resolves immediately with a success message if a randomly generated number is greater than failureProbability.
//Rejects immediately with a failure message if a randomly generated number is less than or equal to failureProbability.
//Write another function executeWithRetry that:

//Accepts a taskName, retries, and failureProbability.
//Uses a retry mechanism to attempt the unstableTask up to retries times.
//Logs whether the task succeeded or failed after all attempts.


function unstableTask(taskName, failureProbability) {
    return new Promise((resolve, reject) => {
        const randomNumber = Math.random(); 
        if (randomNumber > failureProbability) {
            resolve(`Task ${taskName} succeeded`);
        } else {
            reject(`Task ${taskName} failed.`
            );
        }
    });
}
function executeWithRetry(taskName, retries, failureProbability) {
    const victory = false;
    for (let i = 0; i < retries; i++) {
         unstableTask .then(message => {
                console.log({message});
                console.log('success')
         
            })
        
           .catch((error) => {
                console.log({error});
                console.log('Task failed try it again');
            })
    

    if (!success) {
    }
        console.log(`Task ${taskName} failed after ${retries}  several attempts.`);}
    
}};

