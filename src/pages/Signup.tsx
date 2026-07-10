import { Link } from 'react-router-dom';

function Signup() {
  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-[var(--color-surface)] dark:bg-[var(--color-bg-subtle)] rounded-2xl p-8 shadow-[var(--shadow)] border border-[var(--border)] transition-all duration-300 hover:shadow-2xl">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-[var(--text-h)] mb-2">Create Account</h1>
          <p className="text-[var(--text)]">Join HRMax to manage your team</p>
        </div>

        <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
          <div className="space-y-1.5 text-left">
            <label className="text-sm font-medium text-[var(--text)] block" htmlFor="name">
              Full Name
            </label>
            <input
              id="name"
              type="text"
              className="w-full px-4 py-3 rounded-lg bg-[var(--bg)] border border-[var(--border)] text-[var(--text-h)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent transition-all"
              placeholder="John Doe"
              required
            />
          </div>

          <div className="space-y-1.5 text-left">
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

          <div className="space-y-1.5 text-left">
            <label className="text-sm font-medium text-[var(--text)] block" htmlFor="password">
              Password
            </label>
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
            className="w-full py-3 px-4 mt-2 rounded-lg text-white bg-[var(--color-primary)] hover:bg-[var(--color-accent)] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[var(--color-primary)] focus:ring-offset-[var(--bg)] transform transition-all duration-200 hover:-translate-y-0.5 font-semibold text-lg"
          >
            Sign Up
          </button>
        </form>

        <p className="mt-8 text-center text-[var(--text)]">
          Already have an account?{' '}
          <Link to="/login" className="text-[var(--color-accent)] hover:text-[var(--color-primary)] font-medium transition-colors">
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Signup;
