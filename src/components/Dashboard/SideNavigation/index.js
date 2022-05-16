import { NavLink } from "react-router-dom"
import dashboard from "assets/icons/dashboard.svg"
import produk from "assets/icons/produk.svg"
import laporan from "assets/icons/laporan.svg"
import pegawai from "assets/icons/pegawai.svg"
import promo from "assets/icons/promo.svg"

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function NavItem(props) {
    return (
        <NavLink className="nav-link" to={props.to}>
            <div class="sb-nav-link-icon">
                <img src={props.icon} />
            </div>
            {capitalizeFirstLetter(props.label)}
        </NavLink>
    )
}

export default function SideNavigation() {
    return (
        <div class="nav">
            <div class="sb-sidenav-menu-heading">Aplikasi</div>
            <NavItem label="dashboard" to="/" icon={dashboard} />
            <NavItem label="produk" to="/produk" icon={produk} />
            <NavItem label="laporan" to="/coming-soon" icon={laporan} />
            <NavItem label="pegawai" to="/coming-soon" icon={pegawai} />
            <NavItem label="promo" to="/coming-soon" icon={promo} />
        </div>
    )
}