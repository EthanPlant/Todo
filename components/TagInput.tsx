import useInput from '@/hooks/useInput'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'

export default function TagInput() {
  const [tag, setTag, onTagChange] = useInput('')
  const [tags, setTags] = useState<string[]>([])
  const [isKeyReleased, setIsKeyReleased] = useState(false)

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const { key } = e
    const trimmedInput = tag.trim()

    if (key === ',' && trimmedInput.length && !tags.includes(trimmedInput)) {
      e.preventDefault()
      setTags((prevState) => [...prevState, trimmedInput])
      setTag('')
    }

    if (key === 'Backspace' && !tag.length && tags.length && isKeyReleased) {
      e.preventDefault()
      const tagsCopy = [...tags]
      const poppedTag = tagsCopy.pop() as string

      setTags(tagsCopy)
      setTag(poppedTag)
    }

    setIsKeyReleased(false)
  }

  const onKeyUp = () => {
    setIsKeyReleased(true)
  }

  const deleteTag = (index: number) => {
    setTags((prevState) => prevState.filter((tag, i) => i !== index))
  }

  return (
    <div className="flex overflow-scroll w-full max-w-full pl-3">
      {tags.map((tag, i) => (
        <div
          className="flex items-center my-1.5 ml-0 mr-2 py-0 pl-2 pr-1 border-2 border-blue-200 rounded bg-blue-200 whitespace-nowrap"
          key={i}
        >
          {tag}
          <button
            className="flex, p-1 border-none cursor-pointer"
            onClick={() => deleteTag(i)}
          >
            <FontAwesomeIcon icon={faTrash} />
          </button>
        </div>
      ))}
      <input
        className="w-full min-w-[50%] border-none rounded-s p-3 pl-3 bg-gray-200"
        placeholder="Add Tag"
        value={tag}
        onKeyDown={onKeyDown}
        onKeyUp={onKeyUp}
        onChange={onTagChange}
      />
    </div>
  )
}
