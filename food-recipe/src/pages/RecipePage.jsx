import { useCallback, useEffect, useState } from 'react';
import { fetchRecipes } from '../utils';
import RecipeCard from '../component/RecipeCard';
import SearchBar from '../component/SearchBar';
import { CiSearch } from "react-icons/ci";

const RecipePage = () => {
  const [recipes, setRecipes] = useState([]);
  const [query, setQuery] = useState("Pasta");

  const [from, setFrom] = useState(0);
  const [limit] = useState(20);

  const handleSearch = (e) => {
    setQuery(e.target.value);
  };

  // FETCH RECIPES
  const getAllRecipes = useCallback(async (reset = false) => {
    try {
      const data = await fetchRecipes({
        query,
        from,
        limit,
      });

      // RESET WHEN SEARCHING
      if (reset) {
        setRecipes(data);
      } else {
        // APPEND NEW RECIPES
        setRecipes((prev) => [...prev, ...data]);
      }

    } catch (error) {
      console.log(error);
    }
  }, [query, from, limit]);

  // SEARCH SUBMIT
  const handleSubmit = async (e) => {
    e.preventDefault();

    setFrom(0);

    try {
      const data = await fetchRecipes({
        query,
        from: 0,
        limit,
      });

      setRecipes(data);

    } catch (error) {
      console.log(error);
    }
  };

  // SHOW MORE
  const showMore = () => {
    setFrom((prev) => prev + limit);
  };

  // INITIAL FETCH + PAGINATION FETCH
  useEffect(() => {
    getAllRecipes(from === 0);
  }, [getAllRecipes]);

  return (
    <div className='px-4 lg:px-20 pt-40 w-full flex flex-col gap-20'>

      {/* SEARCH */}
      <div className='flex items-center justify-center w-full'>
        <form
          className='w-full lg:w-2/4'
          onSubmit={handleSubmit}
        >
          <SearchBar
            value={query}
            placeholder="Search for recipes..."
            containerStyle='border border-slate-800 rounded-full px-6 py-2 w-full text-slate-600 placeholder:text-sm placeholder:text-slate-500 focus:ring-1 focus:border-slate-700 outline-none shadow-lg'
            handleInput={handleSearch}
            rightIcon={
              <CiSearch className='text-gray-400' size={24} />
            }
          />
        </form>
      </div>

      {/* RECIPES */}
      {
        recipes?.length > 0 && (
          <>
            <div className='flex flex-wrap gap-10'>
              {
                recipes?.map((item, index) => (
                  <RecipeCard
                    key={`${item.recipe.uri}-${index}`}
                    recipe={item}
                  />
                ))
              }
            </div>

            {/* SHOW MORE */}
            <div className='py-5 flex items-center justify-center'>
              <button
                type='button'
                className='text-white px-6 py-3 rounded-full bg-green-700 hover:bg-green-600 transition-all duration-300 cursor-pointer shadow-lg'
                onClick={showMore}
              >
                Show More
              </button>
            </div>
          </>
        )
      }
    </div>
  );
};

export default RecipePage;