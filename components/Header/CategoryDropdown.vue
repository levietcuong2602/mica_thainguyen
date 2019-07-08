<template>
  <header class="header">
    <nav class="header__nav">
      <ul class="header__navbar">
        <li
          class="header__item"
          @click="(show = !show)"
        >
          <a
            href="#"
            class="header__link"
          >
            <span>DANH MỤC SẢN PHẨM</span>
            <button
              :class="['header--btn', {'btn-active': show}]"
              v-if="show"
              key="on"
            >
              <svg
                viewBox="0 0 24 24"
                class="header--icon"
              >
                <title>Close</title>
                <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
              </svg>
            </button>
            <button
              :class="['header--btn', {'btn-active': !show}]"
              v-else
              key="off"
            >
              <svg
                viewBox="0 0 24 24"
                class="header--icon"
              >
                <title>Navigation Menu</title>
                <path d="M4 8h4V4H4v4zm6 12h4v-4h-4v4zm-6 0h4v-4H4v4zm0-6h4v-4H4v4zm6 0h4v-4h-4v4zm6-10v4h4V4h-4zm-6 4h4V4h-4v4zm6 6h4v-4h-4v4zm0 6h4v-4h-4v4z" />
              </svg>
            </button>
          </a>
          <transition name="dropdown">
            <div
              class="header__dropdown-menu"
              v-bind:class="{ active: show }"
              v-if="show"
            >
              <TreeMenu />
            </div>
          </transition>
        </li>
      </ul>
    </nav>
  </header>
</template>
<script>
import TreeMenu from './TreeMenu';

export default {
  name: 'CategoryDropdown',
  components: {
    TreeMenu
  },
  data() {
    return {
      show: false,
    }
  }
}
</script>
<style scoped lang="scss">
ul {
  margin: 0;
  padding: 0;
}
li {
  list-style: none;
}

.header {
  height: 100%;
  display: flex;
  align-items: center;
  background: #f79c3a;
  padding-right: 20px;
  padding-left: 20px;

  &__nav {
    position: relative;
  }
  &__navbar {
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: flex-end;
  }
  &__item {
    position: relative;
  }
  &__link {
    .header--icon {
      color: #fff;
    }
    .header--btn {
      // top: 0;
      // right: 0;
      // position: absolute;
      &:focus {
        outline: 0;
      }
    }
  }
  &--icon {
    fill: currentcolor;
    width: 1.65rem;
    height: 1.65rem;
    display: inline-flex;
  }
  &--btn {
    cursor: pointer;
    padding: 0;
    display: inline-block;
    border: 1px solid transparent;
    background-color: transparent;
    appearance: none;
    user-select: none;
  }
  &__dropdown-menu {
    position: absolute;
    top: 100%;
    right: -21px;
    width: 230px;
    height: auto;
    margin-top: 10px;
    background-color: white;
    border: 1px solid #dadce0;
    background-clip: padding-box;
    z-index: 1000;
  }
  &__dropdown-menu-link {
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: flex-start;
    line-height: 0;
    color: #3c4043;
    padding: 0.6rem 1.5rem 0.6rem 1.5rem;
    margin-bottom: 0.4rem;
    border-radius: 0 50px 50px 0;
    &:hover {
      background-color: rgba(0, 0, 0, 0.039);
    }
  }
  &__dropdown-menu-svg {
    padding-right: 16px;
    .header--icon {
      width: 1.4rem;
      height: 1.4rem;
    }
  }
}

.header__link {
  color: #fff;
  font-size: 90%;
  font-weight: 500;
}
.header__link:hover,
a:hover {
  text-decoration: none;
}

a {
  text-decoration: none;
}

.btn-active {
  transition: all 0.6s;
}
// Dropdown animation
.dropdown-enter-active,
.dropdown-leave-active {
  transition: all 1s;
}
.dropdown-enter,
.dropdown-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
</style>
