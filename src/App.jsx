import Header from './components/layout/Header'
import './components/layout/Header.css'

function App() {
  return (
    <>
      <Header />
      <main style={{ paddingTop: '64px' }}>
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1>My About</h1>
            <h2 className="mt-2" style={{ color: 'var(--color-muted)' }}>
              Setup berhasil ✓
            </h2>
            <p className="mt-4">
              React + Tailwind CSS + Lucide Icons siap digunakan.
            </p>
          </div>
        </div>
      </main>
    </>
  )
}

export default App
