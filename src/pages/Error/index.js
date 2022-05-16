import "./index.css"
import { Link } from "react-router-dom"
export default function Error(props) {
    return (
        <div class="error">
            <div class="float-content">
                <h1 class="fw-bolder display-4">{props.title}</h1>
                <p class="fs-5">{props.description}</p>
                <Link className="btn btn-outline-light" to="/">
                    Kembali ke beranda
                </Link>
            </div>
        </div>
    )
}