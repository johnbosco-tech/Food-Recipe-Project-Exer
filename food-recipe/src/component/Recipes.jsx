import { useEffect, useState } from 'react'
import SearchBar from './SearchBar'
import Loading from './Loading'
import { fetchRecipes } from '../utils'
import RecipeCard from './RecipeCard'

const Recipes = () => {
    const [recipes, setRecipes] = useState([])
    const [query, setQuery] = useState("Vegan")
    const [limit, setLimit] = useState(30)
    const [loading, setLoading] = useState(false)

    const handleSearch = async (e) => {
        setQuery(e.target.value)
    }

    const getRecipes = async () => {
        try {
            const data = await fetchRecipes({query, limit})
            setRecipes(data)
            setLoading(false)
        } catch (error) {
            console.log(error)
        }finally{
            setLoading(false)
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        getRecipes()
    }

    useEffect(()=>{
        setLoading(true)
        getRecipes()
    }, [])

    const showMore = async () => {
        setLimit((prev)=> prev + 10)
        getRecipes()
    }

    if(loading){
        return (
            <Loading />
        )
    }

  return (
    <div className='w-full'>
        <div className='w-full flex items-center justify-center py-10'>
            <form className='w-full lg:w-2/4' onSubmit={handleSubmit}>
                <SearchBar 
                 containerStyle='border border-slate-800 rounded-full px-6 py-2 w-full text-slate-600 placeholder:text-sm placeholder:text-slate-500 focus:ring-1 focus:border-slate-700 outline-none shadow-lg'
                 placeholder="eg. Vegan, Chicken, Cake, etc."
                 value={query}
                 handleInput={handleSearch}
                />

            </form>
        </div>

        {
            recipes.length > 0 ? (
                <>
                 <div className='flex flex-wrap gap-10 px-0 lg:px-20'>
                    {
                        recipes?.map((item, index)=>(
                            <RecipeCard key={index} recipe={item}/>
                        ))
                    }
                 </div>

                 <div className='flex items-center justify-center mt-20'>
                    <button
                     className='text-white py-1 px-4 bg-green-800 rounded-full text-[14px] cursor-pointer'
                     onClick={showMore}
                    >Show More</button>
                 </div>
                </>
            ): <div className='w-full flex items-center justify-center text-white font-semibold py-5'>
                No Recipes Found
            </div>
        }
    </div>
  )
}

export default Recipes