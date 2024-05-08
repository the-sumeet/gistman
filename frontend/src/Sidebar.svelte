<script>
    import { GetGists } from "../wailsjs/go/main/App.js";

    let gists = [];

    GetGists().then((result) => {
        gists = result;
        console.log(result);
    });
</script>

<div id="layoutSidenav_nav" style="max-width: 256px;">
    <nav class="sb-sidenav accordion sb-sidenav-dark" id="sidenavAccordion">
        <div class="sb-sidenav-menu">
            <div class="nav">
                <div class="sb-sidenav-menu-heading">Interface</div>
                {#each gists as { id, files }}
                    <a
                        class="nav-link collapsed"
                        href="#"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapse{id}"
                        aria-expanded="false"
                        aria-controls="collapse{id}"
                    >
                        <div class="sb-nav-link-icon">
                            <i class="fas fa-columns"></i>
                        </div>
                        {id}
                        <div class="sb-sidenav-collapse-arrow">
                            <i class="fas fa-angle-down"></i>
                        </div>
                    </a>
                    <div
                        class="collapse"
                        id="collapse{id}"
                        aria-labelledby="headingOne"
                        data-bs-parent="#sidenavAccordion"
                    >
                        <nav class="sb-sidenav-menu-nested nav">
                            {#each Object.entries(files) as [filename, fileInfo]}
                            <a class="nav-link" href="layout-static.html"
                                >{filename}</a
                            >
                            {/each}
                        </nav>
                    </div>
                {/each}
            </div>
        </div>
        <div class="sb-sidenav-footer">
            <div class="small">Logged in as:</div>
            Start Bootstrap
        </div>
    </nav>
</div>
