import TaskCreator from './TaskCreator';

export default function TaskList() {
  return (
    <div className="mx-9 flex flex-col items-stretch gap-4">
      <TaskCreator />
    </div>
  );
}
