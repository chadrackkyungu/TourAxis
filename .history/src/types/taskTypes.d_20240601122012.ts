export interface ITask {
    name: string;
    description: string;
    date_time: Date;
}

export interface ITaskUpdate extends Partial<Omit<ITask, 'date_time'>> { }
