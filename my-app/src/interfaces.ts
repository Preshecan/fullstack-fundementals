export interface ITask {
    taskName: string;
    deadline: number;
}

export interface IAction {
    type: string;
    payload: any
}