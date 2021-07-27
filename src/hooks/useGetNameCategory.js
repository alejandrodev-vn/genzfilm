/* eslint-disable array-callback-return */
function useGetNameCategory(film, listCategories) {
    const getNameCategory = () => {
        if(film.categories && listCategories){
            return film.categories.map(film => {
                const name = listCategories.filter(cat => {
                    return film.idCategory === cat.id
                })
                return name
            })
        }
        return
    }
  
    const loopCat = (categories) => {
        const temp = [];
        categories.map(category => {
            if(category[0]){
                temp.push(category[0].name)
            }
        })
        const result = temp.join(", ")
        return result
    }
    const getCategories = () => {
        const listName =  getNameCategory();
        if(listName && listName.length!==0){
            return loopCat(listName)
        }
        return 'Không có'
    }
    let categoriesString = getCategories()
    return categoriesString
}

export default useGetNameCategory;