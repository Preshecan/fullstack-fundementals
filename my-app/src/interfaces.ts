export interface ITask {
    id?: number;
    taskName: string;
    deadline: number;
}

export interface IAction {
    type: string;
    payload: any
}