import { CiSearch } from "react-icons/ci";
import './nav.css'
function Navbar(){


    return (<div>
        <div className="main">
        <div className="suba">
            <button>Startup</button>
            <button>Main</button>
        </div>
        <div className="subb">
            <button>Union</button>
            <button>Metiam</button>
            <button>Maltileval</button>
            <CiSearch />
        </div>
        <div className="subc">
            <button>Task</button>
            <button>Apt</button>
        </div>
        </div>
        <div className="mainb">
            <h1>WE DESIGN YOUR SPACE</h1>
            <p> This medicine also protects nerve fibers and heal damaged nerve cells.</p>
            <button> SEE OUR PROJECTS</button>
        </div>

    </div>
    )
}

export default Navbar