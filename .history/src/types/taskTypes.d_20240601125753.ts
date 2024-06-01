export interface ITask {
    name: string;
    description: string;
    date_time: Date;
    user: string;
}

export interface ITaskUpdate extends Partial<Omit<ITask, 'date_time'>> { }
