import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

function Signup() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { type: 'spring', stiffness: 300, damping: 24 }
    }
  };
  return (
    <div className="flex min-h-screen bg-background text-foreground text-left">
      {/* Left Form Section */}
      <div className="flex w-full flex-col justify-center px-8 sm:px-12 md:px-16 lg:w-1/2 lg:px-24">
        <motion.div 
          className="mx-auto w-full max-w-md"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants} className="mb-10">
            <div className="mb-8 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-accent text-white shadow-lg">
              {/* Logo icon */}
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            <h1>
              Create an account
            </h1>
            <p className="mt-3 text-lg text-foreground opacity-80">
              Join HRMax and start managing your team today.
            </p>
          </motion.div>

          <motion.div variants={itemVariants}>
            <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
            <div className="space-y-2">
              <label className="block text-sm font-semibold text-heading" htmlFor="name">
                Full Name
              </label>
              <div className="relative">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4">
                  <svg className="h-5 w-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <input
                  id="name"
                  type="text"
                  className="block w-full rounded-xl border border-border-subtle bg-surface dark:bg-bg-subtle pl-11 pr-4 py-3.5 text-heading transition-all focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-20 shadow-sm"
                  placeholder="John Doe"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-semibold text-heading" htmlFor="email">
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
                  className="block w-full rounded-xl border border-border-subtle bg-surface dark:bg-bg-subtle pl-11 pr-4 py-3.5 text-heading transition-all focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-20 shadow-sm"
                  placeholder="name@company.com"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-semibold text-heading" htmlFor="password">
                Password
              </label>
              <div className="relative">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4">
                  <svg className="h-5 w-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <input
                  id="password"
                  type="password"
                  className="block w-full rounded-xl border border-border-subtle bg-surface dark:bg-bg-subtle pl-11 pr-4 py-3.5 text-heading transition-all focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-20 shadow-sm"
                  placeholder="••••••••"
                  required
                />
              </div>
            </div>

            <button
              type="submit"
              className="mt-4 group relative flex w-full justify-center rounded-xl bg-gradient-to-r from-primary to-accent px-4 py-3.5 text-lg font-semibold text-white shadow-[0_4px_14px_0_rgba(107,102,198,0.39)] transition-all hover:shadow-[0_6px_20px_rgba(107,102,198,0.23)] hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background"
            >
              <span className="relative flex items-center">
                Sign Up
                <svg className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </span>
            </button>
            </form>
          </motion.div>

          <motion.div variants={itemVariants}>
            <p className="mt-10 text-center text-sm text-foreground">
            Already have an account?{' '}
            <Link to="/login" className="font-semibold text-primary hover:text-accent transition-colors">
              Sign in
            </Link>
            </p>
          </motion.div>
        </motion.div>
      </div>

      {/* Right Branding Section */}
      <div className="relative hidden w-1/2 flex-col items-center justify-center bg-surface dark:bg-[#151224] lg:flex overflow-hidden border-l border-border-subtle">
        {/* Animated Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
          <div className="absolute -top-[10%] -right-[10%] w-[50%] h-[50%] rounded-full bg-[var(--color-accent)] opacity-20 blur-[100px] animate-pulse"></div>
          <div className="absolute top-[40%] -left-[10%] w-[60%] h-[60%] rounded-full bg-[var(--color-primary)] opacity-20 blur-[120px] animate-pulse" style={{ animationDelay: '1.5s' }}></div>
        </div>

        <motion.div 
          className="relative z-10 w-full max-w-lg px-8 text-left"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ type: 'spring', stiffness: 300, damping: 30, delay: 0.3 }}
        >
          <h2 className="mb-6 text-5xl leading-tight">
            Unlock your <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
              team's potential.
            </span>
          </h2>
          <p className="text-xl text-foreground opacity-90 leading-relaxed mb-10">
            Join thousands of forward-thinking companies that rely on HRMax to scale their operations and empower their employees.
          </p>
          
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-background shadow-sm border border-border-subtle">
                <svg className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <p className="text-heading font-medium">Quick and easy onboarding</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-background shadow-sm border border-border-subtle">
                <svg className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <p className="text-heading font-medium">Bank-grade security</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Signup;
