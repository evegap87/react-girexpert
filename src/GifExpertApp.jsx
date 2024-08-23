import { useState } from 'react'
import { AddCategory, GifGrid } from './components';

const GifExpertApp = () => {
  const [categories, setCategories] = useState(['One Punch']);

  const onAddCategory = (category) => {
    if(categories.indexOf(category) >= 0){
      return;
    }
    setCategories((st) => [category, ...st])
  }


  return (
    <>
      <h1>GifExpertApp</h1>

      <AddCategory onAddCategory={onAddCategory} />

        { categories.map((category) => ( <GifGrid key={category} category={category} /> ) ) }

    </>
  )
}

export default GifExpertApp
