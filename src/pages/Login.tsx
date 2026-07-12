import { Link } from 'react-router-dom';

function Login() {
  return (
    <div className="flex min-h-screen bg-[var(--bg)] text-[var(--text)] text-left">
      {/* Left Form Section */}
      <div className="flex w-full flex-col justify-center px-8 sm:px-12 md:px-16 lg:w-1/2 lg:px-24">
        <div className="mx-auto w-full max-w-md">
          <div className="mb-10">
            <div className="mb-8 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-accent)] text-white shadow-lg">
              {/* Logo icon */}
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            <h1>
              Welcome back
            </h1>
            <p className="mt-3 text-lg text-[var(--text)] opacity-80">
              Sign in to your HRMax account to continue.
            </p>
          </div>

          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="space-y-2">
              <label className="block text-sm font-semibold text-[var(--text-h)]" htmlFor="email">
                Email
              </label>
              <div className="relative">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4">
                  <svg className="h-5 w-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                  </svg>
                </div>
                <input
                  id="email"
                  type="email"
                  className="block w-full rounded-xl border border-[var(--border)] bg-[var(--color-surface)] dark:bg-[var(--color-bg-subtle)] pl-11 pr-4 py-3.5 text-[var(--text-h)] transition-all focus:border-[var(--color-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:ring-opacity-20 shadow-sm"
                  placeholder="name@company.com"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <label className="block text-sm font-semibold text-[var(--text-h)]" htmlFor="password">
                  Password
                </label>
                <a href="#" className="text-sm font-medium text-[var(--color-primary)] hover:text-[var(--color-accent)] transition-colors">
                  Forgot password?
                </a>
              </div>
              <div className="relative">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4">
                  <svg className="h-5 w-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <input
                  id="password"
                  type="password"
                  className="block w-full rounded-xl border border-[var(--border)] bg-[var(--color-surface)] dark:bg-[var(--color-bg-subtle)] pl-11 pr-4 py-3.5 text-[var(--text-h)] transition-all focus:border-[var(--color-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:ring-opacity-20 shadow-sm"
                  placeholder="••••••••"
                  required
                />
              </div>
            </div>

            <button
              type="submit"
              className="group relative flex w-full justify-center rounded-xl bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-accent)] px-4 py-3.5 text-lg font-semibold text-white shadow-[0_4px_14px_0_rgba(107,102,198,0.39)] transition-all hover:shadow-[0_6px_20px_rgba(107,102,198,0.23)] hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:ring-offset-2 focus:ring-offset-[var(--bg)]"
            >
              <span className="relative flex items-center">
                Sign In
                <svg className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </span>
            </button>
          </form>

          <p className="mt-10 text-center text-sm text-[var(--text)]">
            Don't have an account?{' '}
            <Link to="/signup" className="font-semibold text-[var(--color-primary)] hover:text-[var(--color-accent)] transition-colors">
              Create an account
            </Link>
          </p>
        </div>
      </div>

      {/* Right Branding Section */}
      <div className="relative hidden w-1/2 flex-col items-center justify-center bg-[var(--color-surface)] dark:bg-[#151224] lg:flex overflow-hidden border-l border-[var(--border)]">
        {/* Animated Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
          <div className="absolute -top-[10%] -left-[10%] w-[50%] h-[50%] rounded-full bg-[var(--color-primary)] opacity-20 blur-[100px] animate-pulse"></div>
          <div className="absolute top-[40%] -right-[10%] w-[60%] h-[60%] rounded-full bg-[var(--color-accent)] opacity-20 blur-[120px] animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>

        <div className="relative z-10 w-full max-w-lg px-8 text-left">
          <h2 className="mb-6 text-5xl leading-tight">
            Streamline your <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-accent)]">
              HR workflows.
            </span>
          </h2>
          <p className="text-xl text-[var(--text)] opacity-90 leading-relaxed mb-10">
            HRMax provides the ultimate platform to manage employees, track performance, and automate your daily tasks with ease.
          </p>
          
          <div className="flex gap-4">
            <div className="flex items-center gap-2 rounded-full bg-[var(--bg)] px-5 py-2.5 text-sm font-medium shadow-sm border border-[var(--border)]">
              <svg className="h-5 w-5 text-[var(--color-primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
              Smart Analytics
            </div>
            <div className="flex items-center gap-2 rounded-full bg-[var(--bg)] px-5 py-2.5 text-sm font-medium shadow-sm border border-[var(--border)]">
              <svg className="h-5 w-5 text-[var(--color-primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
              Automated Payroll
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
