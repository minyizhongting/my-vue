<template>
    <div class="bh-header">
        <div class="info">
            <i class="logo" :style="'background-image: url(' + logoImg + ')'"></i>
        </div>
    </div>
</template>

<script>
    import logoImg from '@/assets/person_logo.png';
    export default {
        name: 'TopNav',
        data() {
            return {
                logoImg: logoImg
            }
        }
    }
</script>

<style lang="scss">
    // reset
    body {
        font-family: Segoe UI, Microsoft Yahei, 微软雅黑, Tahoma, Arial, sans-serif;
        &.mac {
            font-family: San Francisco, PingFang SC, Hiragino Sans GB, Segoe UI, Microsoft Yahei, 微软雅黑, Tahoma, Arial, sans-serif;
        }
    }
    html, body, header, footer, div, dl, dt, dd, ul, ol, li, h1, h2, h3, h4, h5, h6, form, input, button, textarea, p, th, td, span, i, em {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    ul {
        list-style: none;
    }
    a {
        margin: 0;
        padding: 0;
        border: 0;
        vertical-align: baseline;
        background: transparent;
        text-decoration: none;
    }
    ul {
        list-style: none;
    }
    .bh-header{
        height: 80px;
        box-shadow: 0 4px 8px rgba(0,0,0,.05);
        display: flex;
        flex-flow: row nowrap;
        justify-content: flex-end;
        align-items: center;
        .info{
            min-width: 150px;
            i{
                display: inline-block;
                width: 42px;
                height: 42px;
                border-radius: 42px;
                background-size: cover;
            }
        }
    }
</style>
