// 由于TypeScript默认并不支持*.vue后缀的文件，此代码是告诉TypeScript，*.vue后缀的文件可以交给vue模块来处理
declare module '*.vue' {
  import Vue from 'vue'
  export default Vue
}

// declare function require(string): string

