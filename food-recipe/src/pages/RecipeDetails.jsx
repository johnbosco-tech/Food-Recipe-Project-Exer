import React, { useEffect, useState } from 'react'
import {useParams} from "react-router-dom"
import { fetchRecipe, fetchRecipes } from '../utils';
import Loading from '../component/Loading';
import Header from '../component/Header';
import { TiPin } from "react-icons/ti";
import { LuBadgeCheck } from "react-icons/lu";
import RecipeCard from '../component/RecipeCard';

const RecipeDetails = () => {
    const [recipe, setRecipe] = useState(null);
    const [recipes, setRecipes] = useState([]);
    const [loading, setLoading] = useState(false);

    const {id} = useParams()

    const getRecipe = async (id) => {
        try {
            setLoading(true)
            const data = await fetchRecipe(id)
            setRecipe(data.recipe)

            const recommend = await fetchRecipes({
                query: data.recipe.label,
                limit: 10
            })
            setRecipes(recommend)
        } catch (error) {
            console.log(error)
        }finally{
            setLoading(false)
        }
    }

    useEffect(()=>{
        getRecipe(id)
    }, [id])

    if(loading || !recipe){
        return(
            <div className='flex items-center justify-center w-full h-[100vh]'>
                <Loading />
            </div>
        )
    }

  return (
    <div className='w-full'>
        <Header 
         image={recipe?.image}
         title={recipe?.label}
        />

        <div className='w-full px-4 lg:px-20 mt-5 flex flex-col gap-10'>
            <div className='flex flex-wrap gap-10 items-center justify-center'>
                <div className='flex flex-col justify-center items-center gap-4'>
                    <p className='border border-slate-300 text-white py-1 px-4 rounded-full'>{recipe?.calories.toFixed(2)}</p>
                    <span className='text-white uppercase text-sm'>Calories</span>
                </div>

                <div className='flex flex-col justify-center items-center gap-4'>
                    <p className='border border-slate-300 text-white py-1 px-4 rounded-full'>{recipe?.totalTime}</p>
                    <span className='text-white uppercase text-sm'>Total Time</span>
                </div>

                <div className='flex flex-col justify-center items-center gap-4'>
                    <p className='border border-slate-300 text-white py-1 px-4 rounded-full'>{recipe?.yield}</p>
                    <span className='text-white uppercase text-sm'>Servings</span>
                </div>
            </div>

            <div className='w-full flex flex-col lg:flex-row lg:justify-between gap-20 lg:gap-0'>
                {/* Right Side */}
                <div className='flex flex-col w-full lg:w-2/4 gap-20 lg:border-r lg:border-slate-600 pr-4'>
                    <div>
                        <h1 className='text-green-500 underline text-2xl'>Ingredients</h1>
                        <div className='flex flex-col gap-2'>
                            {
                                recipe?.ingredientLines.map((item, index)=>(
                                    <div 
                                     key={index}
                                     className='text-white text-[14px] mt-4 flex gap-2 items-center'
                                    >
                                        <TiPin className='text-green-800' size={24}/>
                                        {item}
                                    </div>
                                ))
                            }
                        </div>
                    </div>

                    <div>
                        <h1 className='text-green-500 underline text-2xl'>Health Labels</h1>
                        <div className='flex flex-wrap gap-5 items-center mt-4'>
                            {
                                recipe?.healthLabels.map((item, index)=>(
                                    <div 
                                     key={index}
                                     className='text-white text-[14px] px-4 py-2 rounded-full border border-slate-500 flex gap-2 items-center bg-[#3b3a3a6c]'
                                    >
                                        <LuBadgeCheck className='text-green-800' size={22}/>
                                        {item}
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>

                {/* Left Side */}
                <div className='w-full lg:w-2/4 pl-4'>
                    {
                        recipes?.length > 0 &&(
                            <>
                             <p className='text-white text-2xl'>Also Try This:</p>

                             <div className='w-full lg:flex lg:flex-wrap gap-4 mt-4'>
                                {
                                    recipes?.map((item, index)=>{
                                        return(
                                         <RecipeCard key={index} recipe={item}/>
                                        )
                                    })
                                }
                             </div>
                            </>
                        )
                    }
                </div>
            </div>
        </div>
    </div>
  )
}

export default RecipeDetails 