<script></script>

<header>
    <a href="/" class="logo">
        <!-- <img src="/assets/philippines-flag-icon.svg" alt="MyVote.ph Home"> -->
        <div>
            <span class="title blue">myvote</span><span class="title red">.ph</span>
        </div>
    </a>
    <nav>
        <!-- <a href="/advocacy/">Advocacy</a> -->
        <a href="/candidates/senate">Senatorial Candidates</a>
        <a href="/issues/">Issues</a>
        <a href="/dynasties/">Dynasties</a>
        <a href="/news/">News</a>
    </nav>
</header>

<style>
    header {
        background-color: rgba(255, 255, 255, 1);
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0.5rem 0.75rem;
        position: fixed;
        top: 0;
        width: 100%;
        z-index: 999;
    }
    @media (min-width: 60rem) {
        header {
            padding: 0.75rem 2rem;
        }
    }
    nav {
        display: none;
        font-size: var(--fs-sm);
    }
    @media (min-width: 60rem) {
        nav {
            display: block;
        }
    }
    nav a {
        margin-left: 0.5rem;
        padding: 0.5rem 0.75rem;
        transition: all 100ms ease-in-out;
    }
    nav a:hover {
        border-bottom: 2px solid var(--color-red-flag);
    }
    /* .logo {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        line-height: 1.5rem;
    }
    .logo > img {
        width: 48px;
    }
    @media (width < var(--br-sm)) {
        .logo {
            gap: 0.25rem;
        }
        .logo > img {
            width: 40px;
        }
    } */
    .title {
        font-size: 2rem;
        font-weight: 700;
        color: var(--color-white);
    }
    @media (width < 40rem) {
        .title {
            font-size: 1.75rem;
        }
    }
    .title.blue {
        color: var(--color-blue-flag);
    }
    .title.red {
        color: var(--color-red-flag);
    }
</style>