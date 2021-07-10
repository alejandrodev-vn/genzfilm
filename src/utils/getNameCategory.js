export const getNameCategory = (catFilm, listCat) => {
    if(catFilm && listCat){
        return catFilm.map(film => {
            const name = listCat.filter(cat => {
                return film.idCategory === cat.id
            })
            return name
        })
    }
}