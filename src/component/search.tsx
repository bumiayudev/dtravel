
const Search = ()=>{
    return (
        <form className="flex items-center ml-8">
            <input type="text" placeholder="Kategori | Lokasi" className="border border-gray-500 px-4 py-3 rounded tex-gray-500"/>
            <button className="bg-blue-500 hover:bg-blue-700 text-red-500 font-bold py-2 px-4 rounded">
                Search
            </button>
        </form>
    )
}

export default Search