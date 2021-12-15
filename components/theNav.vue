<template>
  <nav class="nav dark:bg-black text-black dark:lg:text-white">
    <div class="container mx-auto nav-content">
      <ul class="nav-links">
        <li><span role="img" aria-label="dark mode">🌕</span></li>
      </ul>
      <ul class="nav-links">
        <li>
          <nuxt-link class="nav-link" to="/">/</nuxt-link>
        </li>
        <li>
          <nuxt-link class="nav-link" to="/about">About</nuxt-link>
        </li>
        <li>
          <nuxt-link class="nav-link" to="/projects">Projects</nuxt-link>
        </li>
        <li>
          <nuxt-link class="nav-link" to="/contact">Contact</nuxt-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<style scoped>
.nav {
  z-index: 1000;
  width: 100%;
  background-color: #fff;
  color: rgba(55, 65, 81, 1);
  top: 0;
  position: sticky;
  padding: 0.75rem 1rem;
  margin: 0 auto;
  border-bottom: 1px solid rgba(229, 231, 235, 1);
}
.nav-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.nav li {
  list-style: none;
}
.nav-links {
  display: flex;
  justify-content: space-between;
}
.nav-links li {
  padding: 0.35rem 0.55rem;
  transition: background 0.5s;
  font-size: 0.9rem;
}
.nav-link {
  color: #37352f;
  font-weight: 800;
}
.nav-links li:hover {
  background: rgba(55, 53, 47, 0.1);
  border-radius: 5px;
}

.link-slash {
  margin-left: 2px;
  margin-right: 2px;
  color: rgba(55, 53, 47, 0.4);
}
</style>