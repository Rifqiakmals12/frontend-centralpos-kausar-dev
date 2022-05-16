import React from 'react'
import './sb-admin.css'
import './index.css'
import SideNavigation from 'components/Dashboard/SideNavigation'

export default function Dashboard(props) {
    const DashboardContent = props.content
    return (
        <div>
            <nav class="sb-topnav navbar navbar-expand navbar-dark bg-primary">
                <a id="navbar-brand" class="navbar-brand ps-3 fw-bolder" href="index.html">CentralPOS</a>
                <button id="sidebarToggle" class="btn btn-link btn-sm order-1 order-lg-0 me-4 me-lg-0" href="#!"><i class="fas fa-bars"></i></button>
            </nav>
            <div id="layoutSidenav">
                <div id="layoutSidenav_nav">
                    <nav class="sb-sidenav accordion sb-sidenav-dark bg-primary" id="sidenavAccordion">
                        <div class="sb-sidenav-menu">
                            <SideNavigation />
                        </div>
                    </nav>
                </div>
                <div id="layoutSidenav_content">
                    <main>
                        <div class="container-fluid p-4">
                            <DashboardContent />
                        </div>
                    </main>
                </div>
            </div>
        </div>
    )
}
