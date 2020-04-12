<template>
    <div :class="['menu', classList]">
        <a href="#"
           class="menu__toggle"
           @click.prevent="handleToggle"></a>
        <div class="menu__drawer"
             @click="handleToggle">
            <div class="menu__drawer-list-wrapper">
                <ul class="menu__drawer-list"
                    @click.stop>
                    <li v-for="({href, label, target}) in $options.menuItems"
                        :key="href"
                        class="menu__drawer-list-item">
                        <a :href="href"
                           :target="target">
                            {{ label }}
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
const menuItems = [
    {
        href: 'https://blog.shengslogar.com',
        label: 'Blog',
        target: '_blank',
    },
    {
        href: 'mailto:sheng@diglactic.com',
        label: 'Email',
        target: '_self',
    },
    {
        href: 'https://linkedin.com/in/shengslogar/',
        label: 'LinkedIn',
        target: '_blank',
    },
    {
        href: 'https://twitter.com/ShengSlogar',
        label: 'Twitter',
        target: '_blank',
    },
    {
        href: 'https://diglactic.com',
        label: 'Company',
        target: '_blank',
    }
];

export default {
    name: 'Menu',
    menuItems,
    data() {
        return {
            isOpen: false
        };
    },
    computed: {
        classList() {
            return {
                'menu--open': this.isOpen
            };
        }
    },
    methods: {
        handleToggle() {
            this.isOpen = !this.isOpen;
        }
    },
    mounted() {
        window.addEventListener('keydown', (event) => {
            if (this.isOpen && event.key === 'Escape') {
                this.handleToggle();
                event.preventDefault();
            }
        });
    }
};
</script>

<style lang="scss">
.menu {
    $transition: .2s ease;

    &__toggle {
        position: fixed;
        z-index: 11;
        top: 2rem;
        right: 2rem;
        height: 3rem;
        width: 3rem;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        background: rgba(32, 35, 40, .75);
        padding: .75rem;
        transition: $transition;
        transition-property: background-color;

        &::before,
        &::after {
            content: '';
            width: 100%;
            height: .25rem;
            background: #fff;
            display: block;
            transition: $transition;
            transition-property: transform;
        }
    }

    &--open &__toggle {
        background: none;

        &::before {
            transform: translateY(.625rem) rotateZ(-45deg);
        }

        &::after {
            transform: translateY(-.625rem) rotateZ(45deg);
        }
    }

    &__drawer {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        overflow: auto;
        padding: 2rem;
        background: rgba(32, 35, 40, .98);
        z-index: 10;
        transition: $transition;
        transition-property: transform, visibility, opacity;
        pointer-events: none;
        transform: scaleY(1.1);
        opacity: 0;
        visibility: hidden;

        &-list-wrapper {
            min-height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
            text-align: center;
        }

        &-list {
            list-style: none;
        }

        &-list-item {
            margin: 4rem 0;

            a {
                font-size: 2rem;
                color: #fff;
                text-decoration: none;
            }
        }
    }

    &--open &__drawer {
        pointer-events: all;
        transform: none;
        opacity: 1;
        visibility: visible;
    }
}
</style>
