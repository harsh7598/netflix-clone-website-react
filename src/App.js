
import React from "react"
import NavScrollExample from "./Components/Appbar";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./index.css"
import Cards from "./Components/cards";
import webseries_data from "./Resourses/data";
import CarouselFadeExample from "./slide";

export default function App() {
    return (
        <>
            <NavScrollExample />
            <h1 className="text-center text-light">Welcome to Clone <span className="text-underline"><b> Netflix</b></span></h1>
            <CarouselFadeExample/>
            <hr/>
            <h1 className="text-center text-light"> Best Movies 🔥</h1>
            <hr/>
            <div className="container grids">
                <Cards name="365 Days" img="https://m.media-amazon.com/images/M/MV5BMDdhYzNkOWQtYWNlNi00NDdjLWJlZDMtMjJjZDYyNjAxM2U1XkEyXkFqcGdeQXVyMTQyMTMwOTk0._V1_FMjpg_UX1000_.jpg" p="2020 ‧ Romance/Drama ‧ 1h 56m" />
                <Cards name="K.G.F" img="https://m.media-amazon.com/images/M/MV5BZDNlNzBjMGUtYTA0Yy00OTI2LWJmZjMtODliYmUyYTI0OGFmXkEyXkFqcGdeQXVyODIwMDI1NjM@._V1_FMjpg_UX1000_.jpg" p="2018 ‧ Action/Drama ‧ 2h 35m" />
                <Cards name="Phir Hera Pheri" img="https://m.media-amazon.com/images/M/MV5BNzgzYjZjYzMtNjcyYy00NWI3LTg1NDItOTMzMzdhMjhjNWExXkEyXkFqcGdeQXVyNjA3OTI5MjA@._V1_.jpg" p=" 2006 ‧ Comedy Movie ‧ 2h 33m" />
                <Cards name="Dhol" img="https://upload.wikimedia.org/wikipedia/en/2/20/Dhol1.jpg" p="2007 ‧ Comedy Movie ‧ 2h 25m" />
                <Cards name="Venom" img="https://m.media-amazon.com/images/M/MV5BNTFkZjdjN2QtOGE5MS00ZTgzLTgxZjAtYzkyZWQ5MjEzYmZjXkEyXkFqcGdeQXVyMTM0NTUzNDIy._V1_FMjpg_UX1000_.jpg" p="2018 ‧ Action/Sci-fi ‧ 1h 52m" />
                <Cards name="Deadpool" img="https://resizing.flixster.com/JK6oR_ocrhYq1fFi1fTmVhdDtR4=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzg3NGEwM2NkLTI2N2QtNDk4ZS05OGY5LWU0MmQ5NzAyZGJmMC53ZWJw" p="2016 ‧ Action/Adventure ‧ 1h 48m" />
                <Cards name="Hisss" img="https://flxt.tmsimg.com/assets/p8362580_p_v8_aa.jpg" p="2010 ‧ Horror/Musical ‧ 1h 38m"/>
                <Cards name="Sooryavansham" img="https://m.media-amazon.com/images/I/71Snu9yi+oL._RI_.jpg" p="1999 ‧ Hindi/Drama ‧ 2h 56m"/>
            </div>
            <hr/>
            <h1 className="text-center text-light"> Webseries 🔥</h1>
            <hr/>
            <div className="container grids">
                {
                    webseries_data.map((val)=>{
                       return <Cards name={val.webseries_name} img={val.img_link} p={val.desc}/>
                    })
                }
            </div>
            
        </>
    )


}