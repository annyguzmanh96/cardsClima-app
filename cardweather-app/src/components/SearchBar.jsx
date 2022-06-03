import { BsSearch } from 'react-icons/bs';


export function SearchBar(){


    return(
        <div>
            <form>
                <input placeholder="Name of the city..." type="text"/>
                <button type='submit'><BsSearch /></button>
            </form> 
        </div>
    )
}