import react from '@vitejs/plugin-react-swc'
import { CodeInspectorPlugin } from 'code-inspector-plugin'
import { defineConfig } from 'electron-vite'
import path from 'path'
import { readFileSync } from 'fs'
import { fileURLToPath } from 'url'

const pkg = JSON.parse(readFileSync(new URL('./package.json', import.meta.url), 'utf-8'))
import { buildProxyBootstrapPlugin } from './scripts/buildProxyBootstrapPlugin'

const isDev = process.env.NODE_ENV === 'development'
const isProd = process.env.NODE_ENV === 'production'
const __dirname = path.dirname(fileURLToPath(import.meta.url))

export default defineConfig({
  main: {
    plugins: [
      buildProxyBootstrapPlugin({
        dependencies: Object.keys(pkg.dependencies),
        isProd,
        rootDir: __dirname
      })
    ],
    resolve: {
      alias: {
        '@main': path.resolve('src/main'),
        '@types': path.resolve('src/renderer/src/types'),
        '@shared': path.resolve('packages/shared'),
        '@logger': path.resolve('src/main/services/LoggerService'),
        '@mcp-trace/trace-core': path.resolve('packages/mcp-trace/trace-core'),
        '@mcp-trace/trace-node': path.resolve('packages/mcp-trace/trace-node')
      }
    },
    build: {
      rollupOptions: {
        external: ['bufferutil', 'utf-8-validate', 'electron', ...Object.keys(pkg.dependencies)],
        output: {
          manualChunks: undefined,
          inlineDynamicImports: true
        },
        onwarn(warning, warn) {
          if (warning.code === 'COMMONJS_VARIABLE_IN_ESM') return
          warn(warning)
        }
      },
      sourcemap: isDev
    },
    esbuild: isProd ? { legalComments: 'none' } : {},
    optimizeDeps: {
      noDiscovery: isDev
    }
  },
  preload: {
    plugins: [
      react({
        tsDecorators: true
      })
    ],
    resolve: {
      alias: {
        '@shared': path.resolve('packages/shared'),
        '@mcp-trace/trace-core': path.resolve('packages/mcp-trace/trace-core')
      }
    },
    build: {
      sourcemap: isDev
    }
  },
  renderer: {
    plugins: [
      (async () => (await import('@tailwindcss/vite')).default())(),
      react({
        tsDecorators: true
      }),
      ...(isDev ? [CodeInspectorPlugin({ bundler: 'vite' })] : [])
    ],
    css: {
      postcss: {}
    },
    resolve: {
      alias: {
        '@renderer': path.resolve('src/renderer/src'),
        '@shared': path.resolve('packages/shared'),
        '@types': path.resolve('src/renderer/src/types'),
        '@logger': path.resolve('src/renderer/src/services/LoggerService'),
        '@mcp-trace/trace-core': path.resolve('packages/mcp-trace/trace-core'),
        '@mcp-trace/trace-web': path.resolve('packages/mcp-trace/trace-web'),
        '@cherrystudio/ai-core/provider': path.resolve('packages/aiCore/src/core/providers'),
        '@cherrystudio/ai-core/built-in/plugins': path.resolve('packages/aiCore/src/core/plugins/built-in'),
        '@cherrystudio/ai-core': path.resolve('packages/aiCore/src'),
        '@cherrystudio/extension-table-plus': path.resolve('packages/extension-table-plus/src'),
        '@cherrystudio/ai-sdk-provider': path.resolve('packages/ai-sdk-provider/src')
      }
    },
    optimizeDeps: {
      exclude: ['pyodide'],
      esbuildOptions: {
        target: 'esnext'
      }
    },
    worker: {
      format: 'es'
    },
    build: {
      target: 'esnext',
      rollupOptions: {
        input: {
          index: path.resolve(__dirname, 'src/renderer/index.html'),
          miniWindow: path.resolve(__dirname, 'src/renderer/miniWindow.html'),
          selectionToolbar: path.resolve(__dirname, 'src/renderer/selectionToolbar.html'),
          selectionAction: path.resolve(__dirname, 'src/renderer/selectionAction.html'),
          traceWindow: path.resolve(__dirname, 'src/renderer/traceWindow.html')
        },
        onwarn(warning, warn) {
          if (warning.code === 'COMMONJS_VARIABLE_IN_ESM') return
          warn(warning)
        }
      }
    },
    esbuild: isProd ? { legalComments: 'none' } : {}
  }
})

