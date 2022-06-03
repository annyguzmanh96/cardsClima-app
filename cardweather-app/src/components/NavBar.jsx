import logo from './weather.webp'
import style from './NavBar.module.css'
import { SearchBar } from './SearchBar'

export function NavBar(){
    return(
        <div className={style.containerAll}>
            <div className={style.container}>
                <img className={style.logo} src={logo} alt='Logo' />
                <p className={style.title}>Cards Weather</p>
            </div>
            <SearchBar className={style.searchBar} />
        </div>
    )
}
