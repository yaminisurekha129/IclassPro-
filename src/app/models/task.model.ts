export interface Task {
    task_id: number;
    task_name: string;
  }
  

  export interface ReportedTask {
    user: string;  
    tasks: Task[];  
  }

  export interface TaskResponse {
    user: string;  
    tasks: Task[];  
    reported_by: ReportedTask[];  
  }