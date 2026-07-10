import { Link } from 'react-router-dom';

function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-[var(--color-surface)] dark:bg-[var(--color-bg-subtle)] rounded-2xl p-8 shadow-[var(--shadow)] border border-[var(--border)] transition-all duration-300 hover:shadow-2xl">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-[var(--text-h)] mb-2">Welcome Back</h1>
          <p className="text-[var(--text)]">Sign in to continue to HRMax</p>
        </div>

        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
          <div className="space-y-2 text-left">
            <label className="text-sm font-medium text-[var(--text)] block" htmlFor="email">
              Email Address
            </label>
            <input
              id="email"
              type="email"
              className="w-full px-4 py-3 rounded-lg bg-[var(--bg)] border border-[var(--border)] text-[var(--text-h)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent transition-all"
              placeholder="name@company.com"
              required
            />
          </div>

          <div className="space-y-2 text-left">
            <div className="flex justify-between">
              <label className="text-sm font-medium text-[var(--text)] block" htmlFor="password">
                Password
              </label>
              <a href="#" className="text-sm text-[var(--color-accent)] hover:text-[var(--color-primary)] transition-colors">
                Forgot password?
              </a>
            </div>
            <input
              id="password"
              type="password"
              className="w-full px-4 py-3 rounded-lg bg-[var(--bg)] border border-[var(--border)] text-[var(--text-h)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent transition-all"
              placeholder="••••••••"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 px-4 rounded-lg text-white bg-[var(--color-primary)] hover:bg-[var(--color-accent)] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[var(--color-primary)] focus:ring-offset-[var(--bg)] transform transition-all duration-200 hover:-translate-y-0.5 font-semibold text-lg"
          >
            Sign In
          </button>
        </form>

        <p className="mt-8 text-center text-[var(--text)]">
          Don't have an account?{' '}
          <Link to="/signup" className="text-[var(--color-accent)] hover:text-[var(--color-primary)] font-medium transition-colors">
            Sign up now
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
