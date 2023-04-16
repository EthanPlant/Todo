import { useState } from 'react';

import TagInput from './TagInput';

export default function TaskCreator() {
  const [expanded, setExpanded] = useState(false);
  return (
    <div
      className={`flex flex-col gap-5 overflow-hidden rounded-lg bg-gray-200 p-3 leading-10 ${
        expanded ? 'max-h-80' : 'max-h-12'
      } transition-[max-height] duration-500 ease-in-out`}
      onClick={() => setExpanded(true)}
      onBlur={() => setExpanded(false)}
    >
      <input
        type="text"
        className="border-none bg-gray-200 leading-10 outline-none"
        placeholder="Add Task"
      />
      <label className="ml-1">
        Date
        <input type="date" className="ml-[20%] border-none bg-gray-200 leading-10 outline-none" />
      </label>
      <div className="flex justify-between">
        <label className="ml-1">Priority</label>
        <span>
          <label>
            High
            <input type="radio" name="priority" value="high" className="ml-2 accent-red-400" />
          </label>
        </span>
        <span>
          <label>
            Medium
            <input type="radio" name="priority" value="medium" className="ml-1 accent-yellow-400" />
          </label>
        </span>
        <span>
          <label>
            Low
            <input type="radio" name="priority" value="low" className="ml-1 accent-gray-400" />
          </label>
        </span>
        <span></span>
      </div>
      <label className="ml-1">
        Tags
        <TagInput />
      </label>
    </div>
  );
}
