import { useState } from 'react'
import './App.css'
import { Form } from './components/Form/Form';
import { Watch, WatchProps } from './components/Watch/Watch';
import getCurrentTime from './functions/getCurrentTime.ts'

function App() {
  const [watches, setWatches] = useState<WatchProps[]>([])
  const [offset, setOffset] = useState(0)

  const onSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get('name') as string;
    const offset = Number(formData.get('time-zone'));
    setOffset(offset)
    const time = getCurrentTime(offset);
    setWatches([...watches, {name: name, time: time}])
  }

  const removeWatch = (index: number) => {
    setWatches(watches.filter((_, i) => i !== index ))
  }

  return (
    <>
      <Form onSubmitHandler={onSubmitHandler}/>
      {watches.map((watch, index) => (
        <Watch watch={watch} key={index} offset={offset} removeWatch={() => removeWatch(index)} />
      ))}
    </>
  )
}

export default App
